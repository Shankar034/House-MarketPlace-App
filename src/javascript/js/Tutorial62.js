console.log("This is Wall Clock");


function updateClock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    let timeOfDay = (currentHour< 12) ? "AM" :"PM";
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + ":" +currentSeconds + "" + timeOfDay;

    document.getElementById("clock").innerHTML = currentTimeStr;

}