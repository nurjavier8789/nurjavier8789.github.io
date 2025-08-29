let clickedText;
let popUpBox;

async function copyDiscordUsername() {
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

function countMyAges() {
    const idMyAge = document.getElementById("myAge");
    var date = new Date();
    var myAgeNow = 0;
    var myBirthday = 2006;
    var currentYears = date.getFullYear();
    var currentMonth = date.getMonth() + 1;
    var currentDate = date.getDate();

    if (currentMonth === 6 && currentDate === 16) {
        myAgeNow = currentYears - myBirthday;
        idMyAge.innerText = "I'm " + myAgeNow + " Years Old!";
        document.getElementById("myDay").style.display = "block";
        document.getElementById("myDay").innerText = "[ Today is my birthday!! 🎉 ]";
    } else if (currentMonth >= 6 && currentDate >= 16) {
        myAgeNow = currentYears - myBirthday;
        idMyAge.innerText = "I'm " + myAgeNow + " Years Old!";
    } else if (currentMonth <= 6 && currentDate <= 16) {
        myAgeNow = (currentYears - myBirthday) - 1;
        idMyAge.innerText = "I'm " + myAgeNow + " Years Old!";
    }

    console.log(document.getElementById("myDay"));
}

if (document.URL.includes("index.html")) {
    Dates();
} else if (document.URL.includes("about.html")) {
    countMyAges();
} else if (document.URL.includes("social.html")) {
    copyDiscordUsername();
}

function copyDCUsername() {
    navigator.clipboard.writeText('nurjavier8789');
    this.popUpBox.classList.add("popUUp");

    setTimeout(() => {
        popUpBox.classList.remove("popUUp");
    }, 1500);
}
