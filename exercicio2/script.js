/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. */

const idade = Number(prompt("Insira sua idade"))
const habilitado = confirm("O motorista é habilitado?")

if(idade >= 18 && habilitado === true){
      document.write("Pode dirigir")
}else{
      document.write("Não pode dirigir")
}
