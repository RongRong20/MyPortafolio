
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


