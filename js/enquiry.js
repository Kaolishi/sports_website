document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const formContainer = document.getElementById("enquiry");

    // Create a success message element (hidden by default)
    const successMessage = document.createElement("div");
    successMessage.id = "successMessage";
    successMessage.style.display = "none";
    successMessage.style.padding = "20px";
    successMessage.style.marginTop = "20px";
    successMessage.style.backgroundColor = "#d4edda"; // Light green background
    successMessage.style.color = "#155724"; // Dark green text
    successMessage.style.border = "1px solid #c3e6cb";
    successMessage.style.textAlign = "center";
    successMessage.style.fontSize = "18px";
    successMessage.innerHTML = "<strong>Success!</strong> Your enquiry has been submitted.";

    // Append success message to the form container
    formContainer.appendChild(successMessage);

    // Form Submission Handling
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate inputs
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert("Please fill out all required fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone number validation (optional)
        if (phoneInput.value && !/^\d{10,15}$/.test(phoneInput.value)) {
            alert("Please enter a valid phone number (10-15 digits).");
            return;
        }

        // Show success message & hide form
        form.style.display = "none";
        successMessage.style.display = "block";
    });

    // Auto-fill Name from Local Storage
    if (localStorage.getItem("userName")) {
        nameInput.value = localStorage.getItem("userName");
    }

    nameInput.addEventListener("input", function () {
        localStorage.setItem("userName", nameInput.value);
    });
});

