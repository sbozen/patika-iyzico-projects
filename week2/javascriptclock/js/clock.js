let name = prompt("Enter your name");
document.getElementById("myName").innerText = name
function showTime() {

    console.log(new Date());
    let date = new Date();
    let day = date.getDay();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59 
    //day to name
    let dayName = "";
    switch (day) {
        case 0:
            dayName = "Pazar";
            break;
        case 1:
            dayName = "Pazartesi";
            break;
        case 2:
            dayName = "Salı";
            break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + dayName;
    console.log(time);
    document.getElementById("myClock").innerText = time;
}
setInterval(showTime, 1000);
