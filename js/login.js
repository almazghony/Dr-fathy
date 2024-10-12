document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side authentication (insecure for production)
    if (username === 'admin' && password === 'adminpassword') {
        // Redirect to the admin page upon successful login
        window.location.href = 'admin/admin.html';
    } else {
        // Show error message if the credentials are wrong
        document.getElementById('loginError').style.display = 'block';
    }
});
