const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let output = 0;
  const outputSum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      output
  );
  return outputSum;
};

const multiply = function(args) {
  const argList = Array.from(arguments)
  let output = 1;
  const outputProduct = argList.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      output
  );
  return outputProduct;
};

const power = function(x, y) {
let array = [];
  for (i=0;i<y;i++) {
    array.push(x);
  }
    let output = 1;
    const outputProduct = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        output
    );
    return outputProduct;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
