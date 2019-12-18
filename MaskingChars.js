/* When you use a credit card it only shows the last four digits the others show # make this string output only the last for characters and the rest show # */

var chars = "4556364607935616";

//Get the last four characters of the string
console.log("Last four characters ", chars.substr(chars.length -4));

// it basically replaces all characters where there's more than 4 characters afterwards. So when it get to 4 characters before the end of the string, the regex will fail and won't replace those characters. 
var newString = chars.replace(/.(?=.{4,}$)/g, '#');
console.log(newString);