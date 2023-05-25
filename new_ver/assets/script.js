function Datess() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    // var day = date.getDay();
    // var dates = date.getDate();
    // var month = date.getMonth();
    // var year = date.getFullYear();

    var clock = hour + ":" + min + ":" + sec;

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("datepcud").innerText = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("timepcud").innerText = clock;

    document.getElementById("datepc").innerText = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("timepc").innerText = clock;

    // still waiting for position :V
    // document.getElementById("time").innerText = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + ", " + hour + ":" + min + ":" + sec;

    setTimeout(Datess, 1000);
}

Datess();