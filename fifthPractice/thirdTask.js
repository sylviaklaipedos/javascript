function filter(objects, property, argument) {
    let filteredArray = [];
    for (i in objects) {
        if (objects[i][property] === argument) {
            filteredArray.push(objects[i]);
        }
    }
    return filteredArray;
}


let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let result = filter(objects, 'name', 'Иван');

console.log(result);