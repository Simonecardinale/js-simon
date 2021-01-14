
    // definisco l'array e inserisco 5 valori casuali senza ripetizioni

    var array = [];
    var arrayUtente = [];
    var arrayRisultato =[];
    
    var j = 0
    
    while (j < 5) {
        var numeri_array = Math.floor(Math.random()*(100 - 1 + 1) + 1);
        if (array.includes(numeri_array) == false){
            array.push(numeri_array);
        } else {
            var numeri_array = Math.floor(Math.random()*(100 - 1 + 1) + 1);
        }
        j++;
    };
    
    console.log(array);

// inserisco l'alert e definisco l'inserimento nel secondo array


alert(array);
var promptClock = setTimeout(function(){
    for (i = 0; i < 5; i++){
        var utente = parseInt(prompt("Inserisci un numero"));
        arrayUtente.push(utente);

        // descrivo le condizioni di vittoria

        if (array.includes(arrayUtente[i]) && arrayUtente[i]!= arrayUtente[i - 1]) {
            arrayRisultato.push(arrayUtente[i]);
        }
    }
    console.log(arrayRisultato);
}, 3000);









