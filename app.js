document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-loaded');
    
    const fadeInElements = document.querySelectorAll('.js-fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        document.documentElement.classList.add('prefers-reduced-motion');
    }
});