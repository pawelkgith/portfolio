const header = document.getElementsByClassName("header");

Array.prototype.forEach.call(header, function(el) {
    el.addEventListener("click", () => {
        let body = el.nextElementSibling;
        if(body.style.display === "flex")
            body.style.display = "none";
        else
            body.style.display = "flex";
    });
});