// Declaring global variables
const clock = document.getElementById("clock");
const background = document.body.style.backgroundColor;

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
function randomColorNumbers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates random RGB-color starting point

randomR = randomColorNumbers(0, 255);
randomG = randomColorNumbers(0, 255);
randomB = randomColorNumbers(0, 255);

function changeBackgroundforreal() {
  // Initial functions creating of random numbers from 0-255 for color scale

  // Function for appending colors gradient by 1/255.

  console.log(randomR, randomG, randomB);

  function newRandomPlusOne(e) {
    if (e !== 255) {
      let b = e + 1;
      while (e < b) {
        e++;
        return e;
      }
    } else {
      e = 0;
      return e;
    }
  }

  console.log(newRandomPlusOne(randomR));
}

var i = 12;
function increment() {
  i++;
  document.getElementById("number").innerHTML = i;
}

function newRandomR() {
  if (randomR !== 255) {
    randomR++;
  } else {
    randomR = 0;
  }

}
function newRandomG() {
    if (randomG !== 255) {
      randomG++;
    } else {
      randomG = 0;
    }
    console.log(randomG);
  }

  function newRandomB() {
    if (randomB !== 255) {
      randomB++;
    } else {
      randomB = 0;
    }
    console.log(randomB);
  }

  function changeBackground2(){
    document.body.style.backgroundColor =
    "rgb(" + randomR + "," + randomG + "," + randomB + ")";
  };

function changeBackground(){
    newRandomR();
    newRandomG();
    newRandomB();
    changeBackground2();
}

setInterval(changeBackground, 1000);


// console.log(newRandomPlusOne(randomR));
// console.log(newRandomPlusOne(randomG));
// console.log(newRandomPlusOne(randomB));

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


