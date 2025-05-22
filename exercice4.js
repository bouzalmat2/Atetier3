const numbers = [1, 7, 10, 9, 8];

const MaxNumber = numbers.reduce((Max, current) => current > Max? current : Max);
console.log(MaxNumber); 
