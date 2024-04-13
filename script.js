// let totalPrice = 0;
// let order = "";
// const cart = receipt();

// for (const key in cart) {
//     const item = cart[key];
//     totalPrice += item.price;
//     order += `${key} ${item.info}, `;
// }

// const deliveryCost = 9000;
// totalPrice += deliveryCost;

// console.log(`Вы заказали ${order}`);
// console.log(`Общая стоимость: ${totalPrice} с доставкой (${deliveryCost})`);

// const cart = receipt();
// console.log(cart);

// let i = 9000;
// let menu = 'Вы заказали ';
// for(const key in cart) {
//     menu = menu + `${key}`;
//     for(const newKey in cart[key]) {
//         menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}, ` : menu + '';
//         i = newKey == 'price' ? i + cart[key][newKey] : i;
//     }
// }
// console.log(`${menu} | Общая стоимость ${i} сумм с доставкой (9000)`);


// const cart = receipt();
// console.log(cart);

// let i = 9000;
// let menu = 'Вы заказали ';
// for(const key in cart) {
//     menu = menu + `${key}`;
//     for(const newKey in cart[key]) {
//         menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}, ` : menu + '';
//         i = newKey == 'price' ? i + cart[key][newKey] : i;
//     }
// }
// console.log(`${menu} | Общая стоимость ${i} сумм с доставкой (9000)`);





// МАССИВЫ
// Что такое массивы ?
// - Пример: страна
// - Пример: библиотка

let a /* array */ = []
console.log(typeof a); /* object */

// Массив - тот же самый объект, модифицированный.
// Объект - само по себе чтото одно, а в массиве, уже больше каких то данных можно хранить

console.log(Array.isArray(a));


let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(letters);
console.log(letters.length);

let str = "hello world"
console.log(str);
// console.log(str.length); /* Несмотря в консоль сколько выйдет ? */



for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}



// Подсчет четных чисел 
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], answer = 0
for (let i = 0; i < nums.length; i++) {
    answer += nums[i] % 2 == 0 ? 1 : 0
}
console.log(answer);
// 6 - потомучто 0, 0 - самое четное число

// Как сделать чтоб мы могли посчитать нечетные числа?



let names = ["Ivan", "Mary", "Nick", "James"]
for (const key in names) /* key - индекс массива */ {
    console.log(key);
    console.log(names[key]);
    // console.log(key + ": " + names[key]);
}


for (const key in names) /* key - индекс массива */ {
    names[key] == 'Mariana' ? names.splice(key, 1) /* 1 - потомучто мы удаляем только 1 элемент */ : ""
} /* splice - удаляет элемент массива */

console.log(names);



let users = [
    {
        name: "Ivan",
        lastName: "Ivanov",
        age: 28
    },
    {   /* Интересно о ком это мы... */
        name: "Vladimir",
        lastName: "Vladimirovich",
        age: 70
    }
]
console.log(users);


/* !!! СНАЧАЛА ПОКАЗАТЬ forEach !!! */
// users.push({
//  name: "Mariana",
//  lastName: "Grande",
//  age: 25
// })
// users.push({
//  name: prompt("enter name"),
//  name: prompt("enter name", "Ann"),
//  lastName: prompt("enter lastname"),
//  age: +prompt("enter age")
// })



/* Метод массива который работает как цикл */
users.forEach(key => {
    console.log(key);
    console.log(key.name);
}) 
// Самый быстрый цикл внутри js, хоть циклом и не является



const nameStr = "Ivan, Vasya, Anna"
const arr = nameStr.split('')
// const arr = nameStr.split(',')
// const arr = nameStr.split(', ')
console.log(arr);


// ************************************
// // Метод map - используется для преобразования каждого элемента массива, 
// // создания нового массива с результатами этого преобразования. При этом исходный массив не изменятеся
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(item => item * item )
console.log(squaredNumbers);

const words = ["hello", "world"]
const uppercaseWords = words.map(word => word.toUpperCase())
console.log(uppercaseWords);
// // Задача на map: Нужно увеличить каждое число на 2. Мы можем использовать метод map(), 
// // чтобы преобразовать каждый элемент массива следующим образом:
// // const squaredNumbers = numbers.map(item => item + 2 )


// // ************************************
// // метод filter - применяется к массиву в JavaScript и используется для фильтрации элементов массива 
// // на основе заданного условия, создавая новый массив из элементов, для которых условие истинно.
const numbers = [1, 2 ,3, 4, 5, 6] 
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

const slovoPacana = ["How", "do", "you", "do", "Maratik"]
const longWords = slovoPacana.filter(word => word.length > 3)
console.log(longWords); /* Исходный массив не меняется */

