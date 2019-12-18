/* When you use a credit card it only shows the last four digits the others show # make this string output only the last for characters and the rest show # */

var chars = "4556364607935616";

//Get the last four characters of the string
console.log("Last four characters ", chars.substr(chars.length -4));

// it basically replaces all characters where there's more than 4 characters afterwards. So when it get to 4 characters before the end of the string, the regex will fail and won't replace those characters. 
var newString = chars.replace(/.(?=.{4,}$)/g, '#');
console.log(newString)


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