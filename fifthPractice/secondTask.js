let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

function getOlderUserArray(allUsers) {
    let oldestUser = allUsers[0];
    for (let i = 0; i < allUsers.length; ++i) {
        if (allUsers[i].age > oldestUser.age) {
            oldestUser = allUsers[i]
        }
    }
    return oldestUser.name;
}

let result = getOlderUserArray(allUsers);
console.log(result);