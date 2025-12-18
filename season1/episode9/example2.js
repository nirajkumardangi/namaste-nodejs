// Example 2: Nested nextTick
console.log("Start");

process.nextTick(() => {
    console.log("nextTick 1");

    process.nextTick(() => {
        console.log("nextTick 2 (inner)");
    });
});

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// OUTPUT:::
// Start
// End
// nextTick 1
// nextTick 2 (inner)
// Promise
