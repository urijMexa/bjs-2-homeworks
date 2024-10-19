"use strict";

/**
 * Функция для расчёта общей суммы выплат по ипотеке.
 * @param {number} percent - Годовая процентная ставка (в диапазоне от 0 до 100).
 * @param {number} contribution - Сумма первоначального взноса.
 * @param {number} amount - Общая сумма кредита.
 * @param {number} countMonths - Срок кредита в месяцах.
 * @returns {number} - Общая сумма выплат, округленная до двух знаков после запятой.
 */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Проверка на корректность входных параметров
    if (percent < 0 || contribution < 0 || amount < 0 || countMonths <= 0) {
        return "Пожалуйста, введите положительные значения для всех параметров.";
    }

    // Конвертация процентной ставки из процентов в доли
    const monthlyPercent = (percent / 100) / 12;

    // Расчёт тела кредита
    const loanBody = amount - contribution;

    // Если тело кредита меньше или равно нулю, возвращаем 0
    if (loanBody <= 0) {
        return 0;
    }

    // Расчёт ежемесячного платежа по формуле аннуитетного кредита
    const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

    // Общая сумма выплат
    const totalPayment = contribution + (monthlyPayment * countMonths);

    // Округление до двух знаков после запятой
    const roundedTotal = Math.round(totalPayment * 100) / 100;

    return roundedTotal;
}

// Примеры использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12));      // Ожидаемый вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12));  // Ожидаемый вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));      // Ожидаемый вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24));  // Ожидаемый вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидаемый вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));      // Ожидаемый вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));      // Ожидаемый вывод: 12479.52
