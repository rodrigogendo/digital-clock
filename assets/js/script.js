window.onload = displayClock()

function displayClock() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    h = (h < 10) ? "0"+h : h;
    m = (m < 10) ? "0"+m : m;
    s = (s < 10) ? "0"+s : s;
    
    setTimeout(displayClock, 1000);

    document.querySelector('.clock-area').innerHTML = `${h}h : ${m}m : ${s}s `;
}