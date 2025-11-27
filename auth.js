// This file contains JavaScript functions to handle form submissions, redirections, and any necessary client-side validation for the login and signup processes.

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput ? emailInput.value : '';
            if (validateEmail(email)) {
                alert('Login submitted. A secure link will be sent to your email.');
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const userTypeEl = document.getElementById('user-type');
            const emailEl = document.getElementById('signup-email') || document.getElementById('email');
            const passwordEl = document.getElementById('signup-password') || document.getElementById('password');

            const userType = userTypeEl ? userTypeEl.value : '';
            const email = emailEl ? emailEl.value : '';
            const password = passwordEl ? passwordEl.value : '';

            if (validateEmail(email) && password) {
                alert('Signup submitted. We will contact you shortly.');
            } else {
                alert('Please fill in all fields correctly.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
