// Pattern 1: Controlled Async Execution

// BAD: Might cause stack overflow
// function processArray(arr, callback) {
//     arr.forEach(item => {
//         callback(item);
//     });
// }

// GOOD: Breaks execution into event loop iterations
function processArrayAsync(arr, callback) {
  let index = 0;

  function processNext() {
    if (index >= arr.length) return;

    callback(arr[index]);
    index++;

    setImmediate(processNext); // Break into iterations
  }

  processNext();
}

// Usage
const bigArray = new Array(10000).fill("item");

processArrayAsync(bigArray, (item) => {
  // Process each item
  console.log(item);
});
