// Question 3
const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("readFile");
});

process.nextTick(() => {
    console.log("nextTick");
});

Promise.resolve().then(() => {
    console.log("promise");
});

setTimeout(() => {
    console.log("timeout");
}, 0);

setImmediate(() => {
    console.log("immediate");
});

console.log("sync");

// OUTPUT:::
// sync
// nextTick
// promise
// timeout
// immediate
// readFile