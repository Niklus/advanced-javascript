/**
 * Closures
 */

'use strict';

// Example 1
function add(x) {
  return function(y) {
     return x + y;
  }
}

const addTwo = add(2);
console.log(addTwo(3)); // 5

const addTen = add(10);
console.log(addTen(3)) // 13

// Example 2
function sayHello(name) {
  const greeting = 'Hello ' + name;
  return function() {
     return greeting;
  }
}

const greetNick = sayHello('Nick');
console.log(greetNick());

const greetBrian = sayHello('Brian');
console.log(greetBrian())

// Example 3
const foo = [];
for(var i = 0; i < 3; i++) {
    foo[i] = function() { return i }
}

console.log(foo[0]()); // 3
console.log(foo[1]()); // 3
console.log(foo[2]()); // 3

// The above behaviour is not observed
// when using let i = 0











