const email = document.getElementById('email');
const form = document.querySelector('#form');
// const errorText = document.getElementById('errorText');
// const errorIcon = document.querySelector('.error-icon');



checkEmail = (e) => {
    e.preventDefault();
    const userInput = email.value;

    if (validateEmail(userInput)) {
        form.classList.remove('error');
    } else {
        form.classList.add('error');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);