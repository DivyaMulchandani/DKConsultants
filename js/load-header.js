// Function to load header.html into the placeholder
function loadHeader() {
    fetch('/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Initialize all header functionalities after loading
            initializeHamburgerSlidingMenu();
            initializeDropdowns();
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Initialize hamburger functionality with sliding effect
function initializeHamburgerSlidingMenu() {
    const hamburger = document.querySelector('.hamburger'); // Hamburger element
    const slidingMenu = document.querySelector('.sliding-menu'); // Sliding menu element

    if (hamburger && slidingMenu) {
        hamburger.addEventListener('click', () => {
            slidingMenu.classList.toggle('active'); // Toggles the 'active' class for sliding effect
            hamburger.classList.toggle('is-active'); // Optional: Add class for hamburger animation
        });
    }
}

// Initialize dropdown functionality
function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown'); // All dropdown elements

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        if (dropbtn && dropdownContent) {
            // Toggle dropdown content visibility on hover
            dropbtn.addEventListener('click', () => {
                dropdownContent.classList.toggle('active');
            });

            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    dropdownContent.classList.remove('active');
                }
            });
        }
    });
}

// Call the function to load the header
loadHeader();
