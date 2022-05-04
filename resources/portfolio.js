function get_uptime() {
    var t1 = new Date(2022, 04, 01, 0, 0, 0, 0)
    var t2 = new Date()
    var dif = t1.getTime() - t2.getTime()

    seconds = dif / 1000;
    Seconds_Between_Dates = Math.round(Math.abs(seconds));
    document.getElementById("seconds").innerHTML = Seconds_Between_Dates;
    setTimeout(get_uptime, 1000);
}

get_uptime();