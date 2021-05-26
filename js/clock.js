const hour = document.getElementById('hours');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');
function showCurrentTime() {
    let date = new date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.hetSeconds();
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    progress.style.width = (sec / 60) * 100 + '%'
}
setInterval(showCurrentTime, 1000)
