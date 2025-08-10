
        // Navigation mobile
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fermer le menu mobile lors du clic sur un lien
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Gestion des slides
        function showSlide(slideId, cardElement) {
            // Masquer toutes les slides
            const slides = document.querySelectorAll('.slide');
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Retirer la classe active de toutes les cartes
            const cards = document.querySelectorAll('.nav-card');
            cards.forEach(card => card.classList.remove('active'));
            
            // Afficher la slide sélectionnée
            document.getElementById(slideId).classList.add('active');
            
            // Ajouter la classe active à la carte cliquée
            cardElement.classList.add('active');
        }

        // Audio (placeholder function)
        function toggleAudio() {
            const audioBtn = document.querySelector('.audio-btn i');
            const Audio = document.getElementById('music')
            if (audioBtn.classList.contains('fa-music')) {
                audioBtn.classList.remove('fa-music');
                audioBtn.classList.add('fa-pause');
                Audio.play()
            } else {
                audioBtn.classList.remove('fa-pause');
                audioBtn.classList.add('fa-music');
                Audio.Pause()
            }
        }

        // Smooth scroll pour les liens de navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
