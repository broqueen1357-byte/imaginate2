// src/utils/conceptResolver.js

import { fakeConcepts } from "../data/fakeConcepts";

/**
 * Normalize text for safe matching
 */
const normalize = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Resolve user prompt to a concept
 */
export function resolveConcept(userPrompt) {
  if (!userPrompt || typeof userPrompt !== "string") {
    return {
      type: "NO_MATCH",
      suggestions: getSuggestions(),
    };
  }

  const prompt = normalize(userPrompt);

  // 🔍 STRONG MATCH: keyword must exist as a full word
  const matchedConcept = fakeConcepts.find((concept) => {
    const keyword = normalize(concept.keyword);
    const regex = new RegExp(`\\b${keyword}\\b`, "i");
    return regex.test(prompt);
  });

  // ✅ MATCH FOUND
  if (matchedConcept) {
    return {
      type: "MATCH",
      concept: matchedConcept,
    };
  }

  // ❌ NO MATCH → intentional fallback
  return {
    type: "NO_MATCH",
    suggestions: getSuggestions(),
  };
}

/**
 * Pick 3 SAFE, DIVERSE suggestions (not random chaos)
 */
function getSuggestions() {
  const shuffled = [...fakeConcepts].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 3);
}