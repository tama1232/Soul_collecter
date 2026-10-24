import {bossTrialRewards} from '../config/economy.js';
export function createRunSettlement({now=Date.now,bossMaterialDrop,BOSSES,endlessRewards,towerRewards,readModeBest,claimTowerRewards,recordEnemyKills,STORIES,CURSE_LEVELS,markAchievement,recordScores,checkAchievements,runRewardRules}){
return function settleRun(save, run, at = now()) {
  if (run._settledSummary) return run._settledSummary;
  const receipt = run.rewardReceipt ?? (run.rewardReceipt = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + "-" + Math.random());
  if (save.appliedSettlements?.includes(receipt)) throw new Error("이미 정산된 시련입니다");
  const stats = run.stats, bossCount = stats.bosses.length, mats = [0, 0, 0, 0];
  let firstBonus = 0;
  for (const id of stats.bosses) {
    const drop = run.bossRush || run.tower || run.endless ? null : bossMaterialDrop(id);
    if (drop) mats[drop.book - 1] += drop.n;
    save.stats.bossKills[id] = (save.stats.bossKills[id] ?? 0) + 1;
    if (!save.firstClear[id]) {
      save.firstClear[id] = true;
      if (!run.bossRush) firstBonus += BOSSES.find(b => b.id === id)?.soulStones ?? 0;
    }
  }
  const trial = run.bossRush ? bossTrialRewards({
    book: run.book,
    bosses: bossCount,
    cycleLength: run.rushList.length,
    victory: run.victory,
    curse: run.curse,
    stoneBonus: run.upStone,
    crystalBonus: run.upCrystal
  }) : null;
  const modeRewards = run.endless ? endlessRewards(run.floor, bossCount) : run.tower ? towerRewards(run.towerCleared, bossCount) : null;
  const stones = trial?.stones ?? Math.round(stats.stones), crystals = trial?.crystals ?? Math.round(stats.crystals);
  const runStones = trial ? 0 : modeRewards ? modeRewards.stones : Math.round((runRewardRules.base + runRewardRules.perChapter * bossCount) * run.modeMul.stones);
  const bestMap = run.endless ? save.endlessBest ??= {} : run.bossRush ? save.rushBest ??= {} : null;
  const score = run.endless ? run.floor : run.tower ? run.towerCleared : bossCount, oldBest = bestMap ? readModeBest(bestMap, run.book) : run.tower ? save.tower?.best ?? 0 : 0;
  if (bestMap && score > oldBest) bestMap[run.book] = score;
  const towerClaims = run.tower ? claimTowerRewards(save, run.towerCleared) : [];
  if (run.bossRush) {
    save.bossRushBest = Math.max(save.bossRushBest ?? 0, bossCount);
    trial.mats.forEach((amount, index) => mats[index] += amount);
  }
  save.stones += stones + firstBonus + runStones;
  save.crystals += crystals + (modeRewards?.crystals ?? 0);
  save.awShards += trial?.awShards ?? 0;
  save.stats.runs++;
  save.stats.kills += stats.kills;
  recordEnemyKills(save, stats.enemyKills);
  save.stats.swapHits += stats.swapHits;
  save.stats.maxCombo = Math.max(save.stats.maxCombo, stats.maxCombo);
  save.stats.bestChapter = Math.max(save.stats.bestChapter, run.chapter);
  save.stats.playTime += stats.frames / 60;
  if (!run.victory) save.stats.deaths++;
  save.tutorialDone = true;
  let curseUnlocked = false, storyFirstClear = false, storyUnlocked = 0;
  if (run.victory && !run.bossRush && !run.endless && !run.tower) {
    storyFirstClear = !save.storyClear[run.story];
    save.storyClear[run.story] = true;
    if (run.story >= save.storyMax && save.storyMax < STORIES.length) {
      save.storyMax = run.story + 1;
      storyUnlocked = save.storyMax;
    }
    save.stats.clears++;
    if (save.curseMax < CURSE_LEVELS.length - 1 && run.curse >= save.curseMax) {
      save.curseMax = Math.min(CURSE_LEVELS.length - 1, run.curse + 1);
      curseUnlocked = true;
    }
    if (run.curse >= 1) markAchievement(save, "curse1");
  }
  recordScores(save, {
    victory: run.victory,
    bossRush: run.bossRush,
    endless: run.endless,
    tower: run.tower,
    towerFloor: run.towerCleared,
    book: run.book,
    story: run.story,
    curse: run.curse,
    floor: run.floor,
    bosses: bossCount,
    frames: stats.frames
  }, at);
  if (stats.hidden > 0) markAchievement(save, "hidden");
  save.runsSinceRotation++;
  mats.forEach((amount, index) => save.mats[index] = (save.mats[index] ?? 0) + amount);
  save.appliedSettlements = [...save.appliedSettlements ?? [], receipt].slice(-64);
  return run._settledSummary = {
    mats,
    towerClaims,
    modeBest: Math.max(oldBest, score),
    newBest: (!!bestMap || run.tower) && score > oldBest,
    endlessCrystals: modeRewards?.crystals ?? 0,
    stones,
    crystals,
    awShards: trial?.awShards ?? 0,
    bonusStones: firstBonus,
    runStones,
    chaptersCleared: bossCount,
    chapter: run.chapter,
    victory: run.victory,
    newAch: checkAchievements(save),
    curseUnlocked,
    rotated: false,
    storyFirstClear,
    storyUnlocked
  };
}
}
