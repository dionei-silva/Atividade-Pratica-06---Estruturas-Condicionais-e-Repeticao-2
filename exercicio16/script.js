/* 16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu). */

const anoNascimento = Number(prompt('insira seu ano de nascimento'))
const anoAtual = Number(prompt('insira o ano atual'))

if(anoAtual - anoNascimento < 18){
      document.write("Não pode votar")
}else{
      document.write('Pode votar')
}
