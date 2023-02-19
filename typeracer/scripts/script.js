const caption = document.querySelector(".caption"),
wpm = document.querySelector(".wpm"),
hour = document.querySelector(".hour"),
wordsField = document.querySelector(".randomWords__words"),
wordsInput = document.querySelector(".wordsInput__field"),
startBtn = document.querySelector(".start"),
resetBtn = document.querySelector(".reset"),
timer = document.querySelector(".timer"),
languagePopUp = document.querySelector(".language"),
languageBtn = document.querySelector(".languageBtn"),
englishBtn = document.querySelector(".english"),
polishBtn = document.querySelector(".polish"),
closeBtn = document.querySelector(".close"),
extremeBtn = document.querySelector(".extreme");

let englishRandomWords = ["snap", "taxi", "unit", "glory", "great", "dump", "wreck", "pat", "flour", "viable", "India", "England", "orbit", "rate", "stay", "grant", "revise", "cover", "kick", "just", "place", "is", "shine", "hand", "loud", "code", "cover", "mist", "patch", "moon", "herb", "likely", "no", "knit", "ranch", "climate", "flag", "enemy", "toss", "scene", "neck", "spoil", "rider", "chair", "race", "face", "rice", "lid", "first", "exact", "game", "plead", "ratio", "bitter", "ask", "run", "issue", "creep", "we", "cheek", "check", "side", "heart", "broken", "left", "sweat", "swim", "queue", "drain", "tree", "debt", "face", "rear", "blade", "vehicle", "tube", "retire", "dry", "fur", "technique", "thumb", "tenant", "low", "date", "stand", "cluster", "damn", "truth", "user", "dirty", "nun", "cycle", "fax", "hen", "chin", "amuse", "sink", "final", "gaffe", "lake", "heal", "period", "bill", "ranch", "ego", "girl", "love", "live", "stake", "news", "stack", "fall", "cherry", "confession", "jail", "stroll", "wheat", "arrow", "save", "heat", "virus", "useful", "press", "belong", "happen", "drift", "private", "circle", "hour", "year", "minute", "lead", "map", "benefit", "relax", "appeal", "junior", "snail", "nail", "bulb", "death", "carry", "snub", "mask", "choke", "spill", "age", "able", "culture", "related"], 
polishRandomWords = ["klarnet", "kucać", "rury", "kac", "wąs", "cacko", "kiosk", "cacko", "iteracja", "spokój", "brudny", "wąs", "wąż", "bufet", "zraniony", "serce", "złamać", "ciekły", "kraj", "rower", "kapitał", "puree", "autor", "kulomb", "syrop", "wyjazd", "pismo", "kran", "arka", "szata", "marny", "mama", "tata", "warty", "zima", "lato", "wiosna", "jesień", "tak", "nie", "lenis", "seler", "ubój", "bitwa", "czub", "antena", "bogaty", "wadliwy", "dalekie", "wilczy", "piracki", "czcić", "powrót", "kupon", "grawer", "fusy", "obiad", "rogalik", "mysz", "klawiatura", "uprawa", "rdza", "czat", "grota", "zajazd", "kanał", "miłość", "chmiel", "piec", "płeć", "hektar", "kit", "biały", "czarny", "mowa", "polski", "latać", "piec", "azot", "poza", "sztuka", "próba", "ptak", "deska", "guzik", "palić", "prąd", "milion", "program", "ucho", "głowa", "ręka", "pies", "dok", "silnik", "strach", "stopa", "flaga", "kura", "niski", "mleko", "matka", "mgła", "nerw", "szyja", "żyła", "pies", "kij", "srebro", "namiot", "smak", "rana", "słowo", "waga", "cyna", "kciuk", "palec", "ogon", "sens", "żagiel", "pokazać", "skarpeta", "system", "konto", "powietrze", "łuk", "brat", "chleb", "brat", "krzak", "cewka", "lalka", "lot", "ciało", "osoba", "kochać", "siła", "żaba", "oko", "ruch", "imię", "zupa", "rejs", "gość", "fale", "pisarz", "wełna", "drzewo", "cukier", "stop"],
generatedWords = [], 
words = [],
validWords = [],
unvalidWords = [],
language = 1,
ifclicked = false,
counter = 0;

wordsInput.setAttribute("disabled", true);

generateWords(generatedWords);
time();
showWords();

