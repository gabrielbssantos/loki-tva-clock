// Update Clock

function getCurrentTime() {
    
    let date = new Date();
    
    let time = {
        
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
        
    }
    
    return time;
    
};


function updateClock(clock, getTime) {
    
    let time = getTime();

    let secondAng = time.seconds * (360 / 60);
    let minuteAng = time.minutes * (360 / 60) + secondAng / 60;
    let hourAng = time.hours * (360 / 12) + minuteAng / 12;
    
    // move clock arms
    clock.hour.style.transform = `rotate(${hourAng}deg)`;
    clock.minute.style.transform = `rotate(${minuteAng}deg)`;
    clock.second.style.transform = `rotate(${secondAng}deg)`;
    
};

const CLOCK = {

    hour: document.getElementById("hour"),
    minute: document.getElementById("minute"),
    second: document.getElementById("second")

};


let interval = setInterval(() => {updateClock(CLOCK, getCurrentTime)}, 1000);