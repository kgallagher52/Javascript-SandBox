// var A = [-1,-3,4,5];
// var A = [1,3,-4,5];
var A = [-1,3,0,4,5];
// var A = [-3,8,14];

/*___________________for_loop_Product__________________________*/

function Product(A) {
  //For loop way
  var sum = 1;
  for(var i = 0; i < A.length; i++) {
    // A[i] - Gives the value of that position
    // i - Get the index
    if(A[i] === -1 || A[i] === 0 || A[i] === 1) {
      sum = A[i];
      break;
    } else {
      sum = sum * A[i]
    }

  } // Don't need these brackets
  return sum
};
console.log("Return value from Product function: ",Product(A));

/*___________________SUM_REDUCE__________________________*/
//Another way for writing reduce ES5
const sum = A.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0);// Starting value if not provided it takes the first value in the array
console.log("reduce sum ES5:", sum);

// ES6
const cleanSum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Reducer ES6 reduce way: ", cleanSum);

/*___________________MAX_REDUCE__________________________*/
//Find Max ES5
function findMax(acc, val) {
  if(val > acc) {
    acc = val;
  }
  return acc;
}
let biggest = A.reduce(findMax);
console.log("MAX doing ES5 of reduce: ", biggest)

//Find Max ES6
let biggestNew = A.reduce((acc, val) => {val > acc ? acc = val :acc; return acc})
console.log("ES6 of getting biggestNew with reduce: ",biggestNew)

/*___________________EVEN_FILTER__________________________*/
//ES5
function isEven(num) {
  return (num % 2 === 0)
}
A = A.filter(isEven)
console.log("Getting all evens using filter ES5: ",A)

//ES6
A = A.filter(x => x % 2 === 0);
// A = A.filter(x => !(x % 2)); //Even shorter way of writing it because the filter is returning a true or false already!!! 

// A = A.filter(x => x % 2 === 1); //ODDS
console.log("Getting all evens using filter ES6: ", A)

/*
Implement a function named generateRange(min, max, step), 
which takes three arguments and generates a range of integers from min to max, 
with the step. The first integer is the minimum value, 
the second is the maximum of the range and the third is the step. (min < max)
*/

function generateRange(min, max, step){
  var arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr
}

console.log(generateRange(2, 10, 2))