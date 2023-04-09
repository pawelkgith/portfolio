const contactDiv = document.querySelector(".contactPopUp"),
contactBtn = document.querySelector(".contactBtn"),
closeBtn = document.querySelector("#closeBtn");

contactBtn.addEventListener("click", () => {
    if(contactDiv.style.display === "block")
        contactDiv.style.display = "none"

    else
        contactDiv.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    contactDiv.style.display = "none";
});


