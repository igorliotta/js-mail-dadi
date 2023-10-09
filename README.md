# Mail

- Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.  

  - Creare un array che contenga una serie di email.
  - Chiedere all'utente di inserire la sua email.
      - Dichiarare una variabile e tramite la funzione prompt dare la possibilità all'utente di scrivere l'email.
  - Controllare l'email inserita dall'utente e:
     - SE l'email inserita dall'utente appartiene all'array:
         - Stampare che l'email sarà valida.
     - ALTRIMENTI SE l'email inserita dall'utente NON appartiene all'array:
         - Stampare che l'email non sarà valida.

# Gioco dei dadi

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
   - Tramite la funzione math random generare un numero random per l'utente (magari all'interno di un eventListner(?)).
   - Tramite la funzione math random generare un secondo numero random per il computer (magari all'interno di un eventListner(?)).

- Stabilire il vincitore, in base a chi fa il punteggio più alto.
   - Stabilire quali tra i due numeri e più alto.
      - SE il numero utente = numero computer:
         - Pareggio.
      - ALTRIMENTI SE il numero utente è > di numero computer:
         - L'utente vince.
      - ALTRIMENTI SE il numero utente è < di numero computer:
         - Il computer vince.