/* 7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100. */

let sum = 10
let value = 10

do {
    sum = sum + value + 1
    value++ 
} while (value < 100)
document.write(sum)
