var isOpen = true;
window.addEventListener("load", function (e) {
    var btn = document.getElementById("mybutton");
    var mymenu = document.getElementById("mymenu");
    btn.addEventListener("click", function (e) {
        if (isOpen) {
            mymenu.style.display = "block";
        } else {
            mymenu.style.display = "none";
        }
        isOpen = !isOpen;
    });
});
