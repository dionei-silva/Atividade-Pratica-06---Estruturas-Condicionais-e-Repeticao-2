/* 17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores. */

let eleitores = 0
let brancos = 1
let nulos = 0

while (brancos + nulos > eleitores) {
    eleitores = Number(prompt(`17. Digite o número de eleitores do munícipio: `))
    brancos = Number(prompt(`17. Digite o total de votos brancos: `))
    nulos = Number(prompt(`17. Digite o total de votos nulos: `))
    if (brancos + nulos > eleitores) {
        alert(`17. Você digitou mais votos brancos e nulos do que o total de eleitores! \nRefaça o processo!`)
    }
}

const validos = eleitores - (brancos + nulos)

document.write(`
    17. O total de eleitores é de: ${eleitores}; <br>
    O total de votos válidos foi de: ${validos}, o que corresponde a ${((validos * 100) / eleitores).toFixed(1)} %; <br>
    O total de votos brancos foi de: ${brancos}, o que corresponde a ${((brancos * 100) / eleitores).toFixed(1)} %; <br>
    O total de votos nulos   foi de: ${nulos},   o que corresponde a ${((nulos * 100)   / eleitores).toFixed(1)} %. <br>
<br>`)