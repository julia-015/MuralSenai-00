document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelector('.navLinks');
    if(window.location.pathname == "/"){
        navbarLinks.style.display = "none"
    }
});
