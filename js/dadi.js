// # Gioco dei dadi

// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//    - Tramite la funzione math random generare un numero random per l'utente (magari all'interno di un eventListner(?)).
//    - Tramite la funzione math random generare un secondo numero random per il computer (magari all'interno di un eventListner(?)).

// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
//    - Stabilire quali tra i due numeri e più alto.
//       - SE il numero utente = numero computer:
//          - Pareggio.
//       - ALTRIMENTI SE il numero utente è > di numero computer:
//          - L'utente vince.
//       - ALTRIMENTI SE il numero utente è < di numero computer:
//          - Il computer vince.


console.log('Gioco dei dadi')

btnDOMElement = document.getElementById('btn');
console.log(btnDOMElement);

btnDOMElement.addEventListener("click", function () {
    console.log('funziona'); 

    const min = 1;
    const max = 6;

    const userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(userNumber, 'USER-NUMBER');

    const pcNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(pcNumber, 'PC-NUMBER');

    let messageTie = 'Pareggio';
    let userWin = 'User hai vinto';
    let pcWin = 'Pc hai vinto';

    if (userNumber === pcNumber) {
        console.log(messageTie);
    } else if (userNumber > pcNumber) {
        console.log(userWin);
    } else if (userNumber < pcNumber) {
        console.log(pcWin);
    }
   
  });

