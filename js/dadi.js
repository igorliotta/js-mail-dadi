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

