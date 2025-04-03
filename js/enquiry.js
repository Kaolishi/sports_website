document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enquiry-form");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate storing the enquiry in localStorage
        const enquiry = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            message: form.message.value.trim(),
            timestamp: new Date().toISOString()
        };

        const enquiries = JSON.parse(localStorage.getItem("apu_enquiries")) || [];
        enquiries.push(enquiry);
        localStorage.setItem("apu_enquiries", JSON.stringify(enquiries));

        form.reset();
        successMsg.classList.remove("hidden");
        form.style.display = "none";
    });
});


