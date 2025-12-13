// Trust Issues with setTimeout(0)
console.log("Start");

setTimeout(() => {
    console.log("I promise 0ms!");
}, 0);

// Heavy computation (blocks for 5 seconds)
let sum = 0;
for(let i = 0; i < 5000000000; i++) {
    sum += i;
}
console.log("Heavy computation done");

console.log("End");

// OUTPUT:::
// Start
// Heavy computation done  <- 5 seconds later!
// End
// I promise 0ms!  <- Actually executes after 5+ seconds!