// // нам нужно отфильтровать все числа, которые больше 5
const numbers = [3, 8, 2, 6, 5, 9];
const numbersGreaterThanFive = numbers.filter(num => num > 5);
console.log(numbersGreaterThanFive); // [8, 6, 9]


// // // ************************************
// // метод reduce Метод reduce() применяется к массиву в JavaScript и используется для выполнения 
// // (свода) элементов массива, преобразуя их в единственное значение. 
// // При помощи метода reduce() можно вычислить сумму всех элементов, объединить элементы в строку, найти наибольший или наименьший элемент и т.д.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((item, itemValue) => item + itemValue, 0); /* Самое основное применение этого метода */
console.log(sum); // 15

const words = ['Hello', 'world', 'how', 'are', 'you'];
const concatenatedString = words.reduce((word, wordValue) => word + ' ' + wordValue, '');
console.log(concatenatedString); // 'Hello world how are you'


// // ************************************
// метод find используется для поиска первого элемента в массиве, удовлетворяющего условию заданной функции. 
// Как только такой элемент будет найден, поиск прекращается, и метод возвращает его значение.
const numbers = [1, 3, 5, 4, 7];
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // 4



// // ************************************
// метод sort - используется для сортировки элементов этого массива. 

const numbers = [4, 2, 7, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5, 7]

// Функция сравнения принимает два аргумента (обычно обозначаются как a и b) и возвращает число:
// - Если результат отрицательный, a будет расположено перед b;
// - Если результат положительный, b будет расположено перед a;
// - Если результат равен нулю, порядок элементов остается неизменным.


// // ************************************
// метод reverse - "переворачивает" массив, помещая последний элемент в начало, 
// предпоследний - на вторую позицию и так далее, изменяя индексы элементов в обратном порядке.

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1] /* Однако исходный массив изменяется */



// Доп.задачи
// 1. Посчитай количество слов в предложении.
// 2. Проверь, является ли заданная строка палиндромом (читается одинаково справа налево и слева направо). /* Возможно понадобится метод join и некоторые другие, но можно и без него */
// 3. Напиши функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.




/////////////////// ПЕРВОЕ ЗАДАНИЕ 
// 1-ый способ
let countOfWords = 0
let sentence     = prompt('Напишите предложение...')
let arrSentence  = sentence.split(' ')

for (let i = 1; i <= arrSentence.length; i++) {
   countOfWords = i 
}
console.log(countOfWords);

// 2-й способ
let sentence     = prompt('Напишите предложение...');
let words        = sentence.split(' ');
let countOfWords = words.length;

console.log(countOfWords);


/////////////////// ВТОРОЕ ЗАДАНИЕ 
// 1-ый способ
let word       = prompt('Введите слово...')
let wordArr    = word.split('')
let wordCheck  = wordArr.toLocaleString().toLowerCase()
let wordCheck2 = wordArr.reverse().toLocaleString().toLowerCase()
/* 1. word.split(''): Метод split('') применяется к строке word и разбивает её на массив символов, 
где каждый символ будет элементом массива. Если строка была, например, 'hello', 
после этой операции мы получим массив ['h', 'e', 'l', 'l', 'o'].
2. .reverse(): Метод reverse() применяется к полученному массиву и изменяет порядок элементов на обратный. 
Таким образом, если у нас был массив ['h', 'e', 'l', 'l', 'o'], после применения reverse() мы получим массив ['o', 'l', 'l', 'e', 'h'].
3. .join(''): Метод join('') объединяет элементы массива в строку, 
используя указанный разделитель (в данном случае, пустая строка ''). 
Таким образом, массив ['o', 'l', 'l', 'e', 'h'] будет объединен в строку 'olleh'.
Таким образом, строка let reversedWord = word.split('').reverse().join(''); берет строку word, разбивает ее на массив символов, 
переворачивает порядок элементов в массиве и затем объединяет эти элементы обратно в строку. 
В результате переменная reversedWord будет содержать обратное слово к исходному слову word. */

if(wordCheck == wordCheck2){
  alert('Введеное слово - палиндром')
} else{
  alert('Слово не палиндром')
}

// 2-й способ
let word         = prompt('Введите слово...');
let reversedWord = word.split('').reverse().join('');

if (word.toLowerCase() === reversedWord.toLowerCase()) {
  alert('Введенное слово является палиндромом');
} else {
  alert('Слово не является палиндромом');
}

/////////////////// ТРЕТЬЕ ЗАДАНИЕ
let nums     = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNums = []
function returnEven() {
  for (let i = 0; i < nums.length; i++) {
    const element = i;
    if (element % 2 == 0) {
      evenNums.push(element)
    }
    console.log(evenNums);
  }
}
returnEven()
