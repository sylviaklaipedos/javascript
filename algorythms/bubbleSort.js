let array = [1, 5, 3, 77, 44, 23, 121, 12, 5];

for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1; ++j) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array)