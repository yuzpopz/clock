function clock(){
    var monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + ", " +
    today.getDate() + ' ' + monthNames[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = h < 10 ? '0' + h: h;
    m = m < 10 ? '0' + m: m;
    s = s < 10 ? '0' + s: s;

    document.getElementById('bcdigit1').innerHTML = h.toString().charAt(0);
    document.getElementById('bcdigit2').innerHTML = h.toString().charAt(1);
    document.getElementById('bcdigit3').innerHTML = m.toString().charAt(0);
    document.getElementById('bcdigit4').innerHTML = m.toString().charAt(1);
    document.getElementById('bcdigit5').innerHTML = s.toString().charAt(0);
    document.getElementById('bcdigit6').innerHTML = s.toString().charAt(1);

    document.querySelector('.clock sec').style.marginTop = (119.6 - parseFloat(s) / 59 * (119.6 - 64)) + "px";

    
}
setInterval(clock, 1000);