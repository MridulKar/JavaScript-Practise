window.onscroll = function() {
    if (window.scrollY >= 100) {
        document.getElementById("nav_id").classList.add("navbar_after");
    } else {
        document.getElementById("nav_id").classList.remove("navbar_after");
    }
}