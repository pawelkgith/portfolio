const caption = document.querySelector(".caption"),
wpm = document.querySelector(".wpm"),
hour = document.querySelector(".hour"),
wordsField = document.querySelector(".randomWords__words"),
wordsInput = document.querySelector(".wordsInput__field"),
startBtn = document.querySelector(".start"),
resetBtn = document.querySelector(".reset"),
timer = document.querySelector(".timer");

let randomWords = ["snap", "taxi", "unit", "glory", "great", "dump", "wreck", "pat", "flour", "viable", "India", "England", "orbit", "rate", "stay", "grant", "revise", "cover", "kick", "just", "place", "is", "shine", "hand", "loud", "code", "cover", "mist", "patch", "moon", "herb", "likely", "no", "knit", "ranch", "climate", "flag", "enemy", "toss", "scene", "neck", "spoil", "rider", "chair", "race", "face", "rice", "lid", "first", "exact", "game", "plead", "ratio", "bitter", "ask", "run", "issue", "creep", "we", "cheek", "check", "side", "heart", "broken", "left", "sweat", "swim", "queue", "drain", "tree", "debt", "face", "rear", "blade", "vehicle", "tube", "retire", "dry", "fur", "technique", "thumb", "tenant", "low", "date", "stand", "cluster", "damn", "truth", "user", "dirty", "nun", "cycle", "fax", "hen", "chin", "amuse", "sink", "final", "gaffe", "lake", "heal", "period", "bill", "ranch", "ego", "girl", "love", "live", "stake", "news", "stack", "fall", "cherry", "confession", "jail", "stroll", "wheat", "arrow", "save", "heat", "virus", "useful", "press", "belong", "happen", "drift", "private", "circle", "hour", "year", "minute", "lead", "map", "benefit", "relax", "appeal", "junior", "snail", "nail", "bulb", "death", "carry", "snub", "mask", "choke", "spill", "age", "able", "culture", "related"], 
generatedWords = [], 
words = [],
validWords = [],
unvalidWords = [],
ifclicked = false,
counter = 0,
another = false;

wordsInput.setAttribute("disabled", true);

generateWords(generatedWords);

time();
showWords();

startBtn.addEventListener("click", start);
document.addEventListener("keydown", getWords);

resetBtn.addEventListener("click", () => {
    window.location.reload();
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

caption.addEventListener("click", () => {
    location.href = "";
});

function generateWords(arr) {
    for(let i=0; i<100; i++) {
        let randomIndex = Math.floor(Math.random() * randomWords.length);
        arr.push(randomWords[randomIndex]);
    }
    return arr;
}

function showWords() {
    for(let i=0; i<generatedWords.length; i++) {
        let span = document.createElement("span");
        wordsField.appendChild(span);
        span.setAttribute("class", "span"+i);
        span.innerHTML += `${generatedWords[i]} `;
    }
}

function start() {
    wordsInput.removeAttribute("disabled");
    startBtn.setAttribute("disabled", true);
    wordsInput.focus();
    wordsInput.value = "";
    ifclicked = true;

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
        }
    }, 1000);
    return;
}

function getWords(event) {
    const key = event.keyCode;
    let v;
    if(counter === 0) 
        document.querySelector(".span0").style.color = "gray"; 

    else {
        document.querySelector(".span"+counter).style.color = "gray"; 
        document.querySelector(".span"+(counter-1)).style.color = "black"; 
    }

    if(key === 32 && ifclicked === true) {
        counter++;
        v = wordsInput.value;
        v = v.replace(/ /g, "");
        words.push(v);
        wordsInput.value = "";
        another = true;
    }
}

function countWPM(valW, unvW) {
    for(let i=0; i<words.length; i++) {
        if(words[i] === generatedWords[i])
            valW.push(words[i]);
        else
            unvW.push(words[i]);
    }

    wpm.innerText = `${valW.length} WPM`;
}