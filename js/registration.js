document.addEventListener("DOMContentLoaded", function () {
    // Form validation and submission
    const form = document.querySelector("#registration-form"); // Target the form by ID
    const formContainer = document.getElementById("form-section"); // Section to be replaced

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting immediately

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let terms = document.getElementById("terms").checked;

        // Validation checks
        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (!terms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        // Replace only the form section with a success message
        formContainer.innerHTML = `
            <div class="success-message">
                <h2>🎉 Success!</h2>
                <p>Welcome to <strong>APU Basketball Club</strong>. Your registration has been submitted.</p>
            </div>
        `;

        // Apply CSS styles dynamically
        const style = document.createElement("style");
        style.innerHTML = `
            .success-message {
                background-color: #d4edda;
                color: #155724;
                padding: 20px;
                border-radius: 8px;
                text-align: center;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                font-family: 'Montserrat', sans-serif;
                margin: 20px auto;
                max-width: 600px;
            }
        `;
        document.head.appendChild(style);
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Phone number validation function (basic format)
    function validatePhone(phone) {
        let re = /^[0-9]{10,15}$/; // Accepts 10-15 digit phone numbers
        return re.test(phone);
    }
});
