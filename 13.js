// definisci un array con i nomi delle tue morose dalla prima
// all'attuale

let morose = ['Silvia'];

// conta quante ne hai avute
let numeroMorose = morose.length;

// scrivilo nella console
console.log("Io ho avuto " + numeroMorose + " morose, e ne vado fiero!");

// scrivfi l'elenco delle ragazze, scrivendo per ognuna anche il numero,
// ad esempio;
// 1. Barbara
// 2. Luana
// 3...


for(let i=0; i < morose.length; i++) {
    numero = i + 1;
    console.log(numero + "." + morose[i]);
}
