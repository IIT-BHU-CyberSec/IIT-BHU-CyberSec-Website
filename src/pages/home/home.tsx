import React, { useEffect, useRef } from "react";
import "./home.css";
import CyberButton from "../../components/cyberButton/CyberButton";

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
    <>
      <div className="relative h-screen w-screen bg-black">
        <canvas
          ref={canvasRef}
          id="matrix"
          className="absolute top-0 left-0 w-full h-full z-10"
        ></canvas>
        <div className="content relative z-20 text-center text-neon-green">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-neon-green font-fira-code relative -top-20 tracking-wide">
            Welcome to IIT(BHU) CyberSec Club
          </h1>
          <CyberButton prompt="Explore Our Latest Blogs" href="/blogs" />
        </div>
      </div>
    </>
  );
};

export default Home;
