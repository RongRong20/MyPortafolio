// Index.html

document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const menuIcon = document.getElementById("menuIcon");

    if (hamburger && menu && menuIcon) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
            // Cambia el ícono según el estado
            if (menu.classList.contains("show")) {
                menuIcon.classList.replace("fa-bars", "fa-times");
            } else {
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        });

        // Cerrar al hacer clic en cualquier enlace del menú
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
                menuIcon.classList.replace("fa-times", "fa-bars");
            });
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove("show");
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        });
    }

    // Intersection Observer para animaciones de aparición
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.06
    });

    document.querySelectorAll('.text-box').forEach(el => {
        observer.observe(el);
    });

    // Skills: animación de barras de progreso
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

    // Hash navigation para #Curriculum
    const hash = window.location.hash;
    if (hash === "#Curriculum") {
        setTimeout(() => {
            const el = document.querySelector("#Curriculum .text-box");
            if (el) {
                el.classList.add("show");
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    }

    // Fondo dinámico landing
    const landing = document.querySelector('.landing');
    if (landing) {
        const backgrounds = [
            "url('../img/CPT_2M_TFM_WURONGRONG_24.png')",
            "url('../img/CPT_2M_3T_WURONGRONG_COTTAGE_RENDER1.png')",
            "url('../img/CPT_2M_TFM_WURONGRONG_ENVIROMENT_RENDER1.png')",
            "url('../img/CPT_2M3T_WURONGRONG_ENVIROMENT_RENDER.png')"
        ];
        let index = 0;
        landing.style.setProperty('--bg-url', backgrounds[index]);
        setInterval(() => {
            index = (index + 1) % backgrounds.length;
            landing.style.setProperty('--bg-url', backgrounds[index]);
        }, 3000);
    }
});

