
// données récupérées sur HTML //
const connectionButton = document.querySelector(".buttons__connection")
const subscribeButton = document.querySelector(".buttons__subscribe")
const connectionForm = document.querySelector(".login")
const subscribeForm = document.querySelector(".subscribe")
const subscribeSubmit = document.querySelector(".subscribe__submit")
const loginSubmit = document.querySelector(".login__submit")

// passage entre interface connection et inscription //
subscribeButton.addEventListener('click', showSubscribe);
connectionButton.addEventListener('click', showConnection);

function showSubscribe(){
    connectionForm.className = "login hidden"
    subscribeForm.className = "subscribe"
}

function showConnection(){
    subscribeForm.className = "subscribe hidden"
    connectionForm.className = "login"
}

// à compléter en fonction de la suite de l'application //
subscribeSubmit.addEventListener('click', getInformations)
loginSubmit.addEventListener('click', getInformations)

function getInformations(e){
    e.preventDefault()

}


// contrôle du mot de passe //
const passwordControl = document.querySelectorAll("#password")
console.log(passwordControl)

for (let i = 0; i < passwordControl.length; i++) {
  passwordControl[i].addEventListener("change", function () {
    passCheck(passwordControl[i]);
  });
}

function passCheck(pass){
    let msg;
    let valid = false;
    let small = pass.nextElementSibling;
    
    console.log(small)

    if(pass.value.length < 3){
        msg = "Le mot de passe doit contenir au moins 3 caractères";
        small.textContent = msg;
    }
    else if (!/[A-Z]/.test(pass.value)) {
        msg = "Le mot de passe doit avoir une majuscule";
        small.textContent = msg;
    }
    else{
        msg = "Mot de passe valide"
        small.textContent = msg
        valid = true;
    }
    console.log(valid)
}

// contrôle de l'email //

const mailControl = document.querySelectorAll("#mail")
console.log(mailControl)

for (let i = 0; i < mailControl.length; i++) {
  mailControl[i].addEventListener("change", function () {
    mailCheck(mailControl[i]);
  });
}

function mailCheck(mail){
    let msg;
    let valid = false;
    let small = mail.nextElementSibling;
    let emailrgx = new RegExp('^[a-zA-Z0-9\-._]+[@]{1}[a-zA-Z0-9\-._]+[.]{1}[a-z]{2,10}$', 'g');

    if(!emailrgx.test(mail.value)){
        msg = "Adresse e-mail invalide";
        small.textContent = msg;
    }
    else{
        msg = "Adresse e-mail valide"
        small.textContent = msg
        valid = true;
    }
}


