//document.writeln('hello world!')

//# Calcolo del prezzo del biglietto del treno
//## Chiedo all'utente quanti chilometri deve percorrere
    //- dichiaro variabile km da percorrere assegnandogli valore restituito da prompt
    //- converto valore restituito in valore numerico
const nKm = parseFloat(prompt('Quanti km devi percorrere ?'))
console.log(nKm)
const printedKm = document.getElementById('chilometri')
printedKm.innerHTML = nKm
    //## Chiedo all'utente qual'è la sua età
        //- dichiaro variabile età utente assegnandogli valore restituito da prompt
        //- converto valore restituito in valore numerico
const userAge = parseInt(prompt('Quanti anni hai ?'))
console.log(userAge)
const printedAge = document.getElementById('età')
printedAge.innerHTML = userAge
    // in questa variante dichiaro una variabile nella quale salvo il valore per km
const priceKm = 0.21
    //## Calcolo il prezzo base del biglietto (nKm * priceKm)
        //- dichiaro variabile costo di base che assume valore (variabile km * costo/km)
const basePrice = nKm * priceKm
console.log(basePrice)
    // in questa variante dichiaro anche una variabile per il valore dello sconto
let discountValue
if (userAge < 18) {
    discountValue = (basePrice * 20) / 100
    console.log(discountValue)
} else if (userAge > 65) {
    discountValue = (basePrice * 40) / 100
    console.log(discountValue)
} else {
    discountValue = 0
}
    //## Calcolo lo sconto da applicare in base dell'utente e lo applico al prezzo di base
        //- dichiaro variabile per il costo finale
let finalPrice
        //- SE l'età è inferiore a 18 applico sconto del 20%
            //- costo finale = costo base - (costo base * 20 / 100)
        //- ALTRIMENTI SE è superiore a 65 applico sconto del 40%
            //- costo finale = costo base - (costo base * 40 / 100)
        //- ALTRIMENTI non si applica nessuno sconto
            //- costo finale = costo base
if (userAge < 18) {
    finalPrice = basePrice - discountValue
    console.log(finalPrice)
 } else if (userAge > 65) {
    finalPrice = basePrice - discountValue
    console.log(finalPrice)
 } else {
    finalPrice = basePrice
    console.log(finalPrice)
 }
    //## Stampo a schermo il prezzo finale del biglietto
        //- richiamo elemento DOM con id = prezzo scontato
        //- modifico l' innerHTML dell'elemento con il valore della variabile " costo finale "
const printedFinalPrice = document.getElementById('prezzo-finale')
printedFinalPrice.innerHTML = finalPrice.toFixed(2)