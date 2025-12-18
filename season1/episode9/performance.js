// Performance Implications
// CPU-Bound vs I/O-Bound

// CPU-BOUND (Bad for Node.js)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Start");

setTimeout(() => {
    console.log("Timer (should be 0ms)");
}, 0);

// BLOCKS event loop for seconds!
const result = fibonacci(40); // Takes ~2 seconds!
console.log("Result:", result);

// Output:
// Start
// Result: 102334155  (after 2 seconds!)
// Timer (should be 0ms)  (after 2 seconds!)
// Timer was delayed by CPU work!

//=================================================================================

// I/O-BOUND (Perfect for Node.js)
const fs = require('fs');

console.log("Start");

setTimeout(() => {
    console.log("Timer (0ms)");
}, 0);

// Non-blocking! Event loop continues!
fs.readFile('bigfile.txt', (err, data) => {
    console.log("File read complete");
});

console.log("End");

// Output:
// Start
// End
// Timer (0ms)  (immediately!)
// File read complete  (when ready)
// Event loop not blocked!

//=================================================================================

// Event Loop Monitoring
// Monitor event loop lag
const start = Date.now();
let lastCheck = start;

setInterval(() => {
    const now = Date.now();
    const lag = now - lastCheck - 100; // Expected 100ms

    if (lag > 10) { // More than 10ms lag
        console.warn(`Event loop lag: ${lag}ms`);
    }

    lastCheck = now;
}, 100);

// Simulate heavy work
function heavyWork() {
    const end = Date.now() + 500; // Block for 500ms
    while (Date.now() < end) {
        // CPU intensive work
    }
}

setTimeout(heavyWork, 1000);

// Output:
// Event loop lag: 400ms  (500ms work - 100ms interval)
// This indicates event loop is blocked!