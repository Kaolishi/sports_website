document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
  
      if (name && email && phone) {
        const userData = {
          name,
          email,
          phone,
          timestamp: new Date().toISOString()
        };
  
        let registrations = JSON.parse(localStorage.getItem("apubasketball_registrations")) || [];
        registrations.push(userData);
        localStorage.setItem("apubasketball_registrations", JSON.stringify(registrations));
  
        form.reset();
        confirmation.style.display = "block";
        form.style.display = "none";
      }
    });
  });