
document.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = 'Aptech';
    const storedHashedPassword = '617074656368313233'; 

    if (username === storedUsername && password === 'aptech123') {
        alert('Login successful');
        window.location.href = 'dashboard.html'
        
        const loginButton = document.querySelector('button[type="submit"]');
        loginButton.insertAdjacentHTML('afterend', '<p class="text-success">Login successful</p>');
    } else {
        alert('Incorrect credentials');
    }
});
