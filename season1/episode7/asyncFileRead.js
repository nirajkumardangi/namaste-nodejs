// Asynchronous File Reading (The Right Way)
const fs = require('fs');

console.log('Start');

// ASYNCHRONOUS file read - NON-BLOCKING! ✅
fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log('File content:', data);
});

console.log('End');

// OUTPUT:::
// Start
// End
// File content: Hello from `file.text` episode7