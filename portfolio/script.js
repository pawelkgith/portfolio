const about = document.querySelector(".about"),
aboutPop = document.querySelector(".aboutPopUp"),
contact = document.querySelector(".contact"),
contactPop = document.querySelector(".contactPopUp"),
closeAb = document.querySelector(".closeAb"),
closeCon = document.querySelector(".closeCon");

let op = 0;

about.addEventListener("click", () => {
    op = 0;
    contactPop.style.display="none";
    
    if(aboutPop.style.display = "none") {
        aboutPop.style.opacity = 0;
        aboutPop.style.display = "block";
        let aboutOpacityInterval = setInterval(() => {
            aboutPop.style.opacity = op;
            if(op === 1) 
                return;
            op += 0.1;
            }, 50);
    }
});

contact.addEventListener("click", () => {
    op = 0;
    aboutPop.style.display = "none";
    if(contactPop.style.display = "none") {
        contactPop.style.opacity = 0;
        contactPop.style.display = "block";
        let contactOpacityInterval = setInterval(() => {
            contactPop.style.opacity = op;
            if(op === 1) 
                return;
            op += 0.1
        }, 50);
    }
});

closeAb.addEventListener("click", () => {
    aboutPop.style.display = "none";
});

closeCon.addEventListener("click", () => {
    contactPop.style.display = "none";
});

