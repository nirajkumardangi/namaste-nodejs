// Question 1
console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("4");
    setTimeout(() => {
        console.log("5");
    }, 0);
});

console.log("6");

// OUTPUT:::
// 1
// 6
// 4
// 2
// 3
// 5