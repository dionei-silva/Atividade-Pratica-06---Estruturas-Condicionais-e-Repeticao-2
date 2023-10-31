/* 4. Reescreva o exercício 3, utilizando apenas o SWITCH. */
const weekDay = (Number(prompt('insira um dia da semana')))

switch (weekDay) {
      case  1: document.write(`4. O dia respectivo é Domingo`) ; break;
      case  2: document.write(`4. O dia respectivo é Segunda`) ; break;
      case  3: document.write(`4. O dia respectivo é Terça  `) ; break;
      case  4: document.write(`4. O dia respectivo é Quarta `) ; break;
      case  5: document.write(`4. O dia respectivo é Quinta `) ; break;
      case  6: document.write(`4. O dia respectivo é Sexta  `) ; break;
      case  7: document.write(`4. O dia respectivo é Sábado `) ; break;
      default: document.write(`4. Dia não reconhecido`) ; break;
  }