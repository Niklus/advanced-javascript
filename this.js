/**
 * THIS
 */

'use strict';

console.log(this); // window

this.nick = 'nick';

console.log(this.nick); // nick
console.log(window.nick); // nick

function foo() {
  console.log(this);
}

foo(); // undefined coz of use strict or else would have been window

let obj = {
  foo: function () {
    console.log(this);
  },

  bar: () => {
    console.log(this);
  }
};

obj.foo(); // obj

obj.bar(); // window --coz we used an arrow function