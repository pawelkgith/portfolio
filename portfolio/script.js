const about = document.querySelector(".about"),
aboutPop = document.querySelector(".aboutPopUp"),
contact = document.querySelector(".contact"),
contactPop = document.querySelector(".contactPopUp"),
closeAb = document.querySelector(".closeAb"),
closeCon = document.querySelector(".closeCon");

about.addEventListener("click", () => {
    contactPop.style.display = "none";
    aboutPop.style.display = "block"; 
});

contact.addEventListener("click", () => {
    aboutPop.style.display = "none";
    contactPop.style.display = "block";
});

closeAb.addEventListener("click", () => {
    aboutPop.style.display = "none";
});

closeCon.addEventListener("click", () => {
    contactPop.style.display = "none";
});
