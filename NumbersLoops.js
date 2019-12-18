// var A = [-1,-3,4,5];
var A = [1,3,-4,5];
// var A = [-1,3,0,4,5];
// var A = [-3,8,14];


function Test(A) {
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
console.log("Return value from Test function: ",Test(A));

//Another way for writing reduce
const sum = A.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0);// Starting value
console.log("reduce sum:", sum);

// Cleaner way of writing it
const cleanSum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Reducer Cleaner reduce way: ", cleanSum);