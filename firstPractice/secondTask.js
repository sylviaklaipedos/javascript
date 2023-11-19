let a = 13.890123;
let b = 2.891564;
let n = 2;

let fractA = Math.floor(a % 1 * Math.pow(10, n));
let fractB = Math.floor(b % 1 * Math.pow(10, n));

console.log("Дробная часть числа a равна " + fractA);
console.log("Дробная часть числа b равна " + fractB);

console.log("a > b: " + (fractA > fractB));
console.log("a < b: " + (fractA < fractB));
console.log("a ≥ b: " + (fractA >= fractB));
console.log("a ≤ b: " + (fractA <= fractB));
console.log("a === b: " + (fractA === fractB));
console.log("a ≠ b: " + (fractA !== fractB));