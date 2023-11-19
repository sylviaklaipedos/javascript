let count = 10;
let n = -93;
let m = -5;

let min = Math.min(n, m)
let max = Math.max(n, m)

array = [];

for (let i = 0; i < count; ++i) {
    array.push(Math.floor(Math.random() * (max - min) + min))
}

console.log(array)