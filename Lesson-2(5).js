/*
 Task 5:
 Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
 Обязательно использовать оператор return.
 */

/**
 *Скалдывает два переданных в функцию числа
 *@param a {number} первое слагаемое
 *@param b {number} второе слагаемое
 *@return {number} возвращает сумму a и b
 */
function actionPlus(a, b) {
    return a + b;
}

/**
 *Вычитает переданные в функцию параметры
 *@param a {number} уменьшаемое
 *@param b {number} вычитаемое
 *@return {number} возвращает разность a и b
 */
function actionMinus(a, b) {
    return a - b;
}

/**
 *Делит переданные в функцию параметры
 *@param a {number} делимое
 *@param b {number} делитель
 *@return {number} результат деления a на b
 */
function actionDivide(a, b) {
    return a / b;
}

/**
 *Умножает переданные в функцию параметры;
 *@param a {number} первое множимое
 *@param b {number} второе множимое
 *@return {number} результат умножения a и b.
 */
function actionMultiply(a, b) {
    return a * b;
}

console.log(actionPlus(7, 5)); //13
console.log(actionMinus(7, 5)); //2
console.log(actionDivide(7, 5)); //1.4
console.log(actionMultiply(7, 5)); //35
