/* 15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C); */

const A = Number(prompt("Insira um numero"))
const B = Number(prompt("Insira um numero"))
const C = Number(prompt("Insira um numero"))
if(!( A <B + C && B < A + C && C < A + B)){
      document.write("Não e um triangulo")
}else if (A === B && A === C && B === C){
      document.write("triangulo equilatero")
} else if (A !== B && A !== C && B !== C){
      document.write("triangulo escaleno")
}else{
      document.write("triangulo isósceles")
}

