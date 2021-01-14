
    // definisco l'array e inserisco 5 valori casuali senza ripetizioni

    var array = [];
    var arrayUtente = [];
    var arrayRisultato =[];
    var arrayErrati = [];
    var j = 0;
    
    while (j < 5) {
        var numeri_array = Math.floor(Math.random()*(100 - 1 + 1) + 1);
        if (array.includes(numeri_array) == false){
            array.push(numeri_array);
        } else {
            j--;
            var numeri_array = Math.floor(Math.random()*(100 - 1 + 1) + 1);
        }
        j++;
    };
    
    console.log(array);

// inserisco l'alert e definisco l'inserimento nel secondo array


alert(array);
var promptClock = setTimeout(function(){
    var i = 0;
    while ( i < 5){
        var utente = parseInt(prompt("Inserisci un numero tra 1  e 100"));
        if((utente <= 100 && utente >= 1) && (arrayUtente.includes(utente) == false)) {
            arrayUtente.push(utente);
        } else {
            alert("Intervallo errato!!");
            i--;
            utente;
        }
        i++;
    }

    // descrivo le condizioni di vittoria

    console.log(arrayUtente);
    for (k = 0; k < arrayUtente.length; k++) {
        if (array.includes(arrayUtente[k]) == true) {
            arrayRisultato.push(arrayUtente[k]);
        } else {
            arrayErrati.push(arrayUtente[k]);
        }
    }
    console.log(arrayRisultato);
    console.log(arrayErrati);
}, 3000);









