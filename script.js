function openEnvelope() {
    // Hide envelope screen
    document.getElementById("envelope-screen").classList.add("hidden");
  
    // Show card
    document.getElementById("card-container").classList.remove("hidden");
  
    // Play music
    const music = document.getElementById("bg-music");
    music.play().catch(err => console.log("Autoplay blocked:", err));
  }