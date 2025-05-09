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


const landing = document.querySelector('.landing');

const backgrounds = [
    "url('../img/CPT_2M_TFM_WURONGRONG_24.png')",
    "url('../img/CPT_2M_3T_WURONGRONG_COTTAGE_RENDER1.png')",
    "url('../img/CPT_2M_TFM_WURONGRONG_ENVIROMENT_RENDER1.png')",
    "url('../img/CPT_2M3T_WURONGRONG_ENVIROMENT_RENDER.png')"
];

let index = 0;

// Set initial background
landing.style.setProperty('--bg-url', backgrounds[index]);

setInterval(() => {
    index = (index + 1) % backgrounds.length;
    landing.style.setProperty('--bg-url', backgrounds[index]);
}, 3000);

console.log(backgrounds);

