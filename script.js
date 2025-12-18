
const passwordField = document.getElementById('passwordField');
const toggleButton = document.getElementById('togglePassword');
const eyeIcon = toggleButton.querySelector('i');
const emailInput = document.getElementById('emailInput');
const validIcon = document.getElementById('validIcon');
const invalidIcon = document.getElementById('invalidIcon');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const sbmtBtn = document.getElementById('sbmtBtn');

function togglePasswordVisibility() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

toggleButton.addEventListener('click', togglePasswordVisibility);

function checkEmail() {
    const email = emailInput.value.trim();
    const hasAt = email.includes('@');
    const hasDot = email.includes('.');
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    if (hasAt && hasDot && atPosition < dotPosition && email.length > 5) {
        showGoodEmail();
    } else {
        showBadEmail();
    }
}
function showGoodEmail() {
    validIcon.style.display = 'inline';
    invalidIcon.style.display = 'none';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    sbmtBtn.disabled = false;
    emailInput.style.borderColor = 'green';
}
function showBadEmail() {
    validIcon.style.display = 'none';
    invalidIcon.style.display = 'inline';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    sbmtBtn.disabled = true;
    emailInput.style.borderColor = 'red';
}
emailInput.addEventListener('input', checkEmail);
emailInput.addEventListener('blur', checkEmail);
sbmtBtn.addEventListener('click', function() {
    alert('Email submitted: ' + emailInput.value);
    emailInput.value = ''; // Clear input
    validIcon.style.display = 'none';
    invalidIcon.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    sbmtBtn.disabled = true;
    emailInput.style.borderColor = '';
});