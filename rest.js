
/*
 * Rest Operator
*/

'use strict';

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

sum(1, 2, 3, 4);

function login(method, ...rest) {
  console.log(method);
  console.log(rest);
}

login('facebook', 1, 2, 3);