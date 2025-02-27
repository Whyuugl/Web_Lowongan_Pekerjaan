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

