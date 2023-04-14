const caption = document.querySelector("#caption") as HTMLHeadingElement,
wpm = document.querySelector("#wpm") as HTMLParagraphElement,
hour = document.querySelector("#hour") as HTMLParagraphElement,
wordsField = document.querySelector("#randomWords__words") as HTMLDivElement,
wordsInput = document.querySelector("#wordsInput__field") as HTMLInputElement,
startBtn = document.querySelector("#startBtn") as HTMLButtonElement,
resetBtn = document.querySelectorAll("#resetBtn") as NodeListOf<HTMLButtonElement>,
timer = document.querySelector("#timer") as HTMLParagraphElement,
languagePopUp = document.querySelector("#language") as HTMLDivElement,
languageBtn = document.querySelector("#languageBtn") as HTMLButtonElement,
submitPopUp = document.querySelector("#submit") as HTMLDivElement,
englishBtn = document.querySelector("#english") as HTMLButtonElement,
polishBtn = document.querySelector("#polish") as HTMLButtonElement,
closeBtn = document.querySelector("#close") as HTMLParagraphElement,
extremeBtn = document.querySelector("#extreme") as HTMLButtonElement,
wpmResult = document.querySelector("#submit__wpmResult") as HTMLParagraphElement,
ksResult = document.querySelector("#submit__keystrokesResult") as HTMLParagraphElement,
vWords = document.querySelector("#submit__validWords") as HTMLParagraphElement,
uvWords = document.querySelector("#submit__unvalidWords") as HTMLParagraphElement;

let englishRandomWords:string[] = ["snap", "taxi", "unit", "glory", "great", "dump", "wreck", "pat", "flour", "viable", "India", "England", "orbit", "rate", "stay", "grant", "revise", "cover", "kick", "just", "place", "is", "shine", "hand", "loud", "code", "cover", "mist", "patch", "moon", "herb", "likely", "no", "knit", "ranch", "climate", "flag", "enemy", "toss", "scene", "neck", "spoil", "rider", "chair", "race", "face", "rice", "lid", "first", "exact", "game", "plead", "ratio", "bitter", "ask", "run", "issue", "creep", "we", "cheek", "check", "side", "heart", "broken", "left", "sweat", "swim", "queue", "drain", "tree", "debt", "face", "rear", "blade", "vehicle", "tube", "retire", "dry", "fur", "technique", "thumb", "tenant", "low", "date", "stand", "cluster", "damn", "truth", "user", "dirty", "nun", "cycle", "fax", "hen", "chin", "amuse", "sink", "final", "gaffe", "lake", "heal", "period", "bill", "ranch", "ego", "girl", "love", "live", "stake", "news", "stack", "fall", "cherry", "confession", "jail", "stroll", "wheat", "arrow", "save", "heat", "virus", "useful", "press", "belong", "happen", "drift", "private", "circle", "hour", "year", "minute", "lead", "map", "benefit", "relax", "appeal", "junior", "snail", "nail", "bulb", "death", "carry", "snub", "mask", "choke", "spill", "age", "able", "culture", "related"], 
polishRandomWords:string[] = ["klarnet", "kucać", "rury", "kac", "wąs", "cacko", "kiosk", "cacko", "iteracja", "spokój", "brudny", "wąs", "wąż", "bufet", "zraniony", "serce", "złamać", "ciekły", "kraj", "rower", "kapitał", "puree", "autor", "kulomb", "syrop", "wyjazd", "pismo", "kran", "arka", "szata", "marny", "mama", "tata", "warty", "zima", "lato", "wiosna", "jesień", "tak", "nie", "lenis", "seler", "ubój", "bitwa", "czub", "antena", "bogaty", "wadliwy", "dalekie", "wilczy", "piracki", "czcić", "powrót", "kupon", "grawer", "fusy", "obiad", "rogalik", "mysz", "klawiatura", "uprawa", "rdza", "czat", "grota", "zajazd", "kanał", "miłość", "chmiel", "piec", "płeć", "hektar", "kit", "biały", "czarny", "mowa", "polski", "latać", "piec", "azot", "poza", "sztuka", "próba", "ptak", "deska", "guzik", "palić", "prąd", "milion", "program", "ucho", "głowa", "ręka", "pies", "dok", "silnik", "strach", "stopa", "flaga", "kura", "niski", "mleko", "matka", "mgła", "nerw", "szyja", "żyła", "pies", "kij", "srebro", "namiot", "smak", "rana", "słowo", "waga", "cyna", "kciuk", "palec", "ogon", "sens", "żagiel", "pokazać", "skarpeta", "system", "konto", "powietrze", "łuk", "brat", "chleb", "brat", "krzak", "cewka", "lalka", "lot", "ciało", "osoba", "kochać", "siła", "żaba", "oko", "ruch", "imię", "zupa", "rejs", "gość", "fale", "pisarz", "wełna", "drzewo", "cukier", "stop"],
generatedWords:string[] = [], 
words:string[] = [],
validWords:string[] = [],
unvalidWords:string[] = [],
ifclicked:boolean = false,
counter:number = 0;

