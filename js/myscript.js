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
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    });

    // Observa todos los elementos con .text-box
    const textBoxes = document.querySelectorAll('.text-box');
    textBoxes.forEach(el => observer.observe(el));

    // ✅ Revisar si hay un hash en la URL y forzar animación
    window.addEventListener('DOMContentLoaded', () => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el && el.classList.contains('text-box')) {
                // Forzar animación si ya está visible
                el.classList.add('show');
            }
        }
    });

    // 💡 Skills: animación continua cuando visible
    const skillBars = document.querySelectorAll(".skill-fill");
    const skillsSection = document.querySelector(".skills");

    function checkScroll() {
        if (!skillsSection) return;

        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight * 0.75 && sectionPosition > -skillsSection.offsetHeight) {
            skillBars.forEach(bar => {
                const skillValue = bar.getAttribute("data-skill");
                bar.style.width = skillValue + "%";
            });
        } else {
            skillBars.forEach(bar => {
                bar.style.width = "0%";
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
});

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("show");
    }
  }
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

