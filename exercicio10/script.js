/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte
      forma: 1 para sexo feminino e 2 para sexo masculino) de uma
      pessoa, construa um programa que calcule e mostre seu peso ideal,
      utilizando as seguintes fórmulas:
      - para homens: (72.7 * Altura) – 58
      - para mulheres: (62.1 * Altura) – 44.7 */

const height = Number(prompt(`Digite a sua altura e centimetros: `))
const sex = Number(prompt(`Qual o seu sexo? \n Digite '1' se for feminino e '2' se for masculino:`))
document.write( 
      sex===2 ? `10. Sendo homem, o peso ideal para a sua altura é de ${(72.7 * (height/100)-58).toFixed(1)} kg.<br><br>` :
      sex===1 ? `10. Sendo mulher, o peso ideal para a sua altura é de ${(62.1 * (height/100)-44.7).toFixed(1)} kg.<br><br>`:
      `10. Você digitou um número inválido para o sexo.<br><br>`
)