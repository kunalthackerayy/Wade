document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Simple validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // If validation passes, show success message
        alert('Registration successful for ' + username + '!');
        form.reset();
        
    });
});