// Rules accordion toggle
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
  
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.display === "block";
  
        // Close all
        document.querySelectorAll(".accordion-content").forEach((el) => el.style.display = "none");
  
        // Toggle current
        content.style.display = isOpen ? "none" : "block";
      });
    });
  });