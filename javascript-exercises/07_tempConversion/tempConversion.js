const convertToCelsius = function(farenheitTemp) {
  return Math.round(Math.floor((farenheitTemp - 32) * (5/9) * 1000) / 100) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round(Math.floor(((celsiusTemp * (9/5)) + 32) * 1000) / 100) / 10;
};
console.log(convertToFahrenheit(163.8));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
