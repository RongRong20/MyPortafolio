document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".art").forEach((container) => {
        // Selecciona cada carrusel individualmente
        container.querySelectorAll(".carousel").forEach((carousel) => {
            const images = carousel.querySelectorAll(".carousel-images img");
            let currentIndex = 0;

            const prevBtn = carousel.querySelector(".prevBtn");
            const nextBtn = carousel.querySelector(".nextBtn");

            if (prevBtn && nextBtn && images.length > 0) {
                prevBtn.addEventListener("click", function () {
                    images[currentIndex].classList.remove("active");
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    images[currentIndex].classList.add("active");
                });

                nextBtn.addEventListener("click", function () {
                    images[currentIndex].classList.remove("active");
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.add("active");
                });
            }
        });

        // Manejo del modal individualmente
        const modal = container.querySelector(".modal");
        const infoBtn = container.querySelector(".infoBtn");
        const closeBtn = modal ? modal.querySelector(".close") : null;

        if (infoBtn && modal && closeBtn) {
            infoBtn.addEventListener("click", function () {
                modal.style.display = "block";
            });

            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });

            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    });
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