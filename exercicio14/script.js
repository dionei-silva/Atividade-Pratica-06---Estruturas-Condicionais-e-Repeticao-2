/* 14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor */

let multiplication = Number(prompt(`14. Digite um número: `))
while (multiplication < 500) {
    multiplication = multiplication * 3
    console.log(`${multiplication}`);
}
document.write(`14. O último número da série de multipicações por 3, enquanto o multiplicando for menor que 500, é o: <strong>${multiplication}</strong>.<br><br> `)
