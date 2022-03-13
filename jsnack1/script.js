//debug
console.log("JS OK!")

/*
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
   chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitati = ["davide", "giulia", "paolo", "marta"];
//chiedo all'utente di inserire un nome
const nomeUtente = prompt('inserisci il tuo nome');

let seiNellaLista = false;

//determino le condizioni di uscita del ciclo
for (let i = 0; i < invitati.length; i++) {
    if (nomeUtente === invitati[i]) {
        seiNellaLista = true;
    }
}

//determino se il nome inserito è sulla lista o no
if (seiNellaLista === true) {
    console.log('Sei nella lista')
} else {
    console.log('Non sei nella lista')
}