document.addEventListener("DOMContentLoaded", function () {
    const fullText = "Achievements";
    const heading = document.getElementById("achievements-heading");
    let index = 0;
    let isTyping = true;
    const typeDelay = 100;
    const deleteDelay = 100;
    const pauseDelay = 1000;
  
    function typeEffect() {
      if (isTyping) {
        if (index < fullText.length) {
          heading.textContent = fullText.slice(0, index + 1);
          index++;
        } else {
          isTyping = false;
          setTimeout(() => typeEffect(), pauseDelay);
          return;
        }
      } else {
        if (index > 0) {
          heading.textContent = fullText.slice(0, index - 1);
          index--;
        } else {
          isTyping = true;
          setTimeout(() => typeEffect(), pauseDelay);
          return;
        }
      }
      setTimeout(typeEffect, isTyping ? typeDelay : deleteDelay);
    }
  
    typeEffect();
  });
  