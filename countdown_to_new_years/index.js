let newyears = new Date(2023, 0, 1);
let h1s = document.querySelectorAll('h1');


function countdown() {
    let now = new Date();
    let time = newyears - now;

    let seconds = Math.floor(time / 1000);

    let months = Math.floor(seconds / (60 * 60 * 24 * 30));
    let rem = seconds % (60 * 60 * 24 * 30);
    let days = Math.floor(rem / (60 * 60 * 24));
    rem = rem % (60 * 60 * 24);
    let hours = Math.floor(rem / (60 * 60));
    rem = rem % (60 * 60);
    let minutes = Math.floor(rem / 60);
    rem = rem % 60;
    seconds = Math.floor(rem);
    console.log(months, days, hours, minutes, seconds);
    h1s[0].innerHTML = months;
    h1s[1].innerHTML = days;
    h1s[2].innerHTML = hours;
    h1s[3].innerHTML = minutes;
    h1s[4].innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);