/*
Write a program to calculate factorial of a number using reduce and using for loops

*/

let a = 5;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });

  console.log(c);
}

function facFor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac
}

factorial(a);
console.log(facFor(8))