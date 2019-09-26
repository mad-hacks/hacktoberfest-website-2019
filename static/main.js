// Count Down Date
let countDownDate = new Date("Oct 3, 2019 09:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(() => {

    // Get todays date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 10) {
        Str = days.toString();
        days = Str.padStart(2, "0");
    }
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
        Str = hours.toString();
        hours = Str.padStart(2, "0");
    }
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        Str = minutes.toString();
        minutes = Str.padStart(2, "0");
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
        Str = seconds.toString();
        seconds = Str.padStart(2, "0");
    }
    
    // Output the result
    document.getElementById("demo").innerHTML = days + " " + '<img class="countdown-timer" src="static/images/3CountDown Divider.png">' + " " + hours + " " + '<img src="static/images/3CountDown Divider.png" class="countdown-timer">' + " " + minutes + " " + '<img class="countdown-timer" src="static/images/3CountDown Divider.png">' + " " + seconds;
    document.getElementById("demo1").innerHTML ="Days"+"&emsp;&emsp;&emsp;&ensp;"+"Hours"+"&emsp;&emsp;&emsp;"+"Minutes"+"&emsp;&emsp;"+"Seconds";
    // When the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "00 00 00 00";
    }
}, 1000);

