//1
// const userNumber = process.argv[2]

// const squareNumber = userNumber ** 2

// console.log(squareNumber)

// 2

// const number1 = Number(process.argv[2])

// const number2 = Number(process.argv[3])

// console.log((number1 + number2) / 2)

// 3

// const squareLine = Number(process.argv[2])

// console.log(squareLine * squareLine)

// 4

// const KM_TO_MILES_CONVERTER = 0.621371

// const kilometers = +process.argv[2]

// const result = kilometers * KM_TO_MILES_CONVERTER

// console.log(result)

// 5


// const number1 = +process.argv[2]
// const number2 = +process.argv[3]

//const operation1 = number1 + number2
// const operation2 = number1 - number2
// const operation3 = number1 * number2
// const operation4 = number1 / number2

// console.log(`$operation1 ${operation1} ${operation2} ${operation3} ${operation4}`)

// 6
// a * x + b = 0
// x= -b/a;
//let a = process.argv[2];

//let b = process.argv[3];

//let x = (-b) / a;

//console.log(x)
// const MINUTES_IN_DAY = 24 * 60
// let hours = +process.argv[2];
// let min = +process.argv[3];

// const minSum = hours * 60 + min

// const minDiff = MINUTES_IN_DAY - minSum

// console.log(`hours ${Math.floor(minDiff / 60)} min ${minDiff % 60}`)

// if (a>23.6){
//     console.log('время введено не верно')

// }
// else{
//     console.log(23.60-a)
// }

// 256 % 60 -> min
// 256 / 60 => hours

// 9. Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.

// const SALARY = 250;
// let sales = +process.argv[2];
// let sum = sales * 0.1;
// console.log(sum + SALARY);

const someValue = +process.argv[2]



// if (someValue === 1) {
//     console.log(1)
// } else {
//     if (someValue === 2) {
//         console.log(2)
//     } else {
//         console.log('default')
//     }
// }
// let year = +process.argv[2]
// switch (year % 12) {
//     case 0:
//         console.log('Обезьяна');
//         break;
//     case 1:
//         console.log('Петух');
//         break;
//     case 2:
//         console.log('Собака');
//         break;
//     case 3:
//         console.log('Свинья');
//         break;
//     case 4:
//         console.log('Крыса');
//         break;
//     case 5:
//         console.log('Бык');
//         break;
//     case 6:
//         console.log('Тигр');
//         break;
//     case 7:
//         console.log('Кролик');
//         break;
//     case 8:
//         console.log('Дракон');
//         break;
//     case 9:
//         console.log('Змея');
//         break;
//     case 10:
//         console.log('Лошадь');
//         break;
//     case 11:
//         console.log('Коза');
//         break;
//     default:
//         console.log('Не верно');
//         break;

// }

const ITEM_COUNT = 5

let i = 0;

do {
    console.log(i);
} while (i < 0);

while (i < ITEM_COUNT) {
    // вывод
    console.log(i)
    i++
}
