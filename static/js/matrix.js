document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("matrix");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const fontSize = 16;
  let columns, drops;

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1); // Reset drops array on resize
  };

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  const characters = "01";

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    drops.forEach((drop, i) => {
      const text = characters[Math.floor(Math.random() * characters.length)];
      ctx.fillText(text, i * fontSize, drop * fontSize);

      if (drop * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0; // Reset drop position
      }

      drops[i]++;
    });
  };

  setInterval(draw, 33);
});
