import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

let toastBox = document.getElementById(`toastBox`);
const form = document.getElementById(`notification-form`);


function createPromise(){
return new Promise ((resolve, reject)=>{
    const delay = document.querySelector('input[name="delay"]').value;
    const selectedState = form.querySelector('input[name="state"]:checked').value;
    if(selectedState === "fulfilled"){
        setTimeout(() => {
      resolve(delay);      
        }, delay);
    }else{
        setTimeout(() => {
          reject(delay);  
        }, delay);
    }
})
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    // showToast();
createPromise()
.then((delay)=>{
    const successMsg = `<i class="fa-solid fa-square-check"></i>Fulfilled promise in ${delay}ms`;
    showToast(successMsg, 'successMsg');
})
.catch((delay)=>{
    const errorMsg = `<i class="fa-solid fa-xmark"></i>Rejected promise in ${delay}ms`;
    showToast(errorMsg, 'errorMsg');
})

});


function showToast(message, className) {
    let toast = document.createElement(`div`);
    toast.classList.add(`toast`);
    toast.classList.add(className);
    toast.innerHTML = message;

    toastBox.appendChild(toast);

    const delay = document.querySelector('input[name="delay"]').value;
    setTimeout(() => {
        toast.remove();
    }, delay);
    
};
