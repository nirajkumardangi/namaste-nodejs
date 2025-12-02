// Variables inside module are private (not accessible outside)
const PI = 3.14159;
const E = 2.71828;

// Functions to export
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Private function (not exported)
function secretFunction() {
  return 'This is private!';
}

// Export multiple functions and variables
module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  PI: PI,
  E: E,
};


// module.exports = { add, subtract, multiply, divide, PI, E };
