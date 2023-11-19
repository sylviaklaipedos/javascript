function createStudentsList(listArr) {
    let studentsList = document.createElement('ul');

    for (let student of listArr) {
        let studentItem = document.createElement('li');
        let studentName = document.createElement('h2');
        let studentAge = document.createElement('span')

        studentName.textContent = student.name;
        studentAge.textContent = `Возраст: ${student.age} лет`;

        studentItem.appendChild(studentName);
        studentItem.appendChild(studentAge);

        studentsList.appendChild(studentItem);
    }

    document.body.appendChild(studentsList);
}

let allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},    
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

createStudentsList(allStudents);