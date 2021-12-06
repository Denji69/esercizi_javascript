// definisco due array con ragazzi e ragazze;

let ragazzi = ['Antonino', 'FiusGamer' , 'Ciro'];
let ragazze = ['Mestre', 'Pavan' , 'Uliana'];

// definisco un array persone vuoto
let persone = [];

// inserisco nell'array persone l'array dei ragazzi
persone.push(ragazzi);

// ottengo un array dentro l'array (parentesi quadre doppie)
console.log(persone);
 
// inserisco nell'array persone l'array delle ragazze
persone.push(ragazze);

// ottengo due array dentro l'array
console.log(persone);

// questo è un array multidimensionale:
// per leggere ad esempio il nome della seconda ragazza scrivo
console.log(persone[0][2]);

// il primo numero indica quale sottoarray prendere
// il secondo numero indica quale elemento del sottoarray voglio
// (ricorda che gli indici degli array partono da zero)

// esercizio: prova a far scrivere il nome di Ciro