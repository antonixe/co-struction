// Custom Cursor Movement
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Before/After Image Slider
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const beforeAfter = slider.parentElement.querySelector('.before-after img:nth-child(2)');
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        beforeAfter.style.clip = `rect(0, ${value}%, auto, 0)`;
    });
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.side-nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Custom Cursor Hover Effects
const interactiveElements = document.querySelectorAll('a, button, .service-card');

interactiveElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = '#007BFF';
    });

    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// Contact Form Submission (Basic Example)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement form submission logic here (e.g., AJAX request)
    alert('Thank you for contacting us!');
    contactForm.reset();
});
