const aboutBtn = document.getElementById("aboutBtn"),
aboutPopUp = document.getElementById("aboutPopUp"),
closeBtn = document.getElementById("closeBtn");

aboutBtn.addEventListener("click", () => {
    if(aboutPopUp.style.display === "block")
        aboutPopUp.style.display = "none";
    
    else
        aboutPopUp.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    aboutPopUp.style.display = "none";
});
