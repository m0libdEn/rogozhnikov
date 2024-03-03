const task1 ={
    name: 'Danila',
    city: 'Miami'
}
console.log('Задание 1: объект до:',task1);
delete task1.city;
console.log('объект после:',task1);

const task2 ={
    name: 'Danila',
    city: 'Miami'
}

function checkKey(object){
    let key = prompt('Введите значение ключа')
    for(el in object){
        if (el === key) {
            alert('Ключ найден! '+el + ' присутсвует!')
            return true
        }
    }
    alert('Ключ не найден! Обидно, печально, грустно, душераздерающе...')
    return false
}

console.log('Задине 2:',checkKey(task2));


const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

function outputObjectInfo(object) {
    console.log('ключи');
    for (key in object) {
        console.log(key);
    }
    console.log('значения');
    for (key in object) {
        console.log(object[key]);
    }
}

console.log('Задание 3:');
outputObjectInfo(student) 


const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
};

console.log('Задание 4: ' + colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

function averageSalary(object){
    let sum = 0
    let numberOfPeople = Object.keys(object).length
    for (key in object) {
        sum+=object[key]
    }
    let res = sum/numberOfPeople
    return res
}

console.log('Задание 5: ' + averageSalary(salaries));

const user={}

function addData(object){
    object.login = prompt('Введите логин')
    object.password = prompt('Введите пароль')
}


function checkData(object){
    let flag = false
    while(flag === false){
        alert('Давайте удостовримся в верности данных!')
        let checkLogin = prompt ('Снова введите ваш логин')
        let checkPass = prompt ('Снова введите ваш пароль')
        if (checkLogin === object.login && checkPass === object.password) {
            alert('Добро пожаловать!')
            flag = true
        }else{
            alert('Данные введены неверно, попробуйте еще раз')
        }
    }
}

addData(user)
checkData(user)