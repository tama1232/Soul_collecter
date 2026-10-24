import test from 'node:test';
import assert from 'node:assert/strict';
import { heroLevelCost, weaponEnhanceCost, skillMasteryCost, awakeningCost, bossTrialRewards, permanentUpgrade, upgradeCost, rollRarity, selectBossTrialRoute, isBossTrialUnlocked } from '../src/config/economy.js';
import * as data from '../src/game-data.js';
import { createRunSettlement } from '../src/systems/progression.js';

test('growth prices are monotonic, bounded, and shared with the real game', () => {
  for (const [fn, count] of [[weaponEnhanceCost, 50], [skillMasteryCost, 50], [heroLevelCost, 49]]) {
    const costs = Array.from({ length: count }, (_, i) => fn(i + 1));
    assert.ok(costs.every((price, i) => Number.isInteger(price) && price > 0 && (!i || price >= costs[i - 1])));
    assert.ok(costs.reduce((a, b) => a + b, 0) < 800000);
  }
  for (const rarity of [3, 4, 5, 6, 7]) {
    assert.equal(data.data_Me[rarity], data.getAwakeningCost(rarity, 0));
    for (let level = 0; level < 5; level++) assert.equal(data.getAwakeningCost(rarity, level), awakeningCost(rarity, level));
  }
  assert.equal(data.getWeaponEnhanceCost(7, 49), weaponEnhanceCost(50));
  assert.equal(data.getSkillMasteryCost(7, 49), skillMasteryCost(50));
  const upgrade = permanentUpgrade({ id: 'atk', max: 5, per: 5, cost: [1] });
  assert.equal(upgrade.max, Infinity); assert.ok(upgradeCost(upgrade,100)>upgradeCost(upgrade,99));
});

test('boss trials pay every growth resource, retain partial rewards, and never pay a zero-kill farm', () => {
  assert.deepEqual(bossTrialRewards({ bosses: 0, victory: false }), { stones: 0, crystals: 0, awShards: 0, mats: [0, 0, 0, 0] });
  const partial = bossTrialRewards({ book: 1, bosses: 3 }); const full = bossTrialRewards({ book: 1, bosses: 6, victory: true });
  assert.equal(partial.crystals, 990); assert.equal(partial.awShards, 24); assert.equal(partial.mats[0], 1);
  assert.equal(bossTrialRewards({ book: 1, bosses: 3, victory: true }).crystals, partial.crystals);
  assert.deepEqual(full, { stones: 450, crystals: 2250, awShards: 48, mats: [4, 0, 0, 0] });
  assert.ok(bossTrialRewards({ book: 4, bosses: 6, victory: true }).crystals > full.crystals);
});

test('pity counters guarantee each tier and survive real save normalization', () => {
  const pity = { total: 0, since5: 0, since4: 0 }; let lastSix = 0, lastSeven = 0;
  for (let pull = 1; pull <= 720; pull++) {
    const rarity = rollRarity(pity, () => 0.99);
    assert.ok(pity.since5 < 60); assert.ok(pity.since6 < 120); assert.ok(pity.since7 < 360);
    if (rarity >= 6) lastSix = pull;
    if (rarity === 7) lastSeven = pull;
  }
  assert.equal(lastSix, 720); assert.equal(lastSeven, 720);
  const save = data.createSave(); save.pity.char = pity;
  assert.equal(data.normalizeSave(save).pity.char.since7, 0);
  assert.equal(rollRarity({}, () => 0.99, true), 4);
});

test('all 28 story routes remain playable, and each book has a fixed spoiler-free boss cycle', () => {
  assert.equal(Object.keys(data.CHARACTERS).length, 56); assert.equal(Object.keys(data.WEAPONS).length, 96); assert.equal(data.STORIES.length, 28);
  for (const story of data.STORIES) { const save = data.createSave(); save.storyMax = 28; save.story = story.id; const run = new data.RunState(save, 123); assert.ok(run.nodes.length); assert.equal(run.story, story.id); assert.ok(story.intro.length && story.ending.length); }
  for (const book of data.BOOKS) {
    const save = data.createSave(); assert.equal(isBossTrialUnlocked(save, book.id, data.BOOKS), false);
    save.storyClear[book.stories[0]] = true; assert.equal(isBossTrialUnlocked(save, book.id, data.BOOKS), true);
    const run = new data.RunState(save, 123); run.startBossRush(save, book.id);
    assert.ok(run.rushList.length > 0);
    assert.ok(run.rushList.every(entry => save.storyClear[entry.story]));
    assert.deepEqual(run.rushList,selectBossTrialRoute(data.getBossRoute(book.id),save));
  }
});

test('run statistics and receipts are independent across repeated runs', () => {
  const save = data.createSave(); const a = new data.RunState(save, 1), b = new data.RunState(save, 2);
  a.stats.kills = 99; a.stats.bosses.push('test'); assert.equal(b.stats.kills, 0); assert.equal(b.stats.bosses.length, 0); assert.notEqual(a.rewardReceipt, b.rewardReceipt);
});

test('awakening display cost matches exactly charged currency and respects caps', () => {
  const save = data.createSave(); const id = Object.keys(data.CHARACTERS).find(id => data.CHARACTERS[id].rarity === 7);
  save.chars[id] = { lv: 1, aw: 3, count: 1 }; const cost = data.getAwakeningCost(7, 3);
  save.awShards = cost - 1; assert.equal(data.awakenHero(save, id), false); assert.equal(save.awShards, cost - 1);
  save.awShards = cost; assert.equal(data.awakenHero(save, id), true); assert.equal(save.awShards, 0); assert.equal(save.chars[id].aw, 4);
  save.chars[id].aw = 5; assert.equal(data.awakenHero(save, id), false);
});

const settle = createRunSettlement({ now: () => 1000, bossMaterialDrop: () => null, BOSSES: data.BOSSES, endlessRewards: data.data_o0, towerRewards: data.data_c0, readModeBest: data.data_r0, claimTowerRewards: data.data_i0, recordEnemyKills: data.data_U0, STORIES: data.STORIES, CURSE_LEVELS: data.CURSE_LEVELS, markAchievement: () => false, recordScores: data.data_g0, checkAchievements: () => [], runRewardRules: { base: 150, perChapter: 640 } });

test('actual trial settlement is idempotent and pays only the displayed receipt', () => {
  const save = data.createSave(); save.storyClear[1] = true;
  const run = new data.RunState(save, 123); run.startBossRush(save); run.stats.bosses = data.BOSSES.slice(0, 6).map(boss => boss.id); run.victory = true;
  const before = { stones: save.stones, crystals: save.crystals, shards: save.awShards };
  const receipt = settle(save, run);
  assert.equal(save.stones - before.stones, receipt.stones + receipt.bonusStones + receipt.runStones);
  assert.equal(save.crystals - before.crystals, receipt.crystals);
  assert.equal(save.awShards - before.shards, receipt.awShards); assert.equal(receipt.mats[0], 3);
  const wallet = JSON.stringify([save.stones, save.crystals, save.awShards, save.mats]);
  assert.strictEqual(settle(save, run), receipt); assert.equal(JSON.stringify([save.stones, save.crystals, save.awShards, save.mats]), wallet);
  const copiedRun = { ...run }; delete copiedRun._settledSummary; assert.throws(() => settle(save, copiedRun), /정산/);
});
