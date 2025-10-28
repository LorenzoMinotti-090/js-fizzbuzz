// Raccolta dati

// Stampa i numeri da 1 a 100
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Altrimenti stampo il numero stesso.


//Esecuzione logica

// Voglio stampare i numeri da 1 a 100
// Per ogni numero controllo se non supera 100
// se il numero è multiplo sia di 3 e siadi 5 stampiamo "FizzBuzz"
// Se il numero è multiplo di 3 stampiamo "Fizz"
// Se il numero è multiplo di 5 stampiamo "Buzz"
// Altrimenti stampo il numero



for (let i = 1; i <= 100; i++) {

    let input = prompt("Inserisci un numero da 1 a 100:");

    if (input === null) {
        console.log("Annulla");
        break;
    }


    let numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Inserisci un numero");
        break;
    }
    if (numero > 100) {
        console.log("Il numero non può essere maggiore di 100");
        break;
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
        console.log("Fizz");
    } else if (numero % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }
}