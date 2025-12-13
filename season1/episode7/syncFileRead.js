// Synchronous File Reading (The Dangerous Way)

const fs = require('fs');

console.log('Start');

// SYNCHRONOUS file read - BLOCKS everything!
const data = fs.readFileSync('./file.txt', 'utf8');
console.log('File content:', data);

console.log('End');

// OUTPUT:::
// Start
// File content: Hello from `file.text` episode7
// End