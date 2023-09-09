// Get DOM elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = usernameInput.value.trim();

    if (username !== '') {
        // Store the username in localStorage
        localStorage.setItem('username', username);

        // Redirect to index.html
        window.location.href = 'index.html';
    }
});
