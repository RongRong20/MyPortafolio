// Contact.html

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página recargue

    const formData = new FormData(this);

    fetch("https://formspree.io/f/xeoaokqg", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
        .then(response => {
            const successMsg = document.getElementById("successMessage");
            if (response.ok) {
                successMsg.style.display = "block";
                this.reset();
                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 4000);
            } else {
                alert("Hubo un problema, intenta de nuevo.");
            }
        })
        .catch(error => alert("Error: " + error));
});

// Index.html

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const menuIcon = document.getElementById("menuIcon");

    if (hamburger && menu && menuIcon) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
            if (menu.classList.contains("show")) {
                menuIcon.classList.replace("fa-bars", "fa-times");
            } else {
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
                menuIcon.classList.replace("fa-times", "fa-bars");
            });
        });

        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove("show");
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        });
    }
});