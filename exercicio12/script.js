/* 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&). */

const bloodDonationAge = Number(prompt(`12. Digite sua idade: `))
if (bloodDonationAge >= 18 && bloodDonationAge <= 67) {
    document.write(`12. Em sua idade de ${bloodDonationAge} anos, você pode doar sangue! <br><br>`)
} else {
    document.write(`12. Em sua idade de ${bloodDonationAge} anos, você não pode doar sangue. <br><br>`)
}