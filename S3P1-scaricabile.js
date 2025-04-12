/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let numero1 = parseFloat(prompt("Inserire il primo numero da sommare"))
let numero2 = parseFloat(prompt("Inserire il secondo numero da sommare"))
function crazySum(num1, num2) {
    return num1 + num2
}
let risultato = crazySum(numero1, numero2)
console.log(risultato)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let numero = parseInt(prompt("Inserire un numero a piacere"))
function boundary(num) {
    return (num > 20 && num <= 100) || (num === 400)
}
console.log(boundary(numero))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let parola = ""
parola = prompt("Digitare una parola a piacere")
function reverseString(stringaDaInvertire=""){
    let stringaInvertita
    stringaInvertita = stringaDaInvertire.split("").reverse().join("")
    return stringaInvertita
}
console.log(reverseString(parola))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst() {
    let stringaDaElaborare = prompt("Inserire una stringa")
    let arrayParoleStringa = stringaDaElaborare.split(" ")
    let stringaElaborata = ""
    for (let parola of arrayParoleStringa) {
        let parolaDaElaborare = parola.split("")
        parolaDaElaborare[0] = parolaDaElaborare[0].toUpperCase()
        let parolaElaborata = parolaDaElaborare.join("")
        stringaElaborata += parolaElaborata + " "
    }
    return stringaElaborata
}
console.log(upperFirst())

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

//DA RIVEDERE. DEVO FARE IN MODO CHE NELL'ARRAY CHE FACCIO TORNARE INDIETRO, CI SIANO TUTTI I NUMERI RANDOM
function giveMeRandom(n) {
    for (let i = 0; i <= n; i++) {
        let numeroRandom = Math.floor(Math.random() * 11)
        let numeriRandom = []
        numeriRandom.push(numeroRandom)
        if (i == n) {
            return numeriRandom
        }
    }
    
}
console.log(giveMeRandom(20))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
