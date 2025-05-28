// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    const navBarWrapper = document.querySelector('.navBarWrapper');
    const hamburger = document.querySelector('.nav-hamburger');
    const navRight = document.querySelector('.nav-right');
    let menuOpen = false;

    // Scroll effect
    function handleScroll() {
        if (window.scrollY <= 150) {
            navBarWrapper.classList.add('thing');
        } else {
            navBarWrapper.classList.remove('thing');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Resize effect
    function handleResize() {
        if (window.innerWidth > 900 && menuOpen) {
            menuOpen = false;
            navRight.classList.remove('open');
        }
    }
    window.addEventListener('resize', handleResize);

    // Hamburger click
    hamburger.addEventListener('click', function () {
        menuOpen = !menuOpen;
        navRight.classList.toggle('open', menuOpen);
        navBarWrapper.classList.toggle('open', menuOpen);
    });

    // Click outside to close
    document.addEventListener('mousedown', function (e) {
        if (menuOpen && !nav.contains(e.target)) {
            menuOpen = false;
            navRight.classList.remove('open');
            navBarWrapper.classList.remove('open');
        }
    });

    // Close menu on nav link click
    navRight.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                menuOpen = false;
                navRight.classList.remove('open');
                navBarWrapper.classList.remove('open');
            }
        });
    });
});
