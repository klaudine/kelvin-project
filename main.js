// Today's forecast will remain constant
const kelvin = 293;

// Celsius is 20* lower than Kelvin
var celsius = kelvin - 273;

// Calculates fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// Rounds down the fahrenheit temperature to a whole number
console.log(Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
