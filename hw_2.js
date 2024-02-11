let x = 20
let y = 58
let z = 42
console.log(`Задание 1:' ${x+y+z}`);

let sec = 60;
let min = 60;
let hour = 24;
let year = 365;

let myAge = 21;

let myAgeInSeconds = sec*min*hour*year*myAge;
console.log(`Задание 2:' ${myAgeInSeconds}`);

let count = 42
let userName = '42'

let countToSting = count.toString();
let userToNum = +userName;
console.log('Задание 3: (способ 1)');
console.log(`Тип даннных count ${typeof countToSting}`);
console.log(`Тип даннных userName ${typeof userToNum}`);

let countToStingVer2 = '' + count;
let userToNumVer2 = +userName;
console.log('Задание 3: (способ 2)');
console.log(`Тип даннных count ${typeof countToStingVer2}`);
console.log(`Тип даннных userName ${typeof userToNumVer2}`);

let a = 1;
let b = 2;
let c = ' белых медведей';
let result = a.toString() + b.toString() + c;
console.log(`Задание 4:' ${result}`);


let word1 = 'морпех';
let word2 = 'наледь';
let word3 = 'попрек';
let word4 = 'рубило';
let lengthWords = word1.length + word2.length + word3.length + word4.length;

console.log(`Задание 5:' ${lengthWords}`);

let variable1 = 42;
let variable2 = 'Hello, world!';
let variable3 = true;
console.log('Задание 6');
console.log(`Variable: variable1 have type: ${typeof variable1}`);
console.log(`Variable: variable2 have type: ${typeof variable2}`);
console.log(`Variable: variable3 have type: ${typeof variable3}`);

let user = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:")
console.log('Задание 7');
console.log("Имя пользователя:", user);
console.log("Возраст пользователя:", age);

let num1 = 4
let num2 = 3
num1+=num2
num2=num1-num2;
num1-=num2
console.log('Задание 1 продвинутый');
console.log(`Первое число: ${num1}, Второе число ${num2}`);

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1]
console.log(`Задине 2 продвинтый, шифр: ${cipher}`);