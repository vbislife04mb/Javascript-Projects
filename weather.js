//Value of Kelvin
const kelvin = 0;
//Celsius is 273 less than Kelvin
const celsius = kelvin - 273;
//Calculation for Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Round to Integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);