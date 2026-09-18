// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();