/*
 * Spread Operator
*/

'use strict';

const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];

console.log(arr2);

const arr2copy = [...arr2];

console.log(arr2copy);



