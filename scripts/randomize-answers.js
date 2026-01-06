#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the questions.ts file
const questionsPath = path.join(__dirname, '../src/data/questions.ts');
let content = fs.readFileSync(questionsPath, 'utf8');

// Seed random for reproducibility (optional - comment out for truly random)
// Math.seedrandom = require('seedrandom');

// Fisher-Yates shuffle that returns the new positions
function shuffleWithMapping(arr) {
  const result = [...arr];
  const originalIndices = arr.map((_, i) => i);

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
    [originalIndices[i], originalIndices[j]] = [originalIndices[j], originalIndices[i]];
  }

  // Return the shuffled array and a mapping of old index -> new index
  const newPositions = {};
  for (let i = 0; i < originalIndices.length; i++) {
    newPositions[originalIndices[i]] = i;
  }

  return { shuffled: result, newPositions };
}

// Find all question blocks in the file
// Pattern: options: [...], followed by correctAnswer: N
const questionPattern = /options:\s*\[\s*([^\]]+)\],\s*correctAnswer:\s*(\d+)/gs;

let matches = [...content.matchAll(questionPattern)];
console.log(`Found ${matches.length} questions to randomize`);

// Track answer distribution for verification
const originalDist = {0: 0, 1: 0, 2: 0, 3: 0};
const newDist = {0: 0, 1: 0, 2: 0, 3: 0};

// Process each match from end to start to preserve indices
matches.reverse().forEach((match, idx) => {
  const fullMatch = match[0];
  const optionsContent = match[1];
  const originalCorrectAnswer = parseInt(match[2]);

  originalDist[originalCorrectAnswer]++;

  // Parse the options - they're quoted strings
  const optionPattern = /"([^"]+)"/g;
  const options = [];
  let optMatch;
  while ((optMatch = optionPattern.exec(optionsContent)) !== null) {
    options.push(optMatch[1]);
  }

  if (options.length !== 4) {
    console.log(`Warning: Question ${matches.length - idx} has ${options.length} options, skipping`);
    return;
  }

  // Shuffle the options
  const { shuffled, newPositions } = shuffleWithMapping(options);
  const newCorrectAnswer = newPositions[originalCorrectAnswer];

  newDist[newCorrectAnswer]++;

  // Build the replacement string
  const newOptionsStr = shuffled.map(opt => `"${opt}"`).join(',\n      ');
  const replacement = `options: [\n      ${newOptionsStr}\n    ],\n    correctAnswer: ${newCorrectAnswer}`;

  // Replace in content
  content = content.slice(0, match.index) + replacement + content.slice(match.index + fullMatch.length);
});

// Write the updated content
fs.writeFileSync(questionsPath, content, 'utf8');

console.log('\nOriginal distribution:');
console.log(`  A (0): ${originalDist[0]}`);
console.log(`  B (1): ${originalDist[1]}`);
console.log(`  C (2): ${originalDist[2]}`);
console.log(`  D (3): ${originalDist[3]}`);

console.log('\nNew distribution:');
console.log(`  A (0): ${newDist[0]}`);
console.log(`  B (1): ${newDist[1]}`);
console.log(`  C (2): ${newDist[2]}`);
console.log(`  D (3): ${newDist[3]}`);

console.log('\nDone! Questions have been randomized.');
