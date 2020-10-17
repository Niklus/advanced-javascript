'use strict';

/**
 * GLOBAL SCOPE
 */
const name = 'Nick';


function foo() {
  /**
   * FUNCTION SCOPE
   */
  const bar = 1;
  console.log(name)
  console.log(bar);
}

foo();
// console.log(bar) // bar is not defined


/**
 * BLOCK SCOPE
 */

{
  const a = 123;
  console.log(a);
}
// console.log(a) // a is not defined

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i) // i is not defined