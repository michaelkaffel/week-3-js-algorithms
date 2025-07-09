console.log("These are if statement examples");
// This is an if statement
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}
console.log(test(true));
console.log(test(false));

console.log("\n"); // This is a line break for better readability
console.log("These are if statement examples with different conditions");
if ('True') {
    console.log('This is true test 1');
}

if ('False') {
    console.log('This is true test 2'); // This will still print because 'False' is a non-empty string
}
if (null) {
    console.log('This is true test 3'); // This will not print because 0 is falsy
}
console.log("\n"); // This is a line break for better readability
// This is an if...else statement example

// if('Michael'.length > 8) {
//     console.log('It is more than 8');
// } else if ('Michael'.length === 7) {
//     console.log("Equals to 7");    
// } else {
//     console.log("Less than 8");
// }


// This is a ternary operator example
console.log("This is a ternary operator example");
'Michaels'.length > 7 ? console.log('It is more than 7') : console.log("Less than 7");

console.log("\n");

console.log("These are switch statement examples");
console.log("first example");
// This is a switch statement example for checking for the day of the week
switch (new Date().getDay()) {
    case 0:
        console.log("It's Sunday");
        break;
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    default:
        console.log("Something else");
        break;
}

console.log("\n");
console.log("second example");
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}

console.log(caseInSwitch(4));

console.log("\n");

console.log("These are function examples")
console.log("Example 1")
// Functions example 1

// Declaration
function multiplyTwoDigits(firstDigit, secondDigit) {
    return firstDigit * secondDigit;
}
// Calling the function
const result = multiplyTwoDigits(5, 6);
console.log(result + 5); // Output: 35

console.log("\n");
console.log("Example 2");

// Functions example 2
// Declaration
console.log("This is a function example using a comparison operator");
function isUserUnderAge(age, limit) {
    return age < limit;
}

// Calling the function
const ageCheck = isUserUnderAge(18, 18)
console.log(ageCheck);

console.log("\n");

// Functions example 3
// Declaration
console.log("This is a function example using an if...else statement");
function isUserAGoodDriver(hadDUI, userName) {
    if (hadDUI) {
        return `${userName} is not a good driver`;
    } else {
        return `${userName} is a good driver`;
    }
}
// Calling the function
//Result 1
const driverCheck1 = isUserAGoodDriver(true, "Michael ");
//Result 2
const driverCheck2 = isUserAGoodDriver(false, "Owl");

console.log(driverCheck1);
console.log(driverCheck2);

console.log("\n");

// This is an example of a function using an else if statement
console.log("This is a function example using an else if statement");
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(11));
console.log(testElseIf(3));
console.log(testElseIf(7))

console.log("\n");;

// These are logical operators examples
// Logical operators are used to combine two or more conditions
// && (AND) - returns true if both conditions are true
// || (OR) - returns true if at least one condition is true
// ! (NOT) - reverses the logical state of its operand

console.log("These are logical operators examples");
// Example of logical AND operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));
console.log(testLogicalAnd(30))

console.log("\n");

// Example of logical OR operator
console.log("This is a logical OR operator example");
// The logical OR operator (||) returns true if at least one of the conditions is true
function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
    // Only change code above this line
}

console.log(testLogicalOr(15));
console.log(testLogicalOr(1));

console.log("\n");

// Example of chaining if/else if statements
console.log("This is an example of chaining if/else if statements");
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(3));
console.log(testSize(8));
console.log(testSize(12));
console.log(testSize(18));
console.log(testSize(25));

console.log("\n");
// Example of a switch statement with multiple cases
console.log("This is an example of a switch statement with multiple cases");
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "unknown";
      break;        
  }
  return answer;
}
console.log(caseInSwitch(5))

console.log("\n");
// Example of a switch statement with mulitple idetical options
console.log("This is an example of a switch statement with multiple identical options");
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
      default:
        answer = "TOO HOT";
        break;
  }


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(2));

console.log("\n");
// Repacing if/else chains with Switch
console.log("This is an example of replacing if/else chains with Switch");
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "bob": 
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  default:
    answer = "This is an unknown"
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(1));
console.log("\n");

// Return boolean values from functions
console.log("This is an example of returning boolean values from functions");
function isLess(a, b) {
    return a < b;
}

console.log(isLess(10, 15));
console.log("\n");
