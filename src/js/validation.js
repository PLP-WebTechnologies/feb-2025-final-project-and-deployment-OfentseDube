// validation.js

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Clear previous error messages
    clearErrors();

    if (name === "") {
        showError('name', 'Name is required');
        valid = false;
    }

    if (email === "") {
        showError('email', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Invalid email format');
        valid = false;
    }

    if (message === "") {
        showError('message', 'Message is required');
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
        element.style.display = 'none';
    });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});