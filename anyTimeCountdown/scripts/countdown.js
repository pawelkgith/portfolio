const dateInput = document.querySelector("#dateInput"),
secondsDiv = document.querySelector("#seconds"),
hoursDiv = document.querySelector("#hours"),
minutesDiv = document.querySelector("#minutes"),
daysDiv = document.querySelector("#days"),
startBtn = document.querySelector("#getDate"),
resetBtn = document.querySelector("#reset"),
expectedDateCap = document.querySelector("#expectedDate");

function getCountdown() {
    let givenDate = dateInput.value.split('/'),
    seconds = 1000, 
    minutes = seconds * 60, 
    hours = minutes * 60, 
    days = hours * 24;
    
    switch(givenDate[1]) {
        case '1': givenDate[1] = 'Jan'; break;
        case '2': givenDate[1] = 'Feb'; break;
        case '3': givenDate[1] = 'Mar'; break;
        case '4': givenDate[1] = 'Apr'; break;
        case '5': givenDate[1] = 'May'; break;
        case '6': givenDate[1] = 'Jun'; break;
        case '7': givenDate[1] = 'Jul'; break;
        case '8': givenDate[1] = 'Aug'; break;
        case '9': givenDate[1] = 'Sep'; break;
        case '10': givenDate[1] = 'Oct'; break;
        case '11': givenDate[1] = 'Nov'; break;
        case '12': givenDate[1] = 'Dec'; break;
    }
    
    const expectedDate = new Date(`${givenDate[1]} ${givenDate[0]}, ${givenDate[2]} 00:00:00`);
    var isDateValid = true;

    let countdownInterval = setInterval(() => {
        const currentDate = new Date();
        let timeLeft = expectedDate - currentDate,
        daysLeft = Math.floor(timeLeft / days),
        hoursLeft = Math.floor((timeLeft % days) / hours);
        minutesLeft = Math.floor((timeLeft % hours) / minutes),
        secondsLeft = Math.floor((timeLeft % minutes) / seconds),
        arr = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

        for(let i=0; i<arr.length; i++) {
            if(isNaN(arr[i])) {
                isDateValid = false;
            }
        }

        if(isDateValid) {
            if(currentDate > expectedDate) {
                arr = arr.map(el => Math.abs(el));
                expectedDateCap.innerText = "Given date is backwards";
            }
           
            else
                expectedDateCap.innerText = "";

            for(let i=0; i<arr.length; i++) {
                if(arr[i] < 10) {
                    arr[i] = `0${arr[i]}`;
                }
            }
            
            daysDiv.innerText = arr[0];
            hoursDiv.innerText = arr[1];
            minutesDiv.innerText = arr[2];
            secondsDiv.innerText = arr[3];
        }

        else
            expectedDateCap.innerText = "Invalid date";

        
    });
}

startBtn.addEventListener("click", getCountdown);
resetBtn.addEventListener("click", () => location.reload());