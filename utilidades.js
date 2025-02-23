window.onload = function () {
  // Crear el overlay
  const overlay = document.createElement("div");
  overlay.classList.add("clicktoenter"); // Añadimos la clase 'clicktoenter'

  // Crear el elemento de texto dentro del overlay
  const textElement = document.createElement("p"); // Usamos un <p> para el texto
  textElement.innerHTML = "click to enter";

  // Añadir una clase al texto (por ejemplo, 'click-text')
  textElement.classList.add("click-text");

  // Añadir el texto al overlay
  overlay.appendChild(textElement);

  // Añadir el overlay a la página
  document.body.appendChild(overlay);

  // Crear el contenedor de partículas en el overlay
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles-js";
  overlay.appendChild(particlesContainer);

  // Configuración de particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Número de partículas
        density: {
          enable: true,
          value_area: 800, // Área en la que las partículas se distribuyen
        },
      },
      color: {
        value: "#ffffff", // Color blanco
      },
      shape: {
        type: "circle", // Forma de las partículas
      },
      opacity: {
        value: 0.5, // Opacidad de las partículas
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 5, // Tamaño de las partículas
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
          mode: "repulse", // Modo de repulsión al pasar el ratón sobre las partículas
        },
      },
    },
  });

  // Cuando el usuario haga clic en el overlay, iniciamos el fundido, el video y la canción
  overlay.addEventListener("click", function () {
    // Iniciar el fundido (opacidad 0)
    overlay.classList.add("fade-out");

    const video = document.querySelector(".backgroundvideo");
    const audio = document.querySelector(".musicplayer");

    if (video) video.play();
    if (audio) audio.play();

    // Esperar a que el fundido termine (0.5 segundos) y luego ocultar el overlay
    setTimeout(function () {
      overlay.style.display = "none"; // Ocultar el overlay completamente
      changeLine();
    }, 500); // Coincide con la duración de la transición, esta en milisegundos
  });

  const usernameElement = document.querySelector(".username");
  if (usernameElement) {
    const usernameParticlesContainer = document.createElement("div");
    usernameParticlesContainer.id = "username-particles-js";
    usernameElement.appendChild(usernameParticlesContainer);

    // Configuración de particles.js para .username
    particlesJS("username-particles-js", {
      particles: {
        number: {
          value: 100, // Número de partículas
          density: {
            enable: true,
            value_area: 200, // Área en la que las partículas se distribuyen
          },
        },
        color: {
          value: "#ffffff", // Color blanco
        },
        shape: {
          type: "circle", // Forma de las partículas
        },
        opacity: {
          value: 1, // Opacidad de las partículas
          random: true,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.5,
          },
        },
        size: {
          value: 3, // Tamaño de las partículas
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
            mode: "repulse", // Modo de repulsión al pasar el ratón sobre las partículas
          },
        },
      },
    });
  }

  // Texto que se mostrará en el typewriter
  const textLines = Array.from(document.querySelectorAll(".añadirTexto")).map(
    (element) => element.innerText
  );

  // Variables para el typewriter
  let currentLine = 0;

  function changeLine() {
    const textElement = document.createElement("p");
    textElement.innerHTML = textLines[currentLine];
    textElement.classList.add("typewritertext");
    const imageAndTextContainer = document.querySelector(".username");
    if (imageAndTextContainer) {
      imageAndTextContainer.appendChild(textElement);
    }

    // Esperar 5 segundos antes de pasar a la siguiente línea
    setTimeout(function () {
      if (imageAndTextContainer && textElement) {
        // Eliminar el elemento de texto actual
        imageAndTextContainer.removeChild(textElement);

        // Incrementar el índice de la línea actual
        currentLine = (currentLine + 1) % textLines.length;

        // Llamar a changeLine de nuevo para mostrar la siguiente línea
        changeLine();
      }
    }, 10000); // 10 segundos para que se ajuste con animacion
  }
};
