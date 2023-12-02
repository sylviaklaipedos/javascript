function filter(objects, property, argument) {
    return objects.filter(obj => obj[property] === argument);
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let result = filter(objects, 'name', 'Иван');

console.log(result);