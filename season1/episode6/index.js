const fs = require('fs');

console.log('Start');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('File read error:', err.message);
    return;
  }
  console.log('File data:', data);
});

setTimeout(() => {
  console.log('Timer expired');
}, 1000);

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => res.json())
  .then((data) => console.log('API data:', data))
  .catch((err) => console.error('API error:', err.message));

console.log('End');

/**
 * OUTPUT:::
 *
 * Start         (sync)
 * End           (sync)
 * File data     (I/O finished first)
 * API data      (Promise resolved later)
 * Timer expired (timer delay)
 *
 */
