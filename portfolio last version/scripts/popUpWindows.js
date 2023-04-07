const contactDiv = document.querySelector(".contactPopUp"),
contactBtn = document.querySelector(".contactBtn");

contactBtn.addEventListener("click", () => {
    if(contactDiv.style.display === "block")
        contactDiv.style.display = "none"

    else
        contactDiv.style.display = "block";
});
