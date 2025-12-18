// Example 1: Basic Priority
console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("End");

// OUTPUT:::
// Start;
// End;
// nextTick;
// Promise;
// setTimeout;