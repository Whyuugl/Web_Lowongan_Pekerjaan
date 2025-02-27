document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".navbar-right a");
    let currentPath = window.location.pathname.split("/").pop() || "web_lowongan.html";

    links.forEach(link => {
        let linkPath = link.getAttribute("href");
        if (currentPath === linkPath || window.location.hash === link.getAttribute("href")) {
            link.classList.add("active");
        }
    });
});

// Dropdown menu toggle
document.addEventListener("click", function (event) {
    let dropdownToggle = document.querySelector(".about-toggle");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdownToggle.contains(event.target)) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
        dropdownToggle.classList.toggle("active");
    } else {
        dropdownMenu.classList.remove("show");
        dropdownToggle.classList.remove("active");
    }
});

const jobTitles = ["Data Scientist", "Programmer", "UI/UX Designer", "Backend Developer", "Software Engineer"];
    let jobIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector(".typing");

    function typeEffect() {
        let currentJob = jobTitles[jobIndex];
        if (isDeleting) {
            typingElement.textContent = currentJob.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentJob.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentJob.length) {
            setTimeout(() => isDeleting = true, 1000); // Tunggu 1 detik sebelum hapus
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            jobIndex = (jobIndex + 1) % jobTitles.length; // Pindah ke kata berikutnya
        }

        setTimeout(typeEffect, isDeleting ? 100 : 150); // Kecepatan ketik & hapus
    }

document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".company-track");

    sliders.forEach(slider => {
        const clone = slider.innerHTML; 
        slider.innerHTML += clone; 
    });
});
