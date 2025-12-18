// Example 3: Complex Scenario
const fs = require('fs');

console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

setImmediate(() => {
    console.log("setImmediate 1");
});

fs.readFile(__filename, () => {
    console.log("File read callback");

    setTimeout(() => {
        console.log("setTimeout 2 (inside file read)");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate 2 (inside file read)");
    });

    process.nextTick(() => {
        console.log("nextTick (inside file read)");
    });
});

process.nextTick(() => {
    console.log("nextTick 1");
});

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End");

// OUTPUT:::
// Start
// End
// nextTick 1
// Promise 1
// setTimeout 1
// setImmediate 1
// File read callback
// nextTick (inside file read)
// setImmediate 2 (inside file read)
// setTimeout 2 (inside file read)