startBtn.addEventListener("click", start);
languageBtn.addEventListener("click", changeLanguage);

resetBtn.addEventListener("click", () => {
    window.location.reload();
});

caption.addEventListener("click", () => {
    location.href = "";
});

function time() {
    let hours, minutes, date;
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    hour.innerText = `${hours}:${minutes}`;
    let a = setTimeout(() => {
        time();
    }, 1000);
}

function generateWords(arr) {
    switch(language) {
        case 1:
            for(let i=0; i<100; i++) {
                let randomIndex = Math.floor(Math.random() * englishRandomWords.length);
                arr.push(englishRandomWords[randomIndex]);
            }
        break;
        case 2:
            for(let i=0; i<100; i++) {
                let randomIndex = Math.floor(Math.random() * polishRandomWords.length);
                arr.push(polishRandomWords[randomIndex]);
            }
        break;
        case 3:
            let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`!@#$%^&*()-+{}\|';,.<>?/".split('');
            for(let i=0; i<80; i++) {
                let randomWord = [];
                for(let i=0; i<10; i++) {    
                    let randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord.push(characters[randomIndex]);
                }
                randomWord = randomWord.join('');
                arr.push(randomWord);
            }
    }
    return arr;
}

function showWords() {
    for(let i=0; i<generatedWords.length; i++) {
        let span = document.createElement("span");
        wordsField.appendChild(span);
        span.setAttribute("class", "span"+i);
        span.setAttribute("id", "span");
        span.innerHTML += `${generatedWords[i]} `;
    }
}

function start() {
    wordsInput.removeAttribute("disabled");
    startBtn.setAttribute("disabled", true);
    languageBtn.setAttribute("disabled", true);
    wordsInput.focus();
    wordsInput.value = "";
    ifclicked = true;
    document.addEventListener("keydown", getWords);

    let timeRemaining = 60;
    timer.innerHTML = `1:00`;

    let timerInterval = setInterval(() => {
        timeRemaining--;
        if(timeRemaining >= 10)
            timer.innerHTML = `00:${timeRemaining}`;
        else
            timer.innerHTML = `00:0${timeRemaining}`;
        
        if(timeRemaining === 0) {
            clearInterval(timerInterval);
            wordsInput.setAttribute("disabled", true);
            countWPM(validWords, unvalidWords);
            ifclicked = false;
        }
    }, 1000);
    return;
}

function getWords(event) {
    const key = event.keyCode;
    let v;
    document.querySelector(".span"+counter).style.color = "gray"; 

    if(key === 32 && ifclicked) {
        counter++;
        v = wordsInput.value;
        v = v.replace(/ /g, "");
        words.push(v);
        if(generatedWords[counter-1] === v)
            document.querySelector(".span"+(counter-1)).style.color = "green"
        else
            document.querySelector(".span"+(counter-1)).style.color = "red";
        wordsInput.value = "";
    }
}

function countWPM(valW, unvW) {
    for(let i=0; i<words.length; i++) {
        if(words[i] === generatedWords[i])
            valW.push(words[i]);
        else
            unvW.push(words[i]);
    }

    let speed = Math.round(valW.map(el => el.split('').length).reduce((a,b) => a+b) / 4);
    wpm.innerText = `${speed} WPM`;
}

function changeLanguage() {
    if(languagePopUp.style.display == "block") {
        languagePopUp.style.display = "none";
        startBtn.removeAttribute("disabled");
    }

    else {
        languagePopUp.style.display = "block";
        startBtn.setAttribute("disabled", true);
    }

    closeBtn.addEventListener("click", () => {
        languagePopUp.style.display = "none";
        startBtn.removeAttribute("disabled");
    });

    polishBtn.addEventListener("click", () => {
        const elements = document.querySelectorAll("#span");
        elements.forEach(el => el.remove());
        language = 2;
        generatedWords = [];
        generateWords(generatedWords);
        showWords();
    });

    englishBtn.addEventListener("click", () => {
        const elements = document.querySelectorAll("#span");
        elements.forEach(el => el.remove());
        language = 1;
        generatedWords = [];
        generateWords(generatedWords);
        showWords();
    });

    extremeBtn.addEventListener("click", () => {
        const elements = document.querySelectorAll("#span");
        elements.forEach(el => el.remove());
        language = 3;
        generatedWords = [];
        generateWords(generatedWords);
        showWords();
    });
}
