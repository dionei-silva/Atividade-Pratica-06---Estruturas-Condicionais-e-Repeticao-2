/* 18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

avista -- desconto de 2,5% sobre o preço de tabela
de 2 a 5x --- preço de tabela sem desconto e acrescimo
de 6 a 10x -- juros de 6% sobre tabela
de 11 a 15x -- juros de 13% sobre tabela

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console. */

const precoTabela = Number(prompt("insira o valor da mercadoria"))
const parcela = Number(prompt("Insira quantas vezes gostaria de parcelar (1 a 15x)"))

if(parcela >= 11){
      document.write(`O valor de cada parcela fica R$ ${(precoTabela / parcela).toFixed(2)} com o preço total de R$${(precoTabela * 1.13).toFixed(2)}`)
} else if(parcela <= 10 && parcela >= 6){
      document.write(`O valor de cada parcela fica R$ ${(precoTabela / parcela).toFixed(2)} com o preço total de R$${(precoTabela * 1.06).toFixed(2)}`)
}else if(parcela <= 5 && parcela >= 2){
      document.write(`O valor de cada parcela fica R$ ${(precoTabela / parcela).toFixed(2)} com o preço total de R$${(precoTabela).toFixed(2)}`)
}else{
      document.write(`O valor total de R$ ${(precoTabela * 0.975).toFixed(2)}`)
}
