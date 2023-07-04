const daysCap = document.querySelector("#days"),
hoursCap = document.querySelector("#hours"),
minutesCap = document.querySelector("#minutes"),
secondsCap = document.querySelector("#seconds"),
resetBtn = document.querySelector("#reset"),
getDateBtn = document.querySelector("#getDate"),
dateInput = document.querySelector("#dateInput"),
expectedDateCap = document.querySelector("#expectedDate");

var intervalsArr = [];

const originalIntervalFn = window.setInterval;

window.setInterval = function(fn, delay){
  const id = originalIntervalFn(fn, delay);
  intervalsArr.push(id);
  return id;
}

window.clearAllInterval = function(){
  while(intervalsArr.length) {
    clearInterval(intervalsArr.pop());
  }
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
});

getDateBtn.addEventListener("click", () => {
    clearAllInterval();
    let givenDate = dateInput.value.split('/');

    switch(givenDate[1]) {
        case '1': givenDate[1] = "Jan"; break;
        case '2': givenDate[1] = "Feb"; break;
        case '3': givenDate[1] = "Mar"; break;
        case '4': givenDate[1] = "Apr"; break;
        case '5': givenDate[1] = "May"; break;
        case '6': givenDate[1] = "Jun"; break;
        case '7': givenDate[1] = "Jul"; break;
        case '8': givenDate[1] = "Aug"; break;
        case '9': givenDate[1] = "Sep"; break;
        case '10': givenDate[1] = "Oct"; break;
        case '11': givenDate[1] = "Nov"; break;
        case '12': givenDate[1] = "Dec"; break;
    }

    const expectedDate = new Date(`${givenDate[1]} ${givenDate[0]}, ${givenDate[2]}, 00:00:00`);
    var isDateValid = true;

    setInterval(() => {    
        let currentDate = new Date(),
        timeLeft = expectedDate - currentDate,
        daysLeft = Math.floor(timeLeft / 86400000),
        hoursLeft = Math.floor((timeLeft % 86400000) / 3600000),
        minutesLeft = Math.floor((timeLeft % 3600000) / 60000),
        secondsLeft = Math.floor((timeLeft % 60000) / 1000),
        dateArr = [daysLeft, hoursLeft, minutesLeft, secondsLeft];
        
        for(let i=0; i<dateArr.length; i++) {
            if(isNaN(dateArr[i])) {
                isDateValid = false;
            }
        }

        if(isDateValid) {
            if(currentDate > expectedDate) {
                dateArr = dateArr.map(el => Math.abs(el));
                expectedDateCap.innerText = "Given date is backwards";
            }

            else
                expectedDateCap.innerText = "";

            for(let i=0; i<dateArr.length; i++) {
                if(Number(dateArr[i]) < 10) {
                    dateArr[i] = `0${dateArr[i]}`;
                }
            }

            daysCap.innerText = dateArr[0];
            hoursCap.innerText = dateArr[1];
            minutesCap.innerText = dateArr[2];
            secondsCap.innerText = dateArr[3];
        }
        
        else
            expectedDateCap.innerText = "Invalid Date";
        
    }, 1000);

    console.log(givenDate);
    console.log(expectedDate);
});