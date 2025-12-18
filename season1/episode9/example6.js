// Question 2
setImmediate(() => {
    console.log("immediate");
});

process.nextTick(() => {
    console.log("nextTick");
    process.nextTick(() => {
        console.log("inner nextTick");
    });
});

Promise.resolve().then(() => {
    console.log("promise1");
}).then(() => {
    console.log("promise2");
});

console.log("sync");

// OUTPUT:::
// Sync
// nextTick
// inner nextTick
// promise1
// promise2
// immediate