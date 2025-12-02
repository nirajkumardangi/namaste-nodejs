// Import the math module
const math = require('./math');
const { greet } = require('./data');
// const userData = require('./user_data');
const {email, password, age} = require('./user_data');

console.log(email);
console.log(password);
console.log(age);

//=== Use exported functions
// console.log('Addition: ', math.add(10, 5)); // 15
// console.log('Subtraction: ', math.subtract(10, 5)); // 5
// console.log('Multiplication: ', math.multiply(10, 5)); // 50
// console.log('Division:', math.divide(10, 5)); // 2

//=== Access exported constants
// console.log('PI =', math.PI); // 3.14159
// console.log('E =', math.E); // 2.71828

//=== Try to access private function
// console.log('\nPrivate function:', math.secretFunction); // undefined
// secretFunction is NOT exported, so it's not accessible!

console.log(greet('Niraj'));
