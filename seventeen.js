let str = "priya Lakshmibhavan Padmanabhan"
// console.log(str, "Original String");
//convert to Array
let convertToArray = str.split('')
// console.log(convertToArray, "checking whether converted to array");
//reverse
let reverseString = convertToArray.reverse()
// console.log(reverseString, "checking whether reversed or not");
//back to string but reversed
let backToString = reverseString.join('')
// console.log(backToString, "checking back reversed string");
//again back
let splitString = backToString.split('')
let reverse = splitString.reverse()
let final = reverse.join('')
// console.log(final, "final output back to string");


//make the first word to capital

let myName = "priya lakshmi"

let splitName = myName.split('')
let convert = splitName[0].toUpperCase()
console.log(convert);



