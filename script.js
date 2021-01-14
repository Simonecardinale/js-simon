// definisco l'array e inserisco 5 valori casuali

var array = [];

for (var i = 0; i < 5 ; i++){
    var numeri_array = Math.floor(Math.random()*(100 - 1 + 1) + 1);
    array.push(numeri_array);
};

// inserisco l'alert



var clockPrompt = setTimeout(promptUtente, 3000);







//funzioni

function promptUtente(){
    for (i = 0; i < 5; i++){
        var utente = parseInt(prompt("Inserisci un numero"));
    }
}
