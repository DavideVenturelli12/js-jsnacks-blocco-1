//debug
console.log("JS OK!")

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitedList = ["giulia", "davide", "marco", "paolo"];

console.log("Nomi sulla lista: ", invitedList)

const userName = (prompt("inserisci il tuo nome")).trim().toLowerCase();

console.log("Nome inserito: ", userName)

let checkName = false;

//controllo i nomi della lista

for (let i = 0; i < invitedList.length; i++) {
    if (userName === invitedList[i]) {
        checkName = true;
    }
}

//determino se il nome inserito è sulla lista o no

if (checkName) {
    console.log("Il tuo nome è sulla lista");
    alert("Sei nella lista degli invitati!")
} else {
    console.log("Il tuo nome non è sulla lista");
    alert("Mi dispice, non sei nella lista degli invitati :(")
}