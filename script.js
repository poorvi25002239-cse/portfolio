// Function to validate an email format
function isValidEmail(email) {
    // Simple regex for email validation (can be more complex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate a password (minimum 8 characters)
function isValidPassword(password) {
    return password.length >= 8;
}

// Function to clear all error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// --- Sign-Up Form Validation ---
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form submission initially
        clearErrors(); // Clear previous errors

        const emailInput = document.getElementById('signup-email');
        const passwordInput = document.getElementById('signup-password');
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let isValid = true;

        if (!isValidEmail(email)) {
            document.getElementById('signup-email-error').textContent = 'Please enter a valid email format.';
            isValid = false;
        }

        if (!isValidPassword(password)) {
            document.getElementById('signup-password-error').textContent = 'Password must be at least 8 characters.';
            isValid = false;
        }

        if (isValid) {
            // If valid, you would normally send data to a server here.
            alert('Sign Up Successful! (Form prevented submission and passed JS validation)');
            // Optionally: signupForm.submit(); // To submit the form
        }
    });
}

// --- Login Form Validation ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form submission initially
        clearErrors(); // Clear previous errors

        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let isValid = true;

        if (!isValidEmail(email)) {
            document.getElementById('login-email-error').textContent = 'Please enter a valid email format.';
            isValid = false;
        }

        if (!password) {
            document.getElementById('login-password-error').textContent = 'Password cannot be empty.';
            isValid = false;
        } 
        // Note: Login typically doesn't check password length for security reasons, 
        // but we'll include a simple check to fulfill a validation requirement.
        else if (password.length < 8) {
             document.getElementById('login-password-error').textContent = 'Password seems too short.';
             isValid = false;
        }


        if (isValid) {
            // If valid, you would normally check credentials against a database here.
            alert('Login Successful! (Form prevented submission and passed JS validation)');
            // Optionally: loginForm.submit(); // To submit the form
        }
    });
}

// --- General Contact Form Example ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Simple client-side check for demonstration
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && isValidEmail(email) && message) {
            alert('Thank you for your message! (General contact form passed validation and was submitted)');
            contactForm.reset();
        } else {
            alert('Please fill out all contact fields correctly.');
        }
    });
}