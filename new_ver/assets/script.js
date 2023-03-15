function Dates() {
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
    

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("date").innerText = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + ", " + hour + ":" + min + ":" + sec;
    // document.getElementById("date").innerText = date.getFullYear();

    setTimeout(Dates, 1000);
}

Dates();