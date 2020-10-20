/**
 * FOR LOOPS
 */

let arr = [1, 2, 3, 4, 5]

let obj = {
  name: 'Nick',
  age: 30,
  gender: 'Male'
};

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('-------------------');

//for of
for (const el of arr) {
  console.log(el);
}

console.log('-------------------');

// for Each
arr.forEach(el => console.log(el));

console.log('-------------------');

// for in --works with objects too
for (const index in arr) {
  console.log(arr[index]);
}

// continue and break 
// only on for loop and for of loop