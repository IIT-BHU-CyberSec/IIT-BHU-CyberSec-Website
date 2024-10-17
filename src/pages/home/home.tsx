import React, { useEffect, useRef } from "react";
import "./home.css";

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const characters = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";

      drops.forEach((drop, i) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);

        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div className="container">
      <canvas ref={canvasRef} id="matrix"></canvas>
      <div className="content">
        <h1 className="text-4xl md:text-6xl">IIT BHU Cybersecurity Club</h1>
        <p className="text-xl md:text-2xl">Hey Developers</p>
        <button className="mt-4 border border-green-500 text-green-500 px-5 py-2 bg-transparent hover:bg-green-500 hover:text-black transition-colors duration-300 cursor-pointer">
          Join Us
        </button>
      </div>
    </div>
  );
};
export default Home;
