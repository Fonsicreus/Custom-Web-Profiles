document.addEventListener("DOMContentLoaded", () => {
  // Create the overlay
  const overlay = document.createElement("div");
  overlay.classList.add("click-to-enter"); // Add the class 'click-to-enter'

  // Create the text element inside the overlay
  const textElement = document.createElement("p"); // Use a <p> for the text
  textElement.innerHTML = "click to enter";

  // Add a class to the text (e.g., 'click-text')
  textElement.classList.add("click-text");

  // Add the text to the overlay
  overlay.appendChild(textElement);

  // Add the overlay to the page
  document.body.appendChild(overlay);

  // Create the particles container in the overlay
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles-js";
  overlay.appendChild(particlesContainer);

  // particles.js configuration
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800, // Area in which particles are distributed
        },
      },
      color: {
        value: "#ffffff", // White color
      },
      shape: {
        type: "circle", // Shape of the particles
      },
      opacity: {
        value: 0.5, // Opacity of the particles
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 5, // Size of the particles
        random: true,
        anim: {
          enable: true,
          speed: 0,
          size_min: 0.1,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Repulse mode when hovering over particles
        },
      },
    },
  });

  // When the user clicks on the overlay, start the fade, video, and song
  overlay.addEventListener("click", function () {
    const credits = document.querySelector(".credits");
    const video = document.querySelector(".background-video");
    const audio = document.querySelector(".musicplayer");

    //Animations
    overlay.classList.add("fade-out");
    credits.classList.add("fade-to-the-right");

    if (video) video.play();
    if (audio) {
      audio.volume = 0.4; // Set the volume to 0.4, all my friend say it's too loud and they will be deaf
      audio.play();
    }

    // Wait for the fade to finish (0.5 seconds) and then hide the overlay
    setTimeout(function () {
      overlay.style.display = "none";
      credits.style.display = "none";
      changeLine();
    }, 500); // Matches the duration of the transition, in milliseconds
  });

  const usernameElement = document.querySelector(".username");
  if (usernameElement) {
    const usernameParticlesContainer = document.createElement("div");
    usernameParticlesContainer.id = "username-particles-js";
    usernameElement.appendChild(usernameParticlesContainer);

    // particles.js configuration for .username
    particlesJS("username-particles-js", {
      particles: {
        number: {
          value: 100, // Number of particles
          density: {
            enable: true,
            value_area: 200, // Area in which particles are distributed
          },
        },
        color: {
          value: "#ffffff", // White color
        },
        shape: {
          type: "circle", // Shape of the particles
        },
        opacity: {
          value: 1, // Opacity of the particles
          random: true,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.5,
          },
        },
        size: {
          value: 3, // Size of the particles
          random: true,
          anim: {
            enable: true,
            speed: 0,
            size_min: 0.1,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse", // Repulse mode when hovering over particles
          },
        },
      },
    });
  }

  // Text to be displayed in the typewriter
  const textLines = Array.from(document.querySelectorAll(".añadir-texto")).map(
    (element) => element.innerText
  );

  // Variables for the typewriter
  let currentLine = 0;

  function changeLine() {
    const textElement = document.createElement("p");
    textElement.innerHTML = textLines[currentLine];
    textElement.classList.add("typewriter-text");
    const imageAndTextContainer = document.querySelector(".username");
    if (imageAndTextContainer) {
      imageAndTextContainer.appendChild(textElement);
    }

    // Wait 5 seconds before moving to the next line
    setTimeout(function () {
      if (imageAndTextContainer && textElement) {
        // Remove the current text element
        imageAndTextContainer.removeChild(textElement);

        // Increment the current line index
        currentLine = (currentLine + 1) % textLines.length;

        // Call changeLine again to display the next line
        changeLine();
      }
    }, 10000); // 10 seconds to match with animation
  }

  // Custom Volume Slider
  const audio = document.getElementById("background-audio");
  const volumeSlider = document.getElementById("custom-volume-slider-satella");

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });

  audio.addEventListener("volumechange", () => {
    volumeSlider.value = audio.volume * 100;
  });

  // Bio pull-down
  let showBioOrSocial = 1;
  let isTransitioning = false;

  window.clickOnImage = function () {
    if (isTransitioning) return; 

    const socials = document.querySelector(".socials");
    const bio = document.querySelector(".flex-body-bio");
    isTransitioning = true;

    if (showBioOrSocial === 0) {
      socials.style.display = "block";
      socials.classList.remove("fade-to-the-left");
      socials.classList.add("fade-from-the-right");
      bio.classList.add("fade-to-the-left");
      bio.classList.remove("fade-from-the-right");
      setTimeout(() => {
        bio.style.display = "none";
        isTransitioning = false; 
      }, 1000); 
      showBioOrSocial = 1;
    } else {
      bio.style.display = "flex";
      socials.classList.add("fade-to-the-left");
      socials.classList.remove("fade-from-the-right");
      bio.classList.remove("fade-to-the-left");
      bio.classList.add("fade-from-the-right");
      setTimeout(() => {
        socials.style.display = "none";
        isTransitioning = false; 
      }, 1000); 
      showBioOrSocial = 0;
    }
  };
});