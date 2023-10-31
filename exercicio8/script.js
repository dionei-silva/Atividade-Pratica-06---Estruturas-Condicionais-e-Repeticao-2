/* 8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR". */

const salary = 1400
document.write (salary < 1903.98?`ISENTO DE IR`:`TRIBUTADO NO IR`)