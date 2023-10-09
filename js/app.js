console.log('Ciao amici')

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

 if (userEmail === emailsArray[0] || userEmail === emailsArray[1] || userEmail === emailsArray[2] || userEmail === emailsArray[3] || userEmail === emailsArray[4]) {
        console.log(messageValid);
} else if (userEmail !== emailsArray[0] || userEmail !== emailsArray[1] || userEmail !== emailsArray[2] || userEmail !== emailsArray[3] || userEmail !== emailsArray[4]) {
        console.log(messageInvalid);
}


