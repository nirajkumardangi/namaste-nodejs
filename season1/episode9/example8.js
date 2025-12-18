// Promise vs process.nextTick

Promise.resolve().then(() => {
  console.log('Promise 1');

  Promise.resolve().then(() => {
    console.log('Promise 2 (nested)');
  });

  process.nextTick(() => {
    console.log('nextTick in Promise');
  });
});

process.nextTick(() => {
  console.log('nextTick 1');

  process.nextTick(() => {
    console.log('nextTick 2 (nested)');
  });

  Promise.resolve().then(() => {
    console.log('Promise in nextTick');
  });
});

console.log('Sync');

// OUTPUT:::
// Sync
// nextTick 1
// nextTick 2 (nested)
// Promise 1
// Promise in nextTick
// Promise 2 (nested)
// nextTick in Promise