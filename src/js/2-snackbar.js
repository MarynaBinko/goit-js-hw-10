import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

let toastBox = document.getElementById(`toastBox`);
const form = document.getElementById(`notification-form`);
let successMsg = `<i class="fa-solid fa-square-check"></i>Fulfilled promise in ms`;
let errorMsg = `<i class="fa-solid fa-xmark"></i>Rejected promise in ms`;

form.addEventListener("submit", function(event){
    event.preventDefault();
    showToast();
});


function showToast(){
  let toast =  document.createElement(`div`);
  toast.classList.add(`toast`);
  const selectedState = form.querySelector('input[name="state"]:checked');
  let value;
  if (selectedState) {
    value = selectedState.value;
  }
  if (value === "fulfilled") {
    toast.innerHTML = successMsg;
    toast.classList.add(`successMsg`);
  }else{
    toast.innerHTML = errorMsg;
    toast.classList.add(`errorMsg`);
  }
  
  toastBox.appendChild(toast);
}