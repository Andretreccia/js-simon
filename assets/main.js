/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//creare un array di numeri
const numbersArray = []
//creare una funzione che aggiunge cinque numeri casuali nell array

numberPushAndRandom(numbersArray)
console.log(numbersArray)
//selezionare il bottnne nella DOM
//al click i numeri vengono visualizzati con un alert
//dopo 30 secondi
//innerHTML vuoto per cancellare i numeri
//5 prompt per inserire i numeri
//condizioni per confrontare i numeri inseriti
//inserire nella DOM quali numeri sono uguali e quali no


//funzioni
function numberPushAndRandom(array) {
    while (array.length < 5) {
        let number = Math.floor(Math.random() * 100);
        array.push(number)
    }

}