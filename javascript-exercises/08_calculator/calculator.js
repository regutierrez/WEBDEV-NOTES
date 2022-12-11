const add = function(intNum1, intNum2) {
	return intNum1 + intNum2;
};

const subtract = function(intNum1, intNum2) {
  return intNum1 - intNum2;
};

const sum = function(numArray) {
	let  intSum = 0;
  numArray.forEach(element => {
    intSum += element;
  });

  return intSum;
};

const multiply = function(numArray) {
  let intProduct = 1;
  numArray.forEach(element => {
    intProduct *= element;
  });
  
  return intProduct;
};

const power = function(intNum1, intPower) {
  return Math.pow(intNum1, intPower);
};

const factorial = function(intNum) {
	if (intNum == 0 || intNum == 1) return 1;

  let intFactorial = 1;
  for (let index = intNum; index > 0; index--) {
    intFactorial *= index;
  }

  return intFactorial;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
