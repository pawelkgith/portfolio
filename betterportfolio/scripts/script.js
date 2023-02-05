const aboutPopUp = document.querySelector(".aboutPopUp"),
contactPopUp = document.querySelector(".contactPopUp"),
aboutBtn = document.querySelector("#about"),
projectsBtn = document.querySelector("#projects"),
contactBtn = document.querySelector("#contact"),
closeBtnArr = [document.querySelector(".aboutCloseWindow"), document.querySelector(".contactCloseWindow")];

projectsBtn.addEventListener("click", () => {
    window.open("https://github.com/paweu2137/portfolio", "_blank");
});

aboutBtn.addEventListener("click", () => {
    if(aboutPopUp.style.display == "block")
        aboutPopUp.style.display = "none";

    else {
        contactPopUp.style.display = "none";
        aboutPopUp.style.display = "block";
    }
});

contactBtn.addEventListener("click", () => {
    if(contactPopUp.style.display == "block")
        contactPopUp.style.display = "none";

    else {
        aboutPopUp.style.display = "none";
        contactPopUp.style.display = "block";
    }
});


for(let i=0; i<closeBtnArr.length; i++) {
    closeBtnArr[i].addEventListener("click", () => {
        aboutPopUp.style.display = "none";
        contactPopUp.style.display = "none";
    });
}

const header = document.getElementsByClassName("exHeader");
        
for(let i=0; i<header.length; i++) {
    header[i].addEventListener("click", function () {
        let body = this.nextElementSibling;
        if(body.style.display === "block")
            body.style.display = "none"
        else
            body.style.display = "block";
    });
} 
