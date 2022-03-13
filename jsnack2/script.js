//debug
console.log("JS OK!")

/*
   Crea un array vuoto. 
   Chiedi per 6 volte all’utente di inserire un numero,
   se è dispari inseriscilo nell’array.
*/

//creazione array vuota
const numeriDispari = [];

//imposto la condizione tale che i numeri dispari inseriti
//dall'utente vengano inseriti nell'array
for (let i = 0; i < 6; i++) {
    //creazione variabile per i numeri inseriti dall'utente
    let number;
    //imposto la condizione di while se il valore inserito non è un numero
    while (isNaN(number)) {
        number = parseInt(prompt(`${i + 1} - inserisci un numero`));
    }
    if (number % 2 != 0) {
        numeriDispari.push(number);
    }
}

//stampo i numeri nell'array
console.log("I numeri dispari inseriti sono: ", numeriDispari);

