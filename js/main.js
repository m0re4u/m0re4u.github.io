// Main JavaScript file for Michiel van der Meer's personal website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Highlight the current page in the navigation
    highlightCurrentPage();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
});

// Function to highlight the current page in the navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Loop through each link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // If this is the current page or if we're on index.html and the link is to the home page
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
            // Add active class styling
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
            // Make the underline visible for the active page
            link.style.setProperty('--underline-width', '100%');
        }
    });
}

// Function to add smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add a simple animation for the profile image on hover
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}
