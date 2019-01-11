// Declaring global variables
const clock = document.getElementById("clock");


//Setter klokkeslett

function setTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  function hourWithLeadingZero() {
    if (hour < 10) {
      return "0" + hour;
    } else {
      return hour;
    }
  }

  function minuteWithLeadingZero() {
    if (minute < 10) {
      return "0" + minute;
    } else {
      return minute;
    }
  }

  function secondWithLeadingZero() {
    if (second < 10) {
      return "0" + second;
    } else {
      return second;
    }
  }
  const klokkeslett =
    hourWithLeadingZero() +
    ":" +
    minuteWithLeadingZero() +
    ":" +
    secondWithLeadingZero();
    clock.textContent = klokkeslett;
}

// Starts clock on pageload
setTime();

//Set clock to update every second
setInterval(setTime, 1000);

// Adjusting style


// Changing background constructor(props)

function changeBackground(red) {
    document.body.style.backgroundColor = "(red)";
 }


