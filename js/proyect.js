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
                container.classList.add("modal-open");
            });

            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
                container.classList.remove("modal-open");
            });

            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                    container.classList.remove("modal-open");
                }
            });
        }
    });
});


function openVideoModal() {
    document.getElementById("videoModal").style.display = "block";
    document.getElementById("videoOverlay").style.display = "block";

    // Establecer el src para cargar el video
    const iframe = document.getElementById("youtubeIframe");
    iframe.src = "https://www.youtube.com/embed/l4rwTyhRJSk?autoplay=1";
}

function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoOverlay").style.display = "none";

    // Detener el video al cerrar
    const iframe = document.getElementById("youtubeIframe");
    iframe.src = "";
}

document.querySelectorAll(".carousel button").forEach(button => {
    button.addEventListener("mouseup", () => {
        button.blur(); // quita el foco visual tras hacer clic
    });
});

document.querySelectorAll('.prevBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked-left');
    setTimeout(() => btn.classList.remove('clicked-left'), 300);
  });
});

document.querySelectorAll('.nextBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked-right');
    setTimeout(() => btn.classList.remove('clicked-right'), 300);
  });
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