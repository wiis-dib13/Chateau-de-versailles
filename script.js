let audioPlaying = false;

// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".bu");
  const slides = document.querySelectorAll(".slide");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Récupère l'id de la div cible
      const targetId = button.getAttribute("data-target");

      // Cache toutes les slides
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      // Affiche seulement la slide ciblée
      const targetSlide = document.getElementById(targetId);
      if (targetSlide) {
        targetSlide.classList.add("active");
        // Scroll jusqu'à la section si tu veux :
        targetSlide.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


  function toggleAudio() {
            const audio = document.getElementById('music');
            const audioBtn = document.getElementById('audioBtn');
            
            if (audioPlaying) {
                audio.pause();
                audioPlaying = false;
            } else {
              audio.play();
        audioBtn.textContent = '🔇'; 
        audioPlaying = true;
            }
        }