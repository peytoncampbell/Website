document.addEventListener("DOMContentLoaded", function() {
    // Form Submission
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();  // prevent default form submission behavior
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            if (email && message) {
                alert("Form submitted successfully!");
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
    
    // Project Popup
    const project1 = document.getElementById("project1");
    if (project1) {
        project1.addEventListener("click", function() {
            alert("More details about Project 1...");
        });
    }
    
    // Smooth Scrolling
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
