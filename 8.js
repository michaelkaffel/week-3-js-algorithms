// 8 - Equality Check. Create a function that returns true or false that matches the examples below


// Your code here

function checkEquality(param1, param2) {
  return param1 === param2 ? console.log(true) : console.log(false);
}

checkEquality(1, true) // ➞ false. A number and a boolean: the value and type are different
checkEquality(0, "0") // ➞ false. A number and a string: the type is different
checkEquality(1, 1) // ➞ true. A number and a number: the type and value are equal