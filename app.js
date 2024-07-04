AOS.init();

function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navItems = document.querySelector('.nav-items');
    menuToggle.classList.toggle('active');
    navItems.classList.toggle('active');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor link behavior
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        const scrollTop = targetElement.offsetTop;

        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    });
});