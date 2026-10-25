"""Register 56 uploaded characters without modifying the original PNG pixels.

Usage: python3 scripts/import-character-art.py /path/to/character_crops_52.zip
The completed ZIP contains 52 individual sheets plus the additional four-row sheet.
Requires Pillow for alpha analysis; the game has no Python dependency.
"""
import hashlib
import io
import json
import statistics
import sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image

root = Path(__file__).resolve().parent.parent
mapping = json.loads((root / 'scripts/character-art-map.json').read_text())
destination = root / 'public/assets/characters'
frame_names = ['idle0', 'run0', 'run1', 'jump', 'dash', 'wind', 'attack', 'ultimate']


def register(character_id, source_name, data, asset, region=None):
    image = Image.open(io.BytesIO(data)).convert('RGBA')
    width, height = image.size
    top, bottom = region or (0, height)
    if not 0 <= top < bottom <= height:
        raise ValueError(f'Invalid source row: {source_name}')
    row_height = bottom - top
    alpha = image.getchannel('A').crop((0, top, width, bottom)).point(lambda value: 255 if value >= 48 else 0)
    # Uploaded rows have variable gaps; uniform widths can include a neighbouring pose.
    mass = [alpha.crop((x, 0, x+1, row_height)).histogram()[255] for x in range(width)]
    boundaries = [0]
    radius = round(width / 8 * .09)
    for column in range(1, 8):
        expected = round(column * width / 8)
        boundary = min(range(expected-radius, expected+radius+1),
            key=lambda x: (sum(mass[max(0, x-1):x+2]), abs(x-expected)))
        boundaries.append(boundary)
    boundaries.append(width)
    cells = []
    for column in range(8):
        left, right = boundaries[column:column+2]
        bounds = alpha.crop((left, 0, right, row_height)).getbbox()
        if not bounds:
            raise ValueError(f'Empty frame: {source_name}:{column}')
        x0, y0, x1, y1 = bounds
        cells.append((left, right, (left+x0, y0, left+x1, y1)))
    baseline = round(statistics.median(cell[2][3] for cell in cells[:3]))
    frames = {}
    pixels = alpha.load()
    for column, (left, right, bounds) in enumerate(cells):
        x0, y0, x1, y1 = bounds
        foot_y = y1 if column == 3 else baseline
        # Locate the feet independently of long weapons and trailing capes.
        band_left = left + round((right-left) * .27)
        band_right = left + round((right-left) * .72)
        band_top = max(y0, foot_y-max(12, round((y1-y0) * .09)))
        weights = [(x, sum(pixels[x, y] > 0 for y in range(band_top, min(row_height, foot_y))))
            for x in range(band_left, band_right)]
        total = sum(weight for _, weight in weights)
        center = (left+right) / 2
        if total:
            cumulative = 0
            for x, weight in weights:
                cumulative += weight
                if cumulative >= total / 2:
                    center = x
                    break
        frames[frame_names[column]] = dict(x=x0, y=y0+top, w=x1-x0, h=y1-y0, ax=round(center-x0), ay=foot_y-y0)
    scale = 64 / frames['idle0']['h']
    for frame in frames.values():
        if frame['ay'] > 0:
            scale = min(scale, 84 / frame['ay'])
        if frame['h'] > frame['ay']:
            scale = min(scale, 39 / (frame['h']-frame['ay']))
        scale = min(scale, 76 / max(frame['ax'], frame['w']-frame['ax'], 1))
    return dict(id=character_id, source=source_name, asset=asset, sha256=hashlib.sha256(data).hexdigest(),
        width=width, height=height, sourceRegion=[top, bottom], scale=round(scale, 6), frames=frames)


records, assets = [], {}
with ZipFile(sys.argv[1]) as archive:
    def read_source(name):
        # Accept both a flat ZIP and a ZIP containing the character_crops_52 folder.
        matches = [entry for entry in archive.namelist() if entry == name or entry.endswith('/'+name)]
        if len(matches) != 1:
            raise ValueError(f'Expected exactly one source file: {name}')
        return archive.read(matches[0])

    for source, specification in mapping.items():
        if isinstance(specification, list):
            for index, character_id in enumerate(specification, 1):
                name = f'{source}/{source}_character_{index:02}.png'
                data = read_source(name)
                asset = f'{character_id}.png'
                assets[asset] = data
                records.append(register(character_id, name, data, asset))
        else:
            name, asset = specification['file'], specification['asset']
            data = read_source(name)
            assets[asset] = data  # Four definitions share the same original PNG.
            for index, character_id in enumerate(specification['rows']):
                region = specification['boundaries'][index:index+2]
                records.append(register(character_id, name+f'#row={index+1}', data, asset, region))

if len(records) != 56 or len({record['id'] for record in records}) != 56:
    raise ValueError('The completed upload must map to exactly 56 unique characters')

lines = ['// Generated by scripts/import-character-art.py; source pixels are preserved.',
    '// source_01/character_01 is Nemea (anima), as explicitly identified by the owner.',
    'const records = [']
for record in records:
    metadata = {key: value for key, value in record.items() if key != 'id'}
    lines.append('  {id:'+json.dumps(record['id'])+',sheet:new URL("../../assets/characters/'
        + record['asset']+'",import.meta.url).href,...'+json.dumps(metadata, separators=(',', ':'))+'},')
lines.extend(['\n];', '''
const poses = {
  idle0:'idle0',idle1:'idle0',crouch:'idle0',jump:'jump',fall:'jump',dash:'dash',hurt:'idle0',guard:'idle0',dead:'idle0',
  run0:'run0',run1:'run1',run2:'run0',run3:'run1',run4:'run0',run5:'run1',
  windHigh:'wind',windLow:'wind',thrustWind:'wind',slamWind:'wind',shootWind:'wind',
  slashDown:'attack',slashUp:'attack',thrust:'attack',spin:'attack',slam:'attack',kick:'attack',uppercut:'attack',throw:'attack',
  cast:'attack',castUp:'ultimate',shoot:'attack'
};
export const CHARACTER_ART = Object.freeze(Object.fromEntries(records.map(record => [record.id, {
  ...record, poses, imported:true, outputHeight:128,
  frames:{...record.frames,
    breathe0:{...record.frames.idle0,stretchY:1.012},
    breathe1:{...record.frames.idle0,stretchY:1.024}},
  cycles:{idle:{frames:['idle0','breathe0','breathe1','breathe0'],tick:20},
    run:{frames:['run0','idle0','run1','idle0'],tick:5}}
}])));
'''])
destination.mkdir(parents=True, exist_ok=True)
for name, data in assets.items():
    (destination / name).write_bytes(data)
(root / 'src/config/character-art.js').write_text('\n'.join(lines), encoding='utf-8')
print(f'Registered {len(records)} characters from {len(assets)} original PNGs ({sum(map(len, assets.values())):,} bytes copied unchanged).')
