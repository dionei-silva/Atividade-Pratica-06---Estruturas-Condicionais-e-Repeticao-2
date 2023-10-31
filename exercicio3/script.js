/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */
const weekDay = Number(prompt(`3. Digite um número de 1 a 7: `))
if(weekDay === 1) { console.log(`3. O dia respectivo é Domingo`) }
else if (weekDay === 2) { console.log(`3. O dia respectivo é Segunda`) }
else if (weekDay === 3) { console.log(`3. O dia respectivo é Terça  `) }
else if (weekDay === 4) { console.log(`3. O dia respectivo é Quarta `) }
else if (weekDay === 5) { console.log(`3. O dia respectivo é Quinta `) }
else if (weekDay === 6) { console.log(`3. O dia respectivo é Sexta  `)}
else if (weekDay === 7) { console.log(`3. O dia respectivo é Sábado `)}
else { console.log(`3. Dia não reconhecido`)}
