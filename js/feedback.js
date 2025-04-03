document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const ratingSelect = document.getElementById("rating");
    const charCount = document.getElementById("charCount");
    const ratingMessage = document.getElementById("ratingMessage");
    const successMessage = document.getElementById("successMessage");

    // ✅ Live character count for feedback message
    messageInput.addEventListener("input", function () {
        let count = messageInput.value.length;
        charCount.textContent = `${count}/250`;
        charCount.style.color = count > 250 ? "red" : "black";
    });

    // ✅ Dynamic rating feedback
    ratingSelect.addEventListener("change", function () {
        let rating = ratingSelect.value;
        switch (rating) {
            case "Excellent":
                ratingMessage.textContent = "We're glad you had a great experience! 😊";
                ratingMessage.style.color = "green";
                break;
            case "Good":
                ratingMessage.textContent = "Thanks for your feedback! 😊";
                ratingMessage.style.color = "blue";
                break;
            case "Average":
                ratingMessage.textContent = "Thank you for sharing! Is there anything we could do better?";
                ratingMessage.style.color = "orange";
                break;
            case "Poor":
                ratingMessage.textContent = "We're sorry to hear that! Please share how we can do better.";
                ratingMessage.style.color = "red";
                break;
        }
    });

    // ✅ Form validation
    form.addEventListener("submit", function (event) {
        let valid = true;

        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").textContent = "Name is required!";
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
            document.getElementById("emailError").textContent = "Enter a valid email!";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (messageInput.value.length > 250) {
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            form.style.display = "none";
            successMessage.style.display = "block";
        }
    });

    // ✅ Interactive Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (event) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
    });

    document.addEventListener("mousedown", function () {
        cursor.classList.add("click-effect");
        setTimeout(() => cursor.classList.remove("click-effect"), 150);
    });

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
        element.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
    });
});
