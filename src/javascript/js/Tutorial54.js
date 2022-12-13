console.log("This is Tutorial 54 file");

const alarmSubmit = document.getElementById("alarmSubmit");


//Add an event listener 
alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio(
  "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
);

//Function to play the alarm

function ringBell() {
  audio.play();
}


//This function will run whenever alarm is set from UI

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`Setting alarm for ${alarmDate}...`);
  now = new Date();
  let timeToAlarm = alarmDate - now;

  console.log(timeToAlarm);

  if (timeToAlarm >= 0) {
    setTimeout(() => {
        console.log('Ringing Now...')
      ringBell();
    }, timeToAlarm);
  }
}
