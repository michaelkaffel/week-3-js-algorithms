// 7 - Create the function. It should accept two string parameters and return the longer one


// Your code here

function longerString(param1, param2) {
  if (param1.length > param2.length) {
    return param1; 
  } else { 
    return param2;
  }
}
  
  console.log(longerString('codemify', 'test')) // codemify
  console.log(longerString('automation', 'coding')) // automation
  console.log(longerString('automation', 'the codemify')) // the codemify
