function showMessage() {
            const message = document.getElementById('message');
            message.classList.toggle('hidden');
        }
        
        // Back to Top Button
    const topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.id = "topBtn";
    document.body.appendChild(topButton);

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });
    let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.style.display = "none"; // Hide all slides
        slide.style.opacity = "0"; // Start transparent
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    
    // Smooth fade-in effect
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 100);

    setTimeout(showSlides, 5500); // Change slide every 5.5 seconds
}

// Manual Navigation (For Next & Previous Buttons)
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
