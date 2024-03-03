const colors = ['red', 'green', 'blue']
console.log('Задние 1: ', colors.length);
const animals = ['monkey', 'dog', 'cat']
console.log('Задние 2: ', animals[animals.length-1]);

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log('Задние 3: 1 cпособ -',numbers);
const numbersV2=[5, 43, 63, 23, 90];
flag = false
while(flag === false){
    numbersV2.pop()
    if(numbersV2.length === 0) flag = true
}
console.log('Задние 3: 2 cпособ -',numbersV2);

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')
console.log('Задние 4:',students);

const cats = ['Gachito', 'Tom', 'Batman']
console.log('Задние 5:');
for (let index = 0; index < cats.length; index++) {
    console.log(cats[index]);
}
console.log('-----------------------------------------');
for (const el of cats) {
    console.log(el);
}

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const num = evenNumbers.concat(oddNumbers)
console.log('Задание 6', num);
console.log(num[3]); // так как присваеваем первый массив ко второму

const binary = [0, 0, 0, 0]
const res = binary.join('1')
console.log('Задание 7', res);