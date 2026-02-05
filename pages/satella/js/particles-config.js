
export const  config1= {
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
  };
  export const config2= {
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
    }