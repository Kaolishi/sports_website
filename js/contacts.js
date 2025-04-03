document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        setTimeout(() => {
            confirmationMessage.classList.remove("hidden");
            contactForm.reset();
        }, 1000);
    });

    // 🏀 Create Snake-Like Cursor Trail with "BASKETBALL"
    const trailText = "BASKETBALL";
    const letters = trailText.split(""); // Split into an array of letters
    const numLetters = letters.length;
    const trailElements = [];
    let hideTimeout;

    // Create span elements for each letter
    for (let i = 0; i < numLetters; i++) {
        let span = document.createElement("span");
        span.textContent = letters[i];
        Object.assign(span.style, {
            position: "absolute",
            color: "#FFA500", // Basketball Orange
            fontSize: "22px",
            fontWeight: "bold",
            pointerEvents: "none",
            opacity: "0", // Initially hidden
            transition: "opacity 0.3s ease, transform 0.3s ease-out",
        });
        document.body.appendChild(span);
        trailElements.push(span);
    }

    let positions = Array.from({ length: numLetters }, () => ({ x: 0, y: 0 })); // Store previous positions

    function updateTrail(event) {
        clearTimeout(hideTimeout); // Reset fade-out timer
        const mouseX = event.clientX + window.scrollX;
        const mouseY = event.clientY + window.scrollY;

        // Smooth transition for the first letter
        positions[0] = { x: mouseX, y: mouseY };

        // Move each letter smoothly behind the previous one
        for (let i = 1; i < numLetters; i++) {
            let dx = positions[i - 1].x - positions[i].x;
            let dy = positions[i - 1].y - positions[i].y;
            positions[i].x += dx * 0.2; // Adjust smoothness factor
            positions[i].y += dy * 0.2;
        }

        // Apply the positions and make letters visible
        trailElements.forEach((element, index) => {
            element.style.left = `${positions[index].x}px`;
            element.style.top = `${positions[index].y}px`;
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });

        // Start fade-out timer
        hideTimeout = setTimeout(hideTrail, 5);
    }

    function hideTrail() {
        trailElements.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = "0";
                span.style.transform = "translateY(10px)"; // Small downward move effect
            }, index * 50); // Staggered fading effect
        });
    }

    document.addEventListener("mousemove", updateTrail);

    // Ensure letters follow cursor even when scrolling
    window.addEventListener("scroll", () => {
        document.dispatchEvent(
            new MouseEvent("mousemove", {
                clientX: positions[0].x - window.scrollX,
                clientY: positions[0].y - window.scrollY,
            })
        );
    });

    document.addEventListener("mouseleave", hideTrail); // Also hide when leaving the window
});
