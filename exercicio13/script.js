/* 13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado. */

const numero = Number(prompt('Insira um numero maior que 1'))

for (let i = 0; i <= numero; i++) {
      if(i % 2 != 0){
            document.write(`${i} `)
      }
}
