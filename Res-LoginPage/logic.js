document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // If validation passes, show success message
        alert('Login successful for ' + email + '!');
        
        // In a real application, you would authenticate with a server
        console.log('Login attempt with:', {
            email,
            password,
            rememberMe
        });
    });
});