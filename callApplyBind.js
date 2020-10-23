'use strict';

/* CALL */
// Functions are objects and have properties
function foo(x, y) {
  console.log(this)
  if (x && y) {
    console.log(x + y);
  }
}

console.log(foo.name) // function name
console.log(foo.length) // number of arguments

// They have methods too (functions)
console.log(foo.toString());

foo.call(); // calls function like foo()

foo.call({}, 4, 2); // pass in what you wanr this to be folled by params

/* APPLY */

foo.apply(null, [1, 2]); // simillar to call but we use array for params


/* BIND */
const a = function () {
  console.log(this);
}.bind({ name: 'nick' }) // only works on function expressions

a();











