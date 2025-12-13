// Crypto Module Example (Blocking vs Non-blocking)
const crypto = require('crypto');

// 1. Synchronous Version (Blocking)
console.log('Start');

// SYNCHRONOUS - BLOCKS! 🚫
const key1 = crypto.pbkdf2Sync('password', 'salt', 700000, 30, 'sha512');
console.log('Key 1 generated:', key1.toString('hex').substring(0, 20));

const key2 = crypto.pbkdf2Sync('password2', 'salt', 5000, 40, 'sha512');
console.log('Key 2 generated:', key2.toString('hex').substring(0, 20));

console.log('End');

// OUTPUT:::
// Start
// Key 1 generated: 814237cfd56ec6f94878
// Key 2 generated: f814fa509417982706ec
// End



// 2. Asynchronous Version (Non-blocking)
console.log('Start');

// ASYNCHRONOUS - NON-BLOCKING! ✅
crypto.pbkdf2('password', 'salt', 50000, 50, 'sha512', (err, key1) => {
  console.log('Key 1 generated:', key1.toString('hex').substring(0, 20));
});

crypto.pbkdf2('password2', 'salt', 20000, 50, 'sha512', (err, key2) => {
  console.log('Key 2 generated:', key2.toString('hex').substring(0, 20));
});

console.log('End');

// OUTPUT:::
// Start
// End
// Key 2 generated: be447d665d13699ed41e
// Key 1 generated: 337dbf33fe200d5c6d34

