//debug
console.log("JS OK!")

//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

//creazione array vuota
const validNumbers = [];

//creazione variabile per i numeri inseriti dall'utente
let number;


//imposto la condizione tale che i numeri dispari inseriti
//dall'utente vengano inseriti nell'array
for (let i = 0; i < 6; i++) {
    number = parseInt(prompt("inserisci un numero"));
    if (number % 2 != 0) {
        validNumbers.push(number);
    }
}

//stampo i numeri nell'array
console.log("I numeri dispari sono: ", validNumbers)