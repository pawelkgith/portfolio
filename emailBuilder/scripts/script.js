/* let txt = [] 
txt = document.querySelectorAll("#i");

document.querySelector(".btn").onclick = () => {
    navigator.clipboard.writeText(txt[0].innerHTML + txt[1].innerHTML);
} */

const recipents = document.querySelectorAll(".recipents"),
examples = document.querySelectorAll(".examples"),
endings = document.querySelectorAll(".endings"),
greetings = document.querySelectorAll(".greetings"),
recipentsDiv = document.querySelector("#body__recipents"),
examplesDiv = document.querySelector("#body__examples"),
endingsDiv = document.querySelector("#body__endings"),
greetingsDiv = document.querySelector("#body__greetings"),
copyBtn = document.querySelector("#copy"),
resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    window.location.reload();
});

for(let i=0; i<recipents.length; i++) {
    recipents[i].addEventListener("click", () => {
        const resolution = screen.width;
        let fs = 0.1;
        //375, 768, 1000
        let text = recipents[i].value;
        recipents.forEach(el => el.remove());
        let p = document.createElement("p");
        p.setAttribute("id", "generatedText");
        p.textContent = text;
        recipentsDiv.append(p);
        let recipentsInterval = setInterval(() => {
            p.style.fontSize = `${fs}rem`;
            fs += 0.1;

            if((resolution >= 0 && resolution <=375 && fs >= 1.5) || (resolution > 375 && resolution <=768 && fs >= 2) || (resolution > 768 && fs >= 2.5))
                clearInterval(recipentsInterval);

        }, 1);
    });
}

for(let i=0; i<examples.length; i++) {
    examples[i].addEventListener("click", () => {
        const resolution = screen.width;
        let fs = 0.1;
        let text = examples[i].value;
        examples.forEach(el => el.remove());
        let p = document.createElement("p");
        p.setAttribute("id", "generatedText");
        p.textContent = text;
        examplesDiv.append(p);
        let examplesInterval = setInterval(() => {
            p.style.fontSize = `${fs}rem`;
            fs+=0.1;

            if((resolution >= 0 && resolution <=375 && fs >= 1.5) || (resolution > 375 && resolution <=768 && fs >= 2) || (resolution > 768 && fs >= 2.5))
                clearInterval(examplesInterval);
        }, 1);
    });
}

for(let i=0; i<endings.length; i++) {
    endings[i].addEventListener("click", () => {
        const resolution = screen.width;
        let fs = 0.1;
        let text = endings[i].value;
        endings.forEach(el => el.remove());
        let p = document.createElement("p");
        p.setAttribute("id", "generatedText");
        p.textContent = text;
        endingsDiv.append(p);
        let endingsInterval = setInterval(() => {
            p.style.fontSize = `${fs}rem`;
            fs+=0.1;

            if((resolution >= 0 && resolution <=375 && fs >= 1.5) || (resolution > 375 && resolution <=768 && fs >= 2) || (resolution > 768 && fs >= 2.5))
                clearInterval(endingsInterval);
        }, 1);
    });
}


for(let i=0; i<greetings.length; i++) {
    const resolution = screen.width;
    greetings[i].addEventListener("click", () => {
        let fs = 0.1;
        let text = greetings[i].value;
        greetings.forEach(el => el.remove());
        let p = document.createElement("p");
        p.setAttribute("id", "generatedText");
        p.textContent = text;
        greetingsDiv.append(p);
        let greetingsInterval = setInterval(() => {
            p.style.fontSize = `${fs}rem`;
            fs+=0.1;

            if((resolution >= 0 && resolution <=375 && fs >= 1.5) || (resolution > 375 && resolution <=768 && fs >= 2) || (resolution > 768 && fs >= 2.5))
                clearInterval(greetingsInterval);
        }, 1);
    });
}

copyBtn.addEventListener("click", () => {
    let generatedTexts = document.querySelectorAll("#generatedText");
    console.log(generatedTexts.length);
    console.log(generatedTexts);
    if(generatedTexts.length === 4) {
        let toCopy = [];
        for(let i=0; i<generatedTexts.length; i++) {
            toCopy.push(generatedTexts[i].innerText + " ");
        }
        toCopy.unshift(document.querySelector("#subject__input").value);
        toCopy.unshift(document.querySelector("#recipent__input").value)
        toCopy[toCopy.length-1] += document.querySelector("#signature__input").value;
        //toCopy.splice(4, 0, document.querySelector(".body__input").value);
        toCopy[3] += `${document.querySelector("#body__input").value}`;
        console.log(toCopy);
        toCopy = toCopy.join('\n');
        navigator.clipboard.writeText(toCopy);
        console.log(toCopy);
    }
});