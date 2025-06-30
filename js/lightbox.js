document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const projectViewBtns = document.querySelectorAll('.project-view-btn');
    
    // Ouvrir la lightbox
    projectViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.project-card');
            const imgSrc = projectCard.querySelector('img').src;
            const title = projectCard.querySelector('h3').textContent;
            
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = title;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer la lightbox
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Fermer en cliquant à l'extérieur
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});