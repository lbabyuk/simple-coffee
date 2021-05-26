const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
 
const currentYear = new Date().getFullYear();
const newFinalTime = new Date(`May 31 ${currentYear} 00:00:00`);

function updateClockContainerTime() {
    const currentTime = new Date();
    const Time = newFinalTime - currentTime;
    const day = Math.floor(Time/1000/60/60/24);
    const hour = Math.floor(Time/1000/60/60) % 24;
    const minute = Math.floor(Time/1000/60) % 60;

    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = minute < 10 ? + minute : minute;
 }

setInterval(updateClockContainerTime, 1000);
