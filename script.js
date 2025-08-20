document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .btn-secondary');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash and is not just '#'
            if (this.hash !== "" && this.hash !== "#") {
                e.preventDefault();

                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Fade-in animation on scroll
    const sections = document.querySelectorAll('section, header');

    const appearOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Add fade-in class to child elements that need it
                entry.target.querySelectorAll('h1, h2, h3, p, .btn-primary, .btn-secondary, .service-card, .work-item, .skills-container span, .hero-image, .about-image').forEach((el, index) => {
                    el.classList.add('fade-in');
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100); // Stagger the animation slightly
                });
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    sections.forEach(section => {
        appearOnScroll.observe(section);
    });

});