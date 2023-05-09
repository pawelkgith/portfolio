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

//localStorage.clear();
const likeBtns = document.querySelectorAll(".likeBtn");
if(localStorage.getItem("playlists") === null) {
    const songs = document.querySelectorAll(".song");
    let isLiked = [];
    songs.forEach(() => isLiked.push(false));
    localStorage.setItem("playlists", JSON.stringify(isLiked));

    likeBtns.forEach((el, i) => {
        el.addEventListener("click", () => {
            if(!JSON.parse(localStorage.getItem("playlists"))[i]) {
                el.style.backgroundImage = "url(../assets/images/liked.png)";
                let task = JSON.parse(localStorage.getItem("playlists"));
                task[i] = true;
                localStorage.setItem("playlists", JSON.stringify(task));
            }

            else {
                el.style.backgroundImage = "url(../assets/images/unliked.png)";
                let task = JSON.parse(localStorage.getItem("playlists"));
                task[i] = false;
                localStorage.setItem("playlists", JSON.stringify(task));
            }
        });
    });
}

else {
    likeBtns.forEach((el, i) => {
        if(!JSON.parse(localStorage.getItem("playlists"))[i])
            el.style.backgroundImage = "url(../assets/images/unliked.png)";
        else
            el.style.backgroundImage = "url(../assets/images/liked.png)";

        el.addEventListener("click", () => {
            if(!JSON.parse(localStorage.getItem("playlists"))[i]) {
                el.style.backgroundImage = "url(../assets/images/liked.png)";
                let task = JSON.parse(localStorage.getItem("playlists"));
                task[i] = true;
                localStorage.setItem("playlists", JSON.stringify(task));
            }

            else {
                el.style.backgroundImage = "url(../assets/images/unliked.png)";
                let task = JSON.parse(localStorage.getItem("playlists"));
                task[i] = false;
                localStorage.setItem("playlists", JSON.stringify(task));
            }
        });
    });
}

//Zapis polubionych piosenek w playliscie do pliku JSON w plikach lokalnych przegladarki <-- DONE
//System playlist (JSON) <-- TODO
//Searchbar <-- TODO
