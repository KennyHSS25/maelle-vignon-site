document.addEventListener('DOMContentLoaded', function() {
    // Typed.js pour l'animation du texte
    if (document.getElementById('typedText')) {
        const typed = new Typed('#typedText', {
            strings: ["Révéler le potentiel de chaque territoire par l’humain et l’écoute"],
            typeSpeed: 50,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false
        });
    }
    
    // Animation du scroll down
    if (document.getElementById('scrollDown')) {
        document.getElementById('scrollDown').addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Animation des éléments au scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
});