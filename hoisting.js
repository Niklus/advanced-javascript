/**
 * Hoisting
 */

'use strict';

// Only works with var and function declarations

// Variable Hosting
console.log(a) // undefined
var a = 1;

// Function Hoisting
console.log(foo()); // Hello World
function foo() {
  return 'Hello World';
}

// Doesnt work coz bar is undefined
// console.log(bar()) // bar is not a function 
var bar = function () {
  return 'Hello World'
}

// Doesn't work with let or const
// console.log(b); // is not defined
let b = 2;