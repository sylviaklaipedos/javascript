function createStudentCard(name, age) {
    let studentCard = document.createElement('div');
    studentCard.classList.add('student-card');

    let studentName = document.createElement('h2');
    studentName.classList.add('student-name');

    let studentAge = document.createElement('span');
    studentAge.classList.add('student-age');

    studentName.textContent = name;
    studentAge.textContent = `Возраст: ${age} лет`;

    studentCard.appendChild(studentAge);
    studentCard.appendChild(studentName);

    document.body.appendChild(studentCard);
}