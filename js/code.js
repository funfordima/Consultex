let time = document.querySelector(".time");
function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let sec = d.getSeconds();
    time.innerHTML = hours + ":" + mins + ":" + sec;
}
setInterval(printTime, 1000);
