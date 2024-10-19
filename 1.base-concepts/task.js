"use strict";

/**
 * Функция для решения квадратного уравнения ax² + bx + c = 0.
 * @param {number} a - Коэффициент при x²
 * @param {number} b - Коэффициент при x
 * @param {number} c - Свободный член
 * @returns {number[]} - Массив корней уравнения
 */
function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        // Нет действительных корней
        return [];
    } else if (discriminant === 0) {
        // Один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Два корня
        const sqrtDisc = Math.sqrt(discriminant);
        const root1 = (-b + sqrtDisc) / (2 * a);
        const root2 = (-b - sqrtDisc) / (2 * a);
        return [root1, root2];
    }
}

// Пример использования:
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, 1));  // []
