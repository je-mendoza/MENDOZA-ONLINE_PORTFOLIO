alert("note!: this is not responsive to mobile phone");

let currentSection = 0; 
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar a");

// Scroll to a specific section
function scrollToSection(index) {
    const section = sections[index];
    section.scrollIntoView({ behavior: "smooth" });
    setActiveLink(index);
}

// Update active link in navbar
function setActiveLink(index) {
    navbarLinks.forEach(link => link.classList.remove("active"));
    navbarLinks[index].classList.add("active");
}

// Event listener for mouse wheel scroll
window.addEventListener("wheel", (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
        // Scroll down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        // Scroll up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
}, { passive: false });

navbarLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        currentSection = index;
        scrollToSection(currentSection);
    });
});


window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveLink(index);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
        bar.querySelector("span").textContent = percent + "%";
    });
});

