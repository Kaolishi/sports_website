document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const charCount = document.getElementById("charCount");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");
  
    message.addEventListener("input", () => {
      charCount.textContent = `${message.value.length}/250`;
    });
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const feedback = {
        name: form.name.value,
        email: form.email.value,
        rating: form.rating.value,
        message: form.message.value,
        timestamp: new Date().toISOString()
      };
  
      const stored = JSON.parse(localStorage.getItem("apu_feedbacks")) || [];
      stored.push(feedback);
      localStorage.setItem("apu_feedbacks", JSON.stringify(stored));
  
      form.reset();
      charCount.textContent = "0/250";
      successMessage.classList.remove("hidden");
    });
  });