import {DEFAULT_PROBABILITIES,validateProbabilities,canonical} from './probability-rules.js';
let rules=validateProbabilities(DEFAULT_PROBABILITIES),revision=0;
export const getProbabilities=()=>structuredClone(rules);
export const getRulesRevision=()=>revision;
export function applyProbabilities(value,nextRevision=0) {rules=validateProbabilities(value);revision=nextRevision;}
export function currentRulesText() {return canonical(rules);}
