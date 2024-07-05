'use strict';

const form = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if (emailValue === '' || passwordValue === '') {
        return alert ('All form fields must be filled in');
    };

    const formData = {
        email: emailValue,
        password: passwordValue
    };

      console.log('formData', formData);

      form.reset();

});


