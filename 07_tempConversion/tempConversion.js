const convertToCelsius = function (fahrenheitTemp) {
  let output = ((fahrenheitTemp - 32) * 5 / 9);
  if (fahrenheitTemp === 32) {
    return output;
  } else {
    return Number(output.toFixed(1));
  };
};

const convertToFahrenheit = function (celsiusTemp) {
  let output = (celsiusTemp * 9 / 5 + 32);
  if (celsiusTemp === 0) {
    return output;
  } else {
    return Number(output.toFixed(1));
  };
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
