let count = 7;
let array = []

for (let i = 1; i < count + 1; ++i) {
    array.push(i)
}

for (let i = array.length - 1; i > 0; --i) {
    let j = Math.floor(Math.random() * count)
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

console.log(array)
