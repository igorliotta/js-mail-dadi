// # Mail

// - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  

//   - Creare un array che contenga una serie di email.
//   - Chiedere all'utente di inserire la sua email.
//       - Dichiarare una variabile e tramite la funzione prompt dare la possibilità all'utente di scrivere l'email.
//   - Controllare l'email inserita dall'utente e:
//      - SE l'email inserita dall'utente appartiene all'array:
//          - Stampare che l'email sarà valida.
//      - ALTRIMENTI SE l'email inserita dall'utente NON appartiene all'array:
//          - Stampare che l'email non sarà valida.

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





console.log('Email - Dadi')

const emailsArray = ['igorliotta@icloud.com', 'jeffrey.dammer@virgilio.it', 'dilettaleotta@gmail.com', 'alessandro.delpiero@gmail.com', 'papafrancesco@icolud.com'];
console.log(emailsArray);

emailsArray[0] = 'igorliotta@icloud.com';
emailsArray[1] = 'jeffrey.dammer@virgilio.it';
emailsArray[2] = 'dilettaleotta@gmail.com';
emailsArray[3] = 'alessandro.delpiero@gmail.com';
emailsArray[4] = 'papafrancesco@icolud.com';
 

const userEmail = prompt("Scrivi qui la tua email");
let ismailFoud = false;

btnDOMElement = document.getElementById('btn');
console.log(btnDOMElement);

 for (i = 0; i < emailsArray.length; i++) {
        if (userEmail === emailsArray[0] || userEmail === emailsArray[1] || userEmail === emailsArray[2] || userEmail === emailsArray[3] || userEmail === emailsArray[4]) {
                ismailFoud = true;
                console.log('Accesso consentito');
        } else if (userEmail !== emailsArray[0] || userEmail !== emailsArray[1] || userEmail !== emailsArray[2] || userEmail !== emailsArray[3] || userEmail !== emailsArray[4]) {
                ismailFound = false;
                console.log('Accesso negato');
        }
 }
 
 if (ismailFoud === true ) {
        btnDOMElement.addEventListener("click", function () {
                // console.log('funziona'); 
            
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
 } 

