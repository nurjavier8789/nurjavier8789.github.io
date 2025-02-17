
let clickedText;
let popUpBox;

async function init() {
    this.clickedText = await document.getElementById("dcUsername");
    this.popUpBox = await document.getElementById("realDCUsername");
    clickedText.addEventListener("click", copyDCUsername);
}

function Dates() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);
    

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("date").innerText = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + ", " + hour + ":" + min + ":" + sec;
    // document.getElementById("date").innerText = date.getFullYear();

    setTimeout(Dates, 1000);
}

Dates();
init();

function copyDCUsername() {
    navigator.clipboard.writeText('nurjavier8789');
    this.popUpBox.classList.add("popUUp");

    setTimeout(() => {
        popUpBox.classList.remove("popUUp");
    }, 1500);
}
