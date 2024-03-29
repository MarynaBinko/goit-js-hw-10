
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

let toastBox = document.getElementById("toastBox");
let userSelectedDate;
const startButton = document.querySelector('button[data-start]');
let intervalId;

startButton.disabled = true;
startButton.addEventListener("click", handleClick);

function handleClick() {
  startButton.disabled = true;
  const dateString = document.getElementById("datetime-picker").value;
  const  userSelectedDate = new Date(dateString);
  const currentTime = Date.now();
 
     intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = userSelectedDate - currentTime;
         if(deltaTime <= 0){
          clearInterval(intervalId);
          updateClockface({ days: 0, hours: 0, minutes: 0, seconds: 0});
          
         }else{
          const time = convertMs(deltaTime);
          updateClockface(time);
         }
      }, 1000);

};


function updateClockface({ days, hours, minutes, seconds }) {

  const daysElement = document.querySelector(`[data-days]`); 
  const hoursElement = document.querySelector(`[data-hours]`); 
  const minsElement = document.querySelector(`[data-minutes]`); 
  const secondsElement = document.querySelector(`[data-seconds]`); 
  daysElement.innerHTML = `${days}`.padStart(2, "0");
  hoursElement.innerHTML = `${hours}`.padStart(2, "0");
  minsElement.innerHTML = `${minutes}`.padStart(2, "0");
  secondsElement.innerHTML = `${seconds}`.padStart(2, "0");
};



flatpickr(`input#datetime-picker`,{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = new Date(selectedDates[0]);
    if (userSelectedDate < new Date()){
      showToast();
      startButton.disabled = true;
    }else{
      startButton.disabled = false;
    }
    }
});



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




function showToast() {
  let toastT = document.createElement(`div`);
  const messageText = `<i class="fas fa-times-circle"></i> Please chose a date in the future`;
  toastT.classList.add(`toastT`);  
  toastT.innerHTML = messageText;

  toastBox.appendChild(toastT);
  startButton.disabled = true;
 
  setTimeout(() => {
      toastT.remove();
  }, 2000);
  
};



// function showToast(){
//   iziToast.error({
//     title: "Invalid Date",
//     message: "Please choose a date in the future.",
//     position: "topCenter",
//     timeout: 3000
//   });
// };

// function handleClick(){
// startButton.disabled = true;
// const userSelectedDate = flatpickrInstance.selectedDates[0];
// const startTime = Date.now();
//   intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = userSelectedDate.getTime() - currentTime;
//      if(deltaTime <= 0){
//       clearInterval(intervalId);
//       updateClockface({ days: 0, hours: 0, minutes: 0, seconds: 0});
      
//      }else{
//       const time = convertMs(deltaTime);
//       updateClockface(time);
//      }
//   }, 1000);
// };













  