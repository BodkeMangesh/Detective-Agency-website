// Fade-in and Slide-up Animation on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

function handleScroll() {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// FAQ Accordion Smooth Open/Close
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('open');
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Button Ripple Effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
        ripple.style.left = e.clientX - rect.left - rect.width / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - rect.height / 2 + 'px';
        ripple.className = 'ripple';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});