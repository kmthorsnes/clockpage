console.log(`%c ________________________________________
< Welcome there are probably better ways of achieving this functionality, but hey - it works! >
< Regards, Karl-Magnus >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
                `, "font-family:monospace");



// Declaring global variables
let clock = document.getElementById("clock");
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

//Sets time

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
  hour = (date.getHours() / 24) * 255;
  minute = (date.getMinutes() / 60) * 255;
  second = (date.getSeconds() / 60) * 255;
  RGBhour = Math.round(hour);
  RGBminute = Math.round(minute);
  RGBsecond = Math.round(second);
  // Sets background color based on time of day HH:MM:SS
  document.body.style.backgroundColor =
    "rgb(" + RGBhour + "," + RGBminute + "," + RGBsecond + ")";
  // For selecting color font for best readability. 
  colorShade = (0.299 * RGBhour + 0.0587 * RGBminute + 0.114 * RGBsecond) / 256;
  
  if (colorShade > 0.7) {
    document.getElementById("clock").style.color = "white";
    document.getElementById("jokeSetup").style.color = "white";
    document.getElementById("jokePunchline").style.color = "white";
  } else {
    document.getElementById("clock").style.color = "black";
    document.getElementById("jokeSetup").style.color = "black";
    document.getElementById("jokePunchline").style.color = "black";
  }
}
// Loads page with background color
RGBFromDate();

// Loads it every second
setInterval(RGBFromDate, 1000);

// Fetching random joke from API
function showJoke() {
  var apiUrl = "https://official-joke-api.appspot.com/jokes/random";
  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response.setup);
      console.log(response.punchline);
      document.getElementById("jokeSetup").textContent = response.setup;
      document.getElementById("jokePunchline").textContent = response.punchline;
    });
}

// Looks like it blocked for now. Maybe they let me in later? 

// Loads joke on page load
showJoke();
// Loads new joke every minute second
setInterval(showJoke, 60000);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&APPID=d806811d3091a2c349bd39e4e9d4847b&', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log("OpenWeather connected successfully")
    let data = JSON.parse(request.responseText);
    let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp = Math.floor(data.main.temp);
    const weatherName = data.weather[0].main;
    console.log(weatherName);
    document.getElementById('icon').setAttribute('src', icon);
    document.getElementById('tempapi').append(temp);
    document.getElementById('weatherapi').textContent = weatherName;

  } else {
    console.log("We reached our target server, but it returned an error");
  }
};
request.onerror = function() {
  console.log("There was a connection error of some sort") 
};

request.send();
