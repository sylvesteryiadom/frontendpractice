// Dom Selectors
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        showSmallText('firstName', `First Name is required`);
    } else {
        removeError('firstName');
    }
    if (lastName === '') {
        showSmallText('lastName', `Last Name is required`);
    } else {
        removeError('lastName')
    }

    if (email === '') {
        showSmallText('email', `Email is required`);
    } else if ((!isValid(email))) {
        showSmallText('email', `Email is not valid`);
    } else {
        removeError('email')
    }
    if (password === '') {
        showSmallText('password', `Password is required`);
    } else {
        removeError('password')
    }
})

function showSmallText(name, message) {
    const formControl = form[name].parentNode;
    formControl.classList.add('error')
    formControl.childNodes[3].style.display = 'block';
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.style.opacity = 1;
}

function removeError(name) {
    const formControl = form[name].parentNode;
    formControl.classList.remove('error');
    formControl.childNodes[3].style.display = 'none';
    const small = formControl.querySelector('small');
    small.style.opacity = 0;
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}