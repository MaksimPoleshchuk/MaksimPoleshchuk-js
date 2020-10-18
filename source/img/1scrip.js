// string, number, bool, null, undefined - примитивы
// ПРЕОБРАЗОВАНИЕ ТИПОВ

// оператор typeof
// typeof 5 -> number
// console.log(typeof 5) -> number
// const a = true
// console.log(typeof a) -> boolean

// численные преобразования
// преобразование используя +
// console.log(typeof (+'5'));
// console.log(+true)
// если перед любым типом данных поставить +
// он будет приведен к типу number
// const b = +'5'
// 5 + +'5'
// унарный плюс - приоритет - 17
// плюс сложения - приоритет - 13
// console.log(5 / +'5')
// значит верно следующее условие
// console.log(typeof b)


// преобразование используя Number
// Number('123') -> 123
// console.log(typeof Number(false))
// преобразование используя математические операции
// console.log(null/'5') -> 0/5 -> 0

//console.log(true*null) : true -> 1, null -> 0, 1 * 0 -> 0

// console.log(-'5')

// console.log(NaN + Infinity)
// null -> 0
// '5' -> 5
// 0/5
// '1'/'2' -> 0.5
// undefined -> NaN
// null	-> 0
// true / false -> 1 / 0
// 'qwe' -> NaN
// '   123' -> 123
// '123' -> 123
// '' -> 0
// console.log(Number('Infinity'))
// 'Infinity'

// Строковое преобразование
// явное преобразование используя String
// console.log(typeof String(123))
// String(123) -> '123'
// преобразование используя оператор +
// console.log(5 + 5 + ('qwe' + 5) * 6 + 5)
// хотя бы с одной их сторон плюса есть строковый тип,
//второй тоже будет приведен к строке
// const a = '1' + false
// console.log(typeof a)
// false -> 'false'
// null -> 'null'
// 5 -> '5'
// console.log(typeof String(Infinity))
// Infinity - > 'Infinity'

// Булевое преобразование
// преобразование используя Boolean
// console.log(Boolean('123'))
// Boolean(1) -> true
// преобразование используя !!
// !!1 -> true
// обратное преобразование используя !
// !1 -> false
// !0 -> true
// 0, null, '', NaN, undefined, false -> false
// '123' -> true
// console.log(Boolean(Infinity))

//!
// 0, null, '', NaN, undefined, false -> true


// const a = 5;
// let result
// if (a) {
//     result = 'a имеет пустое значение'
// } else {
//     result = a * 2
// }

// console.log(result)

// к чему будут преобразованы выражения ниже (number, string, bool)
// Infinity -> Infinity, 'Infinity',  true