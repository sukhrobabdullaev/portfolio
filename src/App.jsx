import router from "./router";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#233142", "#f70776", "#36C5F0"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#455d7a",
        opacity: 0.4,
        width: 0.6,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 120,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <AnimatedCursor
        color="111,0,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Particles options={options} init={particlesInit} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
