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


document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-fill");
    const skillsSection = document.querySelector(".skills");

    function checkScroll() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.75 && sectionPosition > -skillsSection.offsetHeight) { 
            skillBars.forEach(bar => {
                const skillValue = bar.getAttribute("data-skill");
                bar.style.width = skillValue + "%";
            });
        } else {
            // Reiniciar la animación cuando la sección no está visible
            skillBars.forEach(bar => {
                bar.style.width = "0%";
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
});


