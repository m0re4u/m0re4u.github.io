// JavaScript for handling BibTeX toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all BibTeX links
    document.querySelectorAll('.bibtex-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the associated BibTeX container (next sibling)
            const bibtexContainer = this.parentNode.nextElementSibling;
            
            // Toggle visibility
            if (bibtexContainer.style.display === 'block') {
                bibtexContainer.style.display = 'none';
                this.textContent = 'BibTeX';
            } else {
                bibtexContainer.style.display = 'block';
                this.textContent = 'Hide BibTeX';
            }
        });
    });
});
