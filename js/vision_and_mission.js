document.addEventListener("scroll", () => {
    const ball = document.getElementById("rotating-ball");
    const rotation = window.scrollY * 0.3;
    ball.style.transform = `rotate(${rotation}deg)`;
  });
  