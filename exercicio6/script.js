/* 6. Insira no html 30 ( trinta ) números ímpares. */
let odds = 0
for (let ni= 1; odds<30 ; ni++) {
    if (ni % 2 === 1) {
        document.write(`${ni}, `)
        odds+=1
    }
}
