document.addEventListener('DOMContentLoaded', () => {
    // See More dropdowns (only runs if there are any)
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isExpanded = details.style.display === 'block';
            details.style.display = isExpanded ? 'none' : 'block';
            button.textContent = isExpanded ? 'See more' : 'See less';
        });
    });

    // Dark mode toggle (works on all pages)
    const toggleButton = document.getElementById('theme-toggle');

    // Check saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleButton.textContent = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const darkModeEnabled = document.body.classList.contains('dark');

        toggleButton.textContent = darkModeEnabled ? '☀️' : '🌙';
        localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
    });
});
