const caption = document.querySelector("h1");
const songsDiv = document.querySelector("#songs");
let songCounter = 0;

caption.addEventListener("click", () => {
    location.reload();
});

function addSong(title, author) {
    const mainDiv = document.querySelector("#songs"),
    songDiv = document.createElement("div"),
    buttonsDiv = document.createElement("div"),
    image = document.createElement("img"),
    h2 = document.createElement("h2"),
    h3 = document.createElement("h3"),
    listenBtn = document.createElement("input"),
    likeBtn = document.createElement("input"),
    path = title.split(/(?=[A-Z])/g).join("_").replace(/ /g, '').toLowerCase();
    songDiv.setAttribute("class", "song");
    songDiv.setAttribute("id", `song${songCounter}`);

    buttonsDiv.setAttribute("class", "songButtons");

    image.setAttribute("src", `../assets/images/${path}.png`);
    image.setAttribute("alt", `${author} - ${title} song image`);

    h2.innerText = title;
    h3.innerText = author;

    listenBtn.setAttribute("type", "button");
    listenBtn.setAttribute("class", "listenBtn");
    listenBtn.setAttribute("id", `listenBtn${songCounter}`);
    listenBtn.setAttribute("value", "\u25BA");

    likeBtn.setAttribute("type", "button");
    likeBtn.setAttribute("class", "likeBtn");
    likeBtn.setAttribute("id", `likeBtn${songCounter}`);

    buttonsDiv.appendChild(listenBtn);
    buttonsDiv.appendChild(likeBtn);
    songDiv.appendChild(image);
    songDiv.appendChild(h2);
    songDiv.appendChild(h3);
    songDiv.appendChild(buttonsDiv);
    mainDiv.appendChild(songDiv);

    songCounter++;
}

addSong("Praise The Lord", "A$AP Rocky");
addSong("Ale Przyps", "Yung Adisz");
addSong("Bez Serca", "Young Multi");
addSong("Camelot", "NLE Choppa");
addSong("Fly", "Vkie");
addSong("Invincible", "Pop Smoke");
addSong("Kfc", "Otsochodzi");
addSong("Lucid Dreams", "Juice WLRD");
addSong("Na Okrągło", "Kuban");
addSong("Nascar", "White Widow");
addSong("Pierwszy Krok", "Aleshen");
addSong("Poza Domem", "Pako");
addSong("Ransom", "Lil Tecca");
addSong("Sicko Mode", "Travis Scott");
addSong("Teren", "Asster");
addSong("Took Her To The O", "King Von");

const likeBtns = document.querySelectorAll(".likeBtn");
let isLiked = [];
for(let i=0; i<document.querySelectorAll(".song").length; i++) {
    isLiked.push(false);
}

// console.log(document.querySelector("#likeBtn0").style.backgroundImage);
likeBtns.forEach((el, i) => {
    if(!isLiked[i]) {
        el.style.backgroundImage = "url(../assets/images/unliked.png)";
    }

    else {
        el.style.backgroundImage = "url(../assets/images/liked.png)";
    }
    el.addEventListener("click", () => {
        if(!isLiked[i]) {
            el.style.backgroundImage = "url(../assets/images/liked.png)";
            isLiked[i] = true;
        }

        else {
            el.style.backgroundImage = "url(../assets/images/unliked.png)";
            isLiked[i] = false;
        }
    });
});

//TODO
//Zapis polubionych piosenek w playliscie do pliku JSON lub plikow lokalnych przegladarki
//System playlist (JSON)
//Searchbar