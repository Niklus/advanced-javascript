/**
 * Destructuring
 */

// Objects

const obj = {
  first: "Nicholas",
  last: "Otieno",
  age: 30
}

const { first: f, last, age } = obj;

console.log(f);
console.log(last);
console.log(age);

// Arrays

const arr = ['Nick', 30];

const [name, myAge] = arr;

console.log(name);
console.log(myAge);

// Funtion params

function foo1({ first }, [name, age]) {
  console.log(first, age);
}

foo1(obj, arr);













