let n = 7;
let array = [2, 1, 3]
let found = false;

for (let i = 0; i < array.length; ++i) {
    if (array[i] === n) {
        found = true;
        console.log('индекс элемента = ' + i);
        break;
    }    
}

if (!found) console.log('элемент не найден');