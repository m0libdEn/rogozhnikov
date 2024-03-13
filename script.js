const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


console.log('Задание 1б вариант 1');
function printOutFun(arr){
    arr.forEach(el => {
        console.log(el);
    });
}

printOutFun(fibonacci)
console.log('----------------------------------------');
console.log('Задание 1 вариант номер два');
const printOutArr= (arr) => arr.forEach(el=>console.log(el))

printOutArr(fibonacci)


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
console.log('Задание 2 вариант номер один');
function changeArrFun(arr){
    return arr.map(function(user, index){
        return `member ${index+1}: ${user}`
    })
}
const usersNew = changeArrFun(users)
console.log(usersNew);

console.log('----------------------------------------');
console.log('Задание 2 вариант номер два');
const usersNewArr = users.map((user, index)=> `member ${index+1}: ${user}`)
console.log(usersNewArr);


const numbers = [7, -4, 32, -90, 54, 32, -21]
const noNegFun = numbers.filter(function(el){
    if(el>=0) return el
})
console.log('Задание 3 вариант номер один');
console.log(noNegFun);
const noNegFunArr = numbers.filter((el)=>el>=0)
console.log('----------------------------------------');
console.log('Задание 3 вариант номер два');
console.log(noNegFunArr);

const fibSumFun = fibonacci.reduce(function(sum, value){
   return sum+value
})
console.log('Задание 4 вариант номер один')
console.log(fibSumFun);

const fibSumArr = fibonacci.reduce((sum, value)=> sum+value)
console.log('Задание 4 вариант номер два')
console.log(fibSumArr);

const num = [5, 9, 13, 24, 54, 10, 13, 99, 1,5]
const evenNumerFun = num.find(function(el){
    if (el%2 === 0) {
        return el
    }
})
console.log('Задание 5 вариант номер один')
console.log(evenNumerFun);
console.log('----------------------------------------');
console.log('Задание 5 вариант номер два')
const evenNumerArr = num.find(el => el%2===0)
console.log(evenNumerArr);

//Продинутый  1, glhf
function Student(salary, rate, name){ //constructor
    this.salary = salary
    this.rate = rate
    this.name = name
    this.credit = () => {
        let maxCredit=0
        switch (this.rate) {
            case 'A':
                maxCredit=this.salary*12
                break
            case 'B':
                maxCredit= this.salary*9
                break
            case 'C':
                maxCredit = this.salary*6
                break
            default: maxCredit = this.salary*0
            break
        }
        return maxCredit
    }
}

let student =[
    new Student(4000, 'A', 'Danila'), //student (ya :))
    new Student(2000, 'B', 'Andrei'), //student 2
    new Student(3500, 'D', 'Max'), //student 3 (не обижайтесь :) )
    new Student(8300,'A', 'Visocki'), //student 4
    new  Student(1000, 'C', 'Masha') // student 5
]

const allCreditAmount = (arr) => {
    let amount = 0
    arr.forEach(element => {
        amount+=element.credit()
    });
    return amount
}

console.log('Продвинутое 1', allCreditAmount(student));


let str = "go mid!!! Are you braindead? Get up and stand with me, damn it, Fishman. You're grinding twenty MM a day, for what? Why? Care to explain? You're a bloody feeder, a feeder noob. There's no point in playing Dota twenty games a day if you're a feeder...It's pointless...You get it?"
let vowels = ["a", "e","i", "o","u","A", "E","I","O","U"]
const newstr = str
.split('')
.filter(el =>el===' '?' ':vowels.includes(el))
.join('')
console.log('Продвинутое 2', newstr);

const accum = (el) => {
  el=el.split('')
  for (let index = 0; index < el.length; index++) {
    el[index]=el[index].toUpperCase()+el[index].toLowerCase().repeat(index)
    index==el.length-1?'':el[index]+='-'
  }
  el = el.join('')
  return el
}
console.log('Продвинутое 3',accum('cwAt'));

const highAndLow = (str) => {
   str = str.split(' ').map(el => parseInt(el,10))
   let high=str[0]
   let low = str[0]
   str.forEach(el => {
    if (el>high) {
        high=el
        return
   }else if(el<low) low = el})
   return `${high} ${low}`
}

console.log('Продвинутое 4',highAndLow("1 9 3 4 -5"));


let isIsogram = (str) =>{
  str=str.split('')
  for (let x = 0; x < str.length; x++) {
    for (let y = x+1; y < str.length; y++) {
        if(str[x].toLowerCase()===str[y].toLowerCase()){
           return false
        }
    }
  }
  return true
}

console.log('Продвинутое 5',highAndLow("1 9 3 4 -5"));
toString()
const ascii = (str) =>{
    let total1= parseInt(str.split('').map(el=>el.charCodeAt()).join(''),10)
    let total2 = parseInt(total1.toString().split('').map(el=> el==='7'?el='1':el).join(''), 10)
    return total1-total2
}
console.log('Продвинутое 6', ascii("ABC"));