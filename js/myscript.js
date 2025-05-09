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

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // ✅ Detiene la observación una vez aparece
            }
        });
    }, {
        threshold: 0.06 // 📍 Detecta antes, útil para móvil
    });

    // Observa todas las cajas de texto
    document.querySelectorAll('.text-box').forEach(el => {
        observer.observe(el);
    });

    // ✅ Si llegas desde otra página con #Curriculum
    const hash = window.location.hash;
    if (hash === "#Curriculum") {
        const el = document.querySelector(hash);
        if (el) {
            el.classList.add('show');
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }


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
    if (hash === "#Curriculum") {
        setTimeout(() => {
            const target = document.querySelector("#Curriculum .text-box");
            if (target) {
                target.classList.add("show");
            }
        }, 100); // ⏱ Pequeño retraso para que cargue antes de aplicar
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

