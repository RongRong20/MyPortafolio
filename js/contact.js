
// Contact.html

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página recargue

    const formData = new FormData(this);

    fetch("https://formspree.io/f/xeoaokqg", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            alert("¡Mensaje enviado correctamente!");
            document.getElementById("contactForm").reset();
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

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Cerrar al hacer clic en cualquier enlace del menú
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
            });
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove("show");
            }
        });
    }
});