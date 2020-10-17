
/*
 * Passing by Refrence vs passing by value
 * Primitives types are passed by value
 * Objects are passed by refrence
 * 
*/

'use strict';

// By Value--------------------------------

let a = 1;

function foo(x) {
  x = 2;
}

foo(a); // Passing a copy of a

console.log(a); // still 1 coz its passed by value

// By Refrence -----------------------------

a = {};

function bar(x) {
  x.moo = true
}

bar(a);

console.log(a); // { moo:true } coz passed by refrence