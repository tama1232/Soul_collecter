export const GAME_TITLE = '사자의 서: 별의 기록';
export const BOOK_ARCS = [
  { name: '잿빛의 서', goal: '사라진 이름을 찾아 계약의 첫 장을 완성한다.', discovery: '영혼이 아닌 이름이 지워지고 있었다.', resolution: '첫 기록을 되찾자, 바다 너머에서 같은 별빛이 응답했다.' },
  { name: '조수의 서', goal: '기억을 실은 바다를 건너 별의 항로를 복원한다.', discovery: '기억을 삼키는 파도는 누군가의 명령을 따랐다.', resolution: '잠긴 항로를 열자, 지워진 기록의 흔적이 성으로 이어졌다.' },
  { name: '잉크의 서', goal: '닫힌 성의 기록을 읽고 망각의 근원을 추적한다.', discovery: '왕은 이름을 지워 백성을 지키려 했지만, 그 대가는 기억이었다.', resolution: '봉인을 푼 기록서는 마지막 백지에 자신의 선택을 남기라 했다.' },
  { name: '새벽의 서', goal: '백지의 경계를 넘어 되찾은 이름들의 운명을 결정한다.', discovery: '기록서를 완성할 힘은 지배가 아닌 기억을 나누는 계약이었다.', resolution: '별의 기록은 끝나지 않는다. 되찾은 이름마다 새로운 아침이 열린다.' },
];
export function applyStoryContent(books, stories) {
  const steps = ['첫 흔적', '끊어진 약속', '남겨진 증언', '봉인의 이면', '진실의 대가', '마지막 선택', '다시 쓰는 이름'];
  for (let index = 0; index < books.length; index++) {
    const book = books[index], arc = BOOK_ARCS[index]; if (!arc) continue;
    book.name = arc.name;
    book.title = arc.goal;
    for (let chapter = 0; chapter < book.stories.length; chapter++) {
      const story = stories.find(entry => entry.id === book.stories[chapter]); if (!story) continue;
      story.name = steps[chapter] ?? `이어지는 기록 ${chapter + 1}`;
      story.sub = `${arc.name} · ${chapter + 1}장`;
      // Replace the previous several-hundred-fold jumps with a continuous campaign curve.
      story.power = { hp: +(1.105 ** (story.id - 1)).toFixed(3), atk: +(1.065 ** (story.id - 1)).toFixed(3) };
      // Routes and boss identifiers remain stable; all 28 text arcs share one premise.
      story.intro = [
        `${arc.name}, ${chapter + 1}장 「${story.name}」.`,
        chapter === 0 ? arc.goal : arc.discovery,
        ['계약자는 꺼진 별빛을 따라 첫 번째 이름을 찾는다.', '끊어진 약속의 흔적에서 서로 다른 두 기억이 만난다.', '남겨진 증언은 적이 된 수호자에게도 지킬 이름이 있음을 말한다.', '봉인을 지키던 자는 진실을 감춘 이유를 묻는다.', '기억을 되찾을수록 잊혀진 선택의 대가도 드러난다.', '계약자는 누구의 이름도 지우지 않는 길을 선택한다.', '마지막 수호자를 넘어, 기록서를 다시 펼칠 시간이 왔다.'][chapter] ?? arc.goal,
        '되찾은 이름을 기록서에 남기고 다음 봉인으로 나아가라.',
      ];
      story.ending = chapter === book.stories.length - 1
        ? [arc.resolution, '계약자는 소유한 힘보다 함께 기억할 이름을 택했다.', index === books.length - 1 ? '새벽이 밝았다. 이제 다음 기록은 그대의 몫이다.' : '멀리서 새로운 기록서의 책장이 열렸다.']
        : ['봉인이 풀리고 잊혔던 이름 하나가 빛으로 돌아왔다.', arc.discovery, '되찾은 이름이 다음 장의 길을 비춘다.'];
      story.cards = story.route.map((_, stage) => stage === story.route.length - 1 ? '마지막 봉인 — 이름을 되찾아라' : `${story.name} · ${stage + 1}번째 봉인`);
    }
  }
}
function rewriteDialog(dialog, text) {
  if (!dialog) return;
  if (Array.isArray(dialog)) {
    const target = dialog.find(entry => entry && typeof entry === 'object' && ('text' in entry || 'say' in entry || 'line' in entry));
    if (target) { const key = 'text' in target ? 'text' : 'say' in target ? 'say' : 'line'; target[key] = text; }
    else if (dialog.length && typeof dialog[0] === 'string') dialog[0] = text;
  } else if (typeof dialog === 'object' && typeof dialog.text === 'string') dialog.text = text;
}
