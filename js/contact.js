
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

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".text-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Permite repetir la animación
            }
        });
    }, { threshold: 0.3 });

    texts.forEach(text => observer.observe(text));
});


function toggleMenu() {
    const navLinks = document.querySelector(".menu");
    navLinks.classList.toggle("show");
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("show");
    });
});
