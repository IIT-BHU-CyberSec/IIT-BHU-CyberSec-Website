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
    <>
      <div className="relative h-screen w-screen bg-black">
        <canvas
          ref={canvasRef}
          id="matrix"
          className="absolute top-0 left-0 w-full h-full z-10"
        ></canvas>
        <div className="content relative z-20 text-center text-white">
          <h1 className="text-xl md:text-xl lg:text-2xl font-semibold text-white font-press-start relative -top-20 font-h ">Welcome to IIT(BHU) CyberSec Club</h1>
          {/* <p className="para relative -top-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure expedita itaque possimus eum animi, numquam doloremque, iusto quisquam totam saepe optio dolor sit! Tenetur, quia veniam inventore ut autem incidunt eaque non voluptatibus temporibus vero mollitia distinctio, fuga harum natus ducimus tempora soluta expedita, voluptates quis qui. Facere, adipisci minima.
          </p> */}
          <button className="relative -left-10">
            <a href="/blogs" className="text-white font-medium ">
              EXPLORE OUR LATEST BLOG
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
