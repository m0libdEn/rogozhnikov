function getSum(el){
let sum = 0
for (let index = 0; index <= el; index++) {
    sum+= index
}
    return sum
}

let res = getSum(100);
console.log(`Задание 1: ${res}`);

function credit(ammount){
    let rate = 0.17
    let years = 5
    let total = ammount * (1 + rate * years)
    return overpay = total - ammount
}

console.log(`Задание 2: ${credit(5000)} (не выгодно :) )`);

function trimString(sentence, from, to){
    let split = sentence.split('')
    let result = ''
    for (let index = --from; index < to; index++) {
        result+=split[index];
    }
    return result
}
console.log(`Задание 3: ${trimString('я люблю пиво', 2, 6)}`);

function getSumNumbers(num){
    let amount = String(num).split('')
    let sum = 0
    for (let el in amount) {
        sum+=parseInt(amount[el])
    }
    return sum
}

console.log(`Задание 4: ${getSumNumbers(2021)}`);


function getSumofNum(a,b){
    let sum = 0
    if (a!=b) {
        if (a < b) {
            for (let index = a; index <= b; index++) {
                sum+=index
            }
        }else{
            for (let index = b; index <= a; index++) {
                sum+=index
            }
        }
    }else{
        sum = a
    }
    return sum
}
console.log(`Задание 5: ${getSumofNum(-1,2)}`);


function foo() {
    console.log("foo");
}

function boo() {
    console.log("boo");
}

function fooBoo(booleanValue, fooFunc, booFunc) {
    if (booleanValue === true) {
        fooFunc();
    } else {
        booFunc();
    }
}

console.log(`Задание 6: ${fooBoo(booleanValue, foo, boo)}`);

