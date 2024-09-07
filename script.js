const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Change navbar background color on scroll
window.onscroll = function () {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#111";
    } else {
        navbar.style.backgroundColor = "#666";
    }
};

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
