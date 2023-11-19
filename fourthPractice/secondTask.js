function filter(whiteList, blackList) {
    let filteredList = [];
    for (let i = 0; i < whiteList.length; ++i) {
        if (!(blackList.includes(whiteList[i]))) {
            filteredList.push(whiteList[i]);
        }
    }
    return filteredList;
}

let whiteList = [`my-email@gmail.ru`, `jsfunc@mail.ru`, `annavkmail@vk.ru`, `fullname@skill.ru`, `goodday@day.ru`];

let blackList = [`jsfunc@mail.ru`, `goodday@day.ru`];

let result = filter(whiteList, blackList);

console.log(result);