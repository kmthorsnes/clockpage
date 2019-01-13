// Declaring global variables
let clock = document.getElementById("clock");
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
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


// New take on colorGradient-change codebase from: https://hugogiraudel.com/2015/01/12/color-clock-experiment/

function RGBFromDate() {
    const date = new Date();
    hour =  date.getHours() / 24 * 255;
    minute =  date.getMinutes() / 60 * 255;
    second =  date.getSeconds() / 60 * 255;
    RGBhour = Math.round(hour);
    RGBminute = Math.round(minute);
    RGBsecond = Math.round(second);
    console.log(RGBhour, RGBminute, RGBsecond);
    document.body.style.backgroundColor =
    "rgb(" + RGBhour + "," + RGBminute + "," + RGBsecond + ")"
}
    
setInterval(RGBFromDate, 100);





// // Adjusting style

// // Changing background constructor(props)
// function randomColorNumbers(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Creates random RGB-color starting point

// randomR = randomColorNumbers(0, 255);
// randomG = randomColorNumbers(0, 255);
// randomB = randomColorNumbers(0, 255);

// function changeBackgroundforreal() {
//   // Initial functions creating of random numbers from 0-255 for color scale

//   // Function for appending colors gradient by 1/255.

//   console.log(randomR, randomG, randomB);

//   function newRandomPlusOne(e) {
//     if (e !== 255) {
//       let b = e + 1;
//       while (e < b) {
//         e++;
//         return e;
//       }
//     } else {
//       e = 0;
//       return e;
//     }
//   }

//   console.log(newRandomPlusOne(randomR));
// }

// var i = 12;
// function increment() {
//   i++;
//   document.getElementById("number").innerHTML = i;
// }

// function newRandomR() {
//   if (randomR !== 255) {
//     randomR++;
//   } else {
//     randomR = 0;
//   }
// }
// function newRandomG() {
//   if (randomG !== 255) {
//     randomG++;
//   } else {
//     randomG = 0;
//   }
// }

// function newRandomB() {
//   if (randomB !== 255) {
//     randomB++;
//   } else {
//     randomB = 0;
//   }
// }

// function backgroundChange() {
//   document.body.style.backgroundColor =
//     "rgb(" + randomR + "," + randomG + "," + randomB + ")";
// }

// function changeBackground() {
//   newRandomR();
//   newRandomG();
//   newRandomB();
//   backgroundChange();
//   console.log(randomR, randomB, randomG);
// }

// setInterval(changeBackground, 1000);
