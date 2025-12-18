// Example 4: setImmediate vs setTimeout
const fs = require('fs');

// Outside I/O cycle
setTimeout(() => {
    console.log("setTimeout outside");
}, 0);

setImmediate(() => {
    console.log("setImmediate outside");
});

// Inside I/O cycle
fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log("setTimeout inside");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate inside");
    });
});

// OUTPUT:::
// setTimeout outside
// setImmediate outside
// setImmediate inside
// setTimeout inside