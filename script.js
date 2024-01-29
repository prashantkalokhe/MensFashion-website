
function toggleMenu() {
    var menus = document.querySelectorAll(".threemenue");
    menus.forEach(function(menu) {
        if (window.getComputedStyle(menu).display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}