let firstArray = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let secondArray = [12, 44, 23, 5];

for (let i = 0; i < secondArray.length; ++i) {
    firstArray.push(secondArray[i])
}

console.log(firstArray)