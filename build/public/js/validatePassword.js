const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');
const validationMessage = document.getElementById('password-validation-message');
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

const validatePassword = (password) => {
    console.log(regex.test(password));

    if (!password) {
        return 'Password can not be empty';
    } else if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    } else if (!regex.test(password)) {
        return 'Password must include uppercase, lowercase, number and at least one symbol';
    } else {
        return null; // No validation errors
    }
};

passwordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const validationResult = validatePassword(passwordInput.value);

    if (validationResult) {
        displayError(validationResult);
    } else {
        passwordForm.submit();
    }
});

const displayError = (validationResult) => {
    validationMessage.textContent = validationResult;
    validationMessage.classList.add('error');
    setTimeout(() => {
        validationMessage.classList.remove('error');
    }, 3000);
};
