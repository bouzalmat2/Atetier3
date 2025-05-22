const numbers = [1, 3, 4];

const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

const factorialList = numbers.map(factorial);

console.log(factorialList); 
