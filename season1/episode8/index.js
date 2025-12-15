// Scenario: Hot Code Optimization
// Example: Calculate sum of array
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Create large array
const largeArray = new Array(1000000).fill(5);

// Call function many times
console.time("Execution Time");
for(let i = 0; i < 1000; i++) {
    sumArray(largeArray);
}
console.timeEnd("Execution Time");