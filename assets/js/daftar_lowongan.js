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

document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-job').value.toLowerCase();
    const jobItems = document.querySelectorAll('.job-item');

    let hasResults = false;

    jobItems.forEach(item => {
        const jobTitle = item.querySelector('h3').textContent.toLowerCase();
        const jobDescription = item.querySelector('.job-description').textContent.toLowerCase();

        if (jobTitle.includes(searchTerm) || jobDescription.includes(searchTerm)) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (hasResults) {
        document.getElementById('clear-search-btn').style.display = 'inline-block';
    } else {
        document.getElementById('clear-search-btn').style.display = 'none';
    }
});

document.getElementById('clear-search-btn').addEventListener('click', function() {
    document.getElementById('search-job').value = '';
    const jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(item => {
        item.style.display = 'block';
    });

    document.getElementById('clear-search-btn').style.display = 'none';
});

function applyFilters() {
    const categoryFilter = document.getElementById('filter-category').value.toLowerCase();
    const locationFilter = document.getElementById('filter-location').value.toLowerCase();
    const typeFilter = document.getElementById('filter-type').value.toLowerCase();
    const jobItems = document.querySelectorAll('.job-item');

    let hasResults = false;

    jobItems.forEach(item => {
        const category = item.querySelector('.job-category').textContent.toLowerCase();
        const location = item.querySelector('.job-location').textContent.toLowerCase();
        const type = item.querySelector('.job-type').textContent.toLowerCase();

        const isCategoryMatch = categoryFilter === '' || category.includes(categoryFilter);
        const isLocationMatch = locationFilter === '' || location.includes(locationFilter);
        const isTypeMatch = typeFilter === '' || type.includes(typeFilter);

        if (isCategoryMatch && isLocationMatch && isTypeMatch) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

}

document.getElementById('filter-category').addEventListener('change', applyFilters);
document.getElementById('filter-location').addEventListener('change', applyFilters);
document.getElementById('filter-type').addEventListener('change', applyFilters);

document.getElementById('clear-filters-btn').addEventListener('click', function() {
    document.getElementById('filter-category').value = '';
    document.getElementById('filter-location').value = '';
    document.getElementById('filter-type').value = '';
    applyFilters();
});

