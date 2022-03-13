//debug
console.log("JS OK!")

/*
   Chiedi un numero di 4 cifre all’utente e calcola
   la somma di tutte le cifre che compongono il numero.
*/
//creazione variabile per il numero inserito dall'utente
let numeroUtente;

//imposto la condizione di while se il valore inserito non è un numero o non ha 4 cifre
while (isNaN(parseInt(numeroUtente)) || numeroUtente.length !== 4) {
    numeroUtente = (prompt('inserisci un numero di 4 cifre'));
}
//effettuo la somma delle cifre del numero inserito dall'utente
let sommaCifre = 0;
for (let i = 0; i < numeroUtente.length; i++) {
    const cifra = numeroUtente[i];
    sommaCifre += parseInt(cifra);
}
console.log(`la somma delle cifre del numero ${numeroUtente} è: ${sommaCifre}`);