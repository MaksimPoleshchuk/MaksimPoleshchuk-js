// Task 1

// let x = process.argv[2];
// x = Math.sign(x);  Можно воспользоваться этой переменной

// if (x < 0) {
//     console.log('Отрицательное число')
// } else {
//     if (x > 0) {
//         console.log('Положительное число')
//     } else {
//         if (x == 0) {
//             console.log('Нулевое значение')
//         }
//     }
// }
// -------------------------------------------
// Math.sign = Math.sign || function(x) {
//     x = +x; // преобразуем в число
//     if (x === 0 || isNaN(x)) {
//       return x;
//     }
//     return x > 0 ? 1 : -1;
// }  как это должно работать??
// ---------------------------------------------------------------------------------?//

// Task 2

// let age = process.argv[2];
// if (age < 120 && age > 0) {
//     console.log(`${age} - В точку`)
// } else {
//     console.log(`${age} - Недопустимый возраст`)
// }

// -----------------------------------------------------------------------

// Task 3
// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

//  alert('Введите число'); Почему не работает? выбивает ошибку из-за него
// Хотел сделать , чтобы сразу появилась надпись ввести чисто(не через браузер)

//  let number = Number(process.argv[2]);
//  console.log(Math.abs(number));
// ----------------------------------------------------------------

// Task 4

// Запросить у пользователя 
// время (часы, минуты, секунды) и проверить корректность введенных данных.

// let hours = Number(process.argv[2]);
// let minutes = Number(process.argv[3]);
// let seconds = Number(process.argv[4]);
// if (typeof Number(true) && hours, minutes, seconds >= 0 || hours <= 24, minutes <= 60, seconds <= 60) {
//     console.log(hours + 'h' + minutes + 'min' + seconds + 'sec')
// } else {
//     console.log(' Проверьте павильность введенных данных')
// }

// ----------------------------------------------------------------------

// Task 5

// Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. 
// Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.
// Тут нужен switch

// let x = Number(process.argv[2]);
// let y = Number(process.argv[3]);

// switch (x, y) {
//     case 1: {
//         if (x > 0 && y > 0) {
//             console.log('1-ая четверть');
//         }
//         break;
//     }
//     case 2: {
//         if (x > 0 && y < 0) {
//             console.log('2-ая четверть');
//         }
//         break;
//     }
//     case 3: {
//         if (x < 0 && y < 0) {
//             console.log('3-ая четверть');
//         }
//         break;
//     }
//     case 4: {
//         if (x < 0 && y > 0) {
//             console.log('4-ая четверть');
//         }
//         break;
//     }
//     default: {
//         if (typeof String(true)) {
//             console.log('ошибка');
//         } else {
//             if (x, y = 0) {
//                 console.log('попадание на ось')
//             }
//         }
//         break;
//     }
// }

// -----------------------------------------------------------------------------

// Task 6
// 6. Запросить у пользователя номер месяца и вывести на экран его название.

// let month = +process.argv[2];

// switch(month) {
//     case 1:
//         console.log('Январь');
//         break;
//     case 2:
//         console.log('Февраль');
//         break;
//     case 3:
//         console.log('Март');
//         break;
//     case 4:
//         console.log('Апрель');
//         break;
//     case 5:
//         console.log('Май');
//         break;
//     case 6:
//         console.log('Июнь');
//         break;
//     case 7:
//         console.log('Июль');
//         break;
//     case 8:
//         console.log('Август');
//         break;
//     case 9:
//         console.log('Сентябрь');
//         break;
//     case 10:
//         console.log('Октябрь');
//         break;
//     case 11:
//         console.log('Ноябрь');
//         break;
//     case 12:
//         console.log('Декабрь');
//         break;
//     default:
//         console.log('Нет такого месяца')
//         break;
// }

// -------------------------------------------------------

// TASK-7 (Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат)
// let a = +(prompt('Введите А'));
// let b = +(prompt('Введите Б'));
// let operator = prompt('Введите опперацию');

// if(typeof String(true)) {
//     alert('Используйте цифровой ввод');
// } else if (
//     operator !== '+' &&
//     operator !== '-' &&
//     operator !== '*' &&
//     operator !== '/'
// ) {
//     alert('Введен некорректный оператор');
// } else {
//     let result;

//     switch(operator) {
//         case '+':
//             result = a + b;
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             if(b == 0)
//             alert('Нельзя делить на 0');
//             result = a / b;
//             break;
//     }
//     alert(`${a} ${operator} ${b} = ${result}`);
// }












