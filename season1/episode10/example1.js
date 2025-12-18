// Example: File Operations
const fs = require('fs');

console.log('Start');

// 5 file read operations
fs.readFile('file1.txt', () => {
  console.log('File 1 read complete');
});

fs.readFile('file2.txt', () => {
  console.log('File 2 read complete');
});

fs.readFile('file3.txt', () => {
  console.log('File 3 read complete');
});

fs.readFile('file4.txt', () => {
  console.log('File 4 read complete');
});

fs.readFile('file5.txt', () => {
  console.log('File 5 read complete');
});

console.log('End');
