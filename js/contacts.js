document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Optionally save to localStorage or send to backend
      form.reset();
      message.style.display = "block";
    });
  });
  