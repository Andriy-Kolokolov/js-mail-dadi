let registeredEmailsList = [
    "exampleemail0@gmail.com",
    "exampleemail1@gmail.it",
    "exampleemail2@gmail.de",
    "exampleemail3@gmail.ru",
    "exampleemail4@gmail.fr",
    "exampleemail5@gmail.ch"];

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener("click", function (event) {
    event.preventDefault();
    const inputEmail = document.getElementById('inputEmail').value;

    if (registeredEmailsList.includes(inputEmail)) {
        window.location.href = 'game.html'
    } else {
        new bootstrap.Popover(btnLogin);
    }
});


// // for loop solution
// function emailByLoopCheck() {
//     for (let i = 0; i < registeredEmailsList.length; i++) {
//         if (registeredEmailsList.at(i) === inputEmail) {
//             console.log("EMAIL EXISTS")
//         }
//         else {
//             console.log("EMAIL NOT FOUND")
//         }
//     }
// }

