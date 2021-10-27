/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//creare un array di numeri
const numbersArray = []
const userNumbersArray = []
const guessUserNumbers = []
//creare una funzione che aggiunge cinque numeri casuali nell array

numberPushAndRandom(numbersArray)
console.log(numbersArray)
//un alert mostra i numeri
alert(numbersArray)
//dopo 30 secondi
setTimeout(function () {
    insertNumber(userNumbersArray);

    console.log(userNumbersArray);

    compareArrayPush(numbersArray, userNumbersArray, guessUserNumbers);

    alert("hai idovinato " + guessUserNumbers.length + " numeri! " +
        " i numeri sono i seguenti: " + guessUserNumbers)
}, 30000);

//inserire nella DOM quali numeri sono uguali e quali no


//funzioni

//funzione per inserire 5 numeri casuali in un array
function numberPushAndRandom(array) {
    while (array.length < 5) {
        let number = Math.floor(Math.random() * 100);
        if (!array.includes(number)) {

            array.push(number)
        }
    }
}

//funzione per inserire i numeri dell utente tramite prompt nell userArray
function insertNumber(array) {
    while (array.length < 5) {
        let userNumber = parseInt(prompt("inserisci qui il numero"))
        array.push(userNumber)
    }
}

//funzione per confrontare i numeri di due array e pushare gli inclusi in un terzo array
function compareArrayPush(array1, array2, array3) {
    for (i = 0; i <= 5; i++) {
        if (array1.includes(array2[i])) {
            array3.push(array2[i])
        }
    }
    console.log(array3)
}