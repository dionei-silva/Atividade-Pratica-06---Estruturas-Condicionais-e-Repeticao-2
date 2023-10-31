/* 9. Informe um valor a uma variável e imprima no console se o número
é primo. */

const numero = Number(prompt("Insira um numero"))

let divisores = 2
for(let contador = 2; contador < numero; contador++)
if(numero % contador === 0){
        divisores++
}
if(divisores !== 2){
        document.write("Não é primo")
} else{
        document.write("É primo")
}