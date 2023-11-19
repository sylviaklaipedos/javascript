let n = 100;
let m = -5;

let min = Math.min(n, m);
let max = Math.max(n, m);

let range = Math.abs(max - min);

let firstRandom = Math.floor(Math.random() * range);
let secondRandom = Math.floor(Math.random() * range);

console.log("Первое случайное число " + firstRandom);
console.log("Второе случайное число " + secondRandom);

console.log(firstRandom + " > " + secondRandom + ": " + (firstRandom > secondRandom));
console.log(firstRandom + " < " + secondRandom + ": " + (firstRandom < secondRandom));
console.log(firstRandom + " ≥ " + secondRandom + ": " + (firstRandom >= secondRandom));
console.log(firstRandom + " ≤ " + secondRandom + ": " + (firstRandom <= secondRandom));
console.log(firstRandom + " === " + secondRandom + ": " + (firstRandom === secondRandom));
console.log(firstRandom + " ≠ " + secondRandom + ": " + (firstRandom !== secondRandom));