if(localStorage.language === undefined)
    localStorage.language = '1';

wordsInput.disabled = true;

generateWords(generatedWords);
time();
showWords();

startBtn.addEventListener("click", start);
languageBtn.addEventListener("click", changeLanguage);

resetBtn.forEach(el => 
    el.addEventListener("click", () => {
        window.location.reload();
}));

caption.addEventListener("click", () => {
    location.href = "";
});

function time():void {
    let hours:number, minutes:number, date:Date;
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    hour.innerText = `${hours}:${minutes}`;
    let a = setTimeout(() => {
        time();
    }, 1000);
}

function generateWords(arr:string[]):string[] {
    switch(localStorage.language) {
        case '1':
            for(let i=0; i<100; i++) {
                let randomIndex:number = Math.floor(Math.random() * englishRandomWords.length);
                arr.push(englishRandomWords[randomIndex]);
            }
        break;
        case '2':
            for(let i=0; i<100; i++) {
                let randomIndex:number = Math.floor(Math.random() * polishRandomWords.length);
                arr.push(polishRandomWords[randomIndex]);
            }
        break;
        case '3':
            let characters:string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`!@#$%^&*()-+{}\|';,.<>?/".split('');
            for(let i=0; i<80; i++) {
                let randomWord:string[] = [];
                for(let i=0; i<10; i++) {    
                    let randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord.push(characters[randomIndex]);
                }
                arr.push(randomWord.join(''));
            }
        break;
    }
    return arr;
}

function showWords():void {
    for(let i=0; i<generatedWords.length; i++) {
        let span:HTMLSpanElement = document.createElement("span");
        wordsField.appendChild(span);
        span.setAttribute("class", "span"+i);
        span.setAttribute("id", "span");
        span.innerHTML += `${generatedWords[i]} `;
    }
}

function start():void {
    wordsInput.removeAttribute("disabled");
    startBtn.disabled = true;
    languageBtn.disabled = true;
    wordsInput.focus();
    wordsInput.value = "";
    ifclicked = true;
    document.addEventListener("keydown", getWords);

    let timeRemaining = 30;
    timer.innerHTML = `00:30`;

    let timerInterval = setInterval(() => {
        timeRemaining--;
        timer.innerHTML = timeRemaining >=10 ? `00:${timeRemaining}` : `00:0${timeRemaining}`;
        
        if(timeRemaining === 0) {
            clearInterval(timerInterval);
            wordsInput.disabled = true;
            countWPM(validWords, unvalidWords);
            ifclicked = false;
            submitPopUp.style.display = "block";
        }
    }, 1000);
    return;
}

function getWords(event:any):void {
    console.log(event);
    const key = event.keyCode;
    let v:string;
    let currentSpan:any = document.querySelector(`.span${counter}`);
    currentSpan.style.color = "gray";

    if(key === 32 && ifclicked) {
        counter++;
        v = wordsInput.value;
        v = v.replace(/ /g, "");
        words.push(v);

        let color:string = generatedWords[counter-1] === v ? "green" : "red",
        previousSpan:any = document.querySelector(`.span${counter-1}`);
        previousSpan.style.color = color;
        wordsInput.value = "";
    }
}

function countWPM(valW:string[], unvW:string[]):void {
    for(let i=0; i<words.length; i++) {
        words[i] === generatedWords[i] ? valW.push(words[i]) : unvW.push(words[i]);
    }

    let keyStrokes = Math.round(valW.map(el => el.split('').length).reduce((a,b) => a+b)),
    speed = Math.round((keyStrokes / 4) * 2);
    wpm.innerText = `${speed} WPM`;
    wpmResult.innerText = `${speed} WPM`;
    ksResult.innerText = `${keyStrokes} keystrokes`;
    vWords.innerText = `${valW.length} valid words`;
    uvWords.innerText = `${unvW.length} unvalid words`;
}

function changeLanguage():void {
    if(languagePopUp.style.display == "block") {
        languagePopUp.style.display = "none";
        startBtn.removeAttribute("disabled");
    }

    else {
        languagePopUp.style.display = "block";
        startBtn.disabled = true;
    }

    closeBtn.addEventListener("click", () => {
        languagePopUp.style.display = "none";
        startBtn.removeAttribute("disabled");
    });

    const btns:HTMLButtonElement[] = [englishBtn, polishBtn, extremeBtn];
    btns.forEach((el, i) => {
        el.addEventListener("click", () => {
            const elements = document.querySelectorAll("#span");
            elements.forEach(el => el.remove());
            localStorage.language = (i + 1);
            generatedWords = [];
            generateWords(generatedWords);
            showWords();
        });
    });
}