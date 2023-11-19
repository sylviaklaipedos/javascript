let userName = 'raNdOmNamE';
let userSurname = 'SuRnAME';

let formattedName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
let formattedSurname = userSurname[0].toUpperCase() + userSurname.substring(1).toLowerCase();

console.log('Полное отформатированное имя: ' + formattedName + ' ' + formattedSurname);

console.log(userName === formattedName ? 'Имя осталось без изменений' : 'Имя было изменено');
console.log(userSurname === formattedSurname ? 'Фамилия осталась без изменений' : 'Фамилия была изменена');