<script src="script.js"></script>

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Basketball Rules Script Loaded");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle visibility of rule sections
    document.querySelectorAll("section ul").forEach(section => {
        let title = section.previousElementSibling; // Gets the heading (h3)
        
        if (title) {
            title.style.cursor = "pointer"; // Make headings clickable

            title.addEventListener("click", function () {
                section.style.display = section.style.display === "none" ? "block" : "none";
            });

            // Initially collapse all sections except the first one
            if (title.innerText !== "Basic Rules") {
                section.style.display = "none";
            }
        }
    });

    // Highlight selected rule when clicked
    document.querySelectorAll("section ul li").forEach(rule => {
        rule.addEventListener("click", function () {
            // Remove highlight from all items
            document.querySelectorAll("section ul li").forEach(item => item.style.background = "transparent");

            // Highlight the selected item
            this.style.background = "#ffeb3b";
            this.style.transition = "background 0.3s";
        });
    });

    // Form validation (if applicable)
    const form = document.getElementById("registration-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;
            const inputs = form.querySelectorAll("input, select");

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    }
});

<script src="script.js"></script>

<button id="toggleMissionVision">Toggle Mission/Vision</button>
<button id="changeTeamInfo">Update Team Info</button>
<button id="joinTeam">Join Team</button>
