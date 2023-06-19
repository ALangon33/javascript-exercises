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

const factorial = function(n) {
	let array = [];
  if (n === 0 || n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    for (i=n;i>0;i--) {
      array.push(n);
      n--;
    }
    let output = 1;
    const outputProduct = array.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        output
    );
    return outputProduct;
  }

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
