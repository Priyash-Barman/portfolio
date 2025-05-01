// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active nav link while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Show back-to-top button when scrolling
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Initialize tooltips
const techIcons = document.querySelectorAll('.tech-icon[data-tooltip]');

techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        const tooltip = icon.querySelector('::after');
        if (tooltip) {
            tooltip.style.opacity = '1';
        }
    });
    
    icon.addEventListener('mouseleave', () => {
        const tooltip = icon.querySelector('::after');
        if (tooltip) {
            tooltip.style.opacity = '0';
        }
    });
});