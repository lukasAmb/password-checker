document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    if (checkPasswordStrength(password)) {
        result.textContent = 'Strong Password!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Weak Password!';
        result.style.color = 'red';
    }
});

function checkPasswordStrength(password) {
    // Simple password strength checker (you can improve this)
    const minLength = 8;
    const hasNumbers = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/;

    return password.length >= minLength &&
           hasNumbers.test(password) &&
           hasUpperCase.test(password) &&
           hasLowerCase.test(password) &&
           hasSpecialChars.test(password);
}
