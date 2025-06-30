document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de confirmation
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
            submitBtn.style.backgroundColor = '#d99a87';
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
                submitBtn.innerHTML = 'Envoyer le message';
                submitBtn.style.backgroundColor = '';
                this.reset();
                
                // Animation de succès
                const success = document.createElement('div');
                success.className = 'success-message';
                success.innerHTML = '<i class="fas fa-check-circle"></i> Votre message a été envoyé avec succès !';
                document.body.appendChild(success);
                
                setTimeout(() => {
                    success.remove();
                }, 3000);
            }, 3000);
        });
    }
});