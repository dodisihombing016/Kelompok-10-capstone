document.addEventListener("DOMContentLoaded", function () {

    /* =====================
       DARK MODE (SAFE)
    ===================== */
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
            themeToggle.innerText = "☀";
        }

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeToggle.innerText = isDark ? "☀" : "🌙";
        });
    }

    /* =====================
       FADE ANIMATION
    ===================== */
    document.querySelectorAll(".fade").forEach(el => {
        el.classList.add("show");
    });

    /* =====================
       NAVBAR MOBILE TOGGLE
    ===================== */
    const toggleBtn = document.querySelector(".toggle-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    /* =====================
       NAVBAR ACTIVE LINK
    ===================== */
    const navLinks = document.querySelectorAll(".nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

});
