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





console.log('Email valida o non valida')

const emailsArray = ['igorliotta@icloud.com', 'jeffrey.dammer@virgilio.it', 'dilettaleotta@gmail.com', 'alessandro.delpiero@gmail.com', 'papafrancesco@icolud.com'];
console.log(emailsArray);

emailsArray[0] = 'igorliotta@icloud.com';
emailsArray[1] = 'jeffrey.dammer@virgilio.it';
emailsArray[2] = 'dilettaleotta@gmail.com';
emailsArray[3] = 'alessandro.delpiero@gmail.com';
emailsArray[4] = 'papafrancesco@icolud.com';
 

const userEmail = prompt("Scrivi qui la tua email");
let messageValid = 'La mail inserita è valida';
let messageInvalid = 'La mail inserita non è valida';

 for (i = 0; i < emailsArray.length; i++) {
        if (userEmail === emailsArray[0] || userEmail === emailsArray[1] || userEmail === emailsArray[2] || userEmail === emailsArray[3] || userEmail === emailsArray[4]) {
                console.log(messageValid);
        } else if (userEmail !== emailsArray[0] || userEmail !== emailsArray[1] || userEmail !== emailsArray[2] || userEmail !== emailsArray[3] || userEmail !== emailsArray[4]) {
                console.log(messageInvalid);
        }
 }


