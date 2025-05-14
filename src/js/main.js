// Main JavaScript functionality for the Business Blog

// Function to handle navigation menu toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Function to load dynamic content (example for blog articles)
function loadContent(page) {
    fetch(`src/pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);

    // Load default content (e.g., home page or latest blog)
    loadContent('blog');
});