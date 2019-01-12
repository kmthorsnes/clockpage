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

// Initial functions creating of random numbers from 0-255 for color scale
function randomColorNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates random RGB-color starting point

randomR = randomColorNumbers(0, 255);
randomG = randomColorNumbers(0, 255);
randomB = randomColorNumbers(0, 255);

// Function for appending colors gradient by 1/255.

console.log(randomR, randomG, randomB);

function newRandomPlusOne(e) {
  let b = e + 1;
  while (e < b) {
    e++;
    return e;
  }
}

console.log(newRandomPlusOne(randomR));
console.log(newRandomPlusOne(randomG));
console.log(newRandomPlusOne(randomB));

// document.body.style.backgroundColor =
//   "rgb(" + randomR + "," + randomG + "," + randomB + ")";
//   console.log("rgb(" + randomR + "," + randomG + "," + randomB + ")");

// function runEverySecond() {
//   newRandomPlusOne(1);
//   // newRandomPlusOne(randomG);
//   //newRandomPlusOne(randomB);
//   //document.body.style.backgroundColor = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
//   //console.log("rgb(" + randomR + "," + randomG + "," + randomB + ")");
//   console.log(newRandomPlusOne(1));
// }

// setInterval(runEverySecond, 1000);
