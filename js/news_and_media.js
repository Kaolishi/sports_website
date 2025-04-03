/* This file controls the carousel feature */

let currentSlide = 0;

function showSlide(index) {
    const images = document.querySelectorAll(".carousel-images img");
    const total = images.length;
    
    if (index >= total) currentSlide = 0;
    else if (index < 0) currentSlide = total - 1;
    else currentSlide = index;

    updateClasses();
}

function updateClasses() {
    const images = document.querySelectorAll(".carousel-images img");
    const total = images.length;

    // Remove all classes from each image
    images.forEach(img => {
        img.classList.remove("prev", "current", "next");
    });
    
    // Set classes for current, previous, and next images
    images[currentSlide].classList.add("current");
    images[(currentSlide - 1 + total) % total].classList.add("prev");
    images[(currentSlide + 1) % total].classList.add("next");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(() => {
    nextSlide();
}, 5000);

window.onload = () => showSlide(currentSlide);