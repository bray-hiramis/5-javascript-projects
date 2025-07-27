const stopWatch = document.getElementById('stopwatch');
const laps = document.getElementById('laps');
const btnWatch = document.querySelectorAll('[data-watch]');

// variables
let INTERVAL_MS = 1000 / 60;
let timerId;
let startTimePointer = 0;
let millisecondsLastTimePointer = 0;
let lapCount = 1;

// formatting time function
function formatNumber(number, desiredLength) {
   let stringTime = String(number);
   if (stringTime.length > desiredLength) {
      return stringTime.slice(0, desiredLength);
   };
   return stringTime.padStart(desiredLength, '0');
};

// stopwatch function
function updateTimer() {
   let milliseconds = performance.now() - startTimePointer + millisecondsLastTimePointer;
   let seconds = milliseconds / 1000;
   let minutes = seconds / 60;

   let milliText = formatNumber(Math.floor(milliseconds) % 1000, 2);
   let secondText = formatNumber(Math.floor(seconds) % 60, 2);
   let minuteText = formatNumber(Math.floor(minutes), 2);

   stopWatch.textContent = `${minuteText}:${secondText}:${milliText}`;
};

// Lap function
function addLap(time) {
   const listItem = document.createElement('li');
   listItem.textContent = `Lap ${lapCount}: ${time}`;
   laps.appendChild(listItem);
   lapCount++;
};

// individual buttons
let startBtn = document.querySelector('[data-watch="start"');
let stopBtn = document.querySelector('[data-watch="stop"');
let resetBtn = document.querySelector('[data-watch="reset"');
let lapsBtn = document.querySelector('[data-watch="laps"');

// Event listener
for (let watch of btnWatch) {
   watch.addEventListener('click', function() {
      if (watch.dataset.watch === 'start') {
         startTimePointer = performance.now();
         timerId = setInterval(updateTimer, INTERVAL_MS);
         startBtn.disabled = true;
         resetBtn.disabled = true;
      } else if (watch.dataset.watch === 'stop') {
         millisecondsLastTimePointer += performance.now() - startTimePointer;
         clearInterval(timerId);
         startBtn.disabled = false;
         resetBtn.disabled = false;
      } else if (watch.dataset.watch === 'reset') {
         clearInterval(timerId);
         stopWatch.textContent = "00:00:00";
         millisecondsLastTimePointer = 0;
         lapCount = 1;
         laps.textContent = '';
      } else {
         addLap(stopWatch.textContent);
      }
   });
};

