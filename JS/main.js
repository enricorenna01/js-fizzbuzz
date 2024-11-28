//Inizio un ciclo for con contatore = 1 ed itero fino a quando il valore sarà <= 100

for(let contatore = 1; contatore <= 100; contatore++){

    //se contatore modulo = 3 e 5 stampo FizzBuzz

    if (contatore % 3 === 0 && contatore % 5 === 0) {

        console.log(contatore, "FizzBuzz");

    //altrimenti se contatore modulo = 3 stampo Fizz
    
    } else if (contatore % 3 === 0) {

        console.log(contatore, "Fizz");

    //altrimenti se contatore modulo = 5 stampo Buzz

    } else if (contatore % 5 === 0) {

        console.log(contatore, "Buzz");
    
    //altrimenti stampo contatore

    } else {

        console.log(contatore);
        
    }

}

//Fine ciclo for