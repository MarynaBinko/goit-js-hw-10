import"./assets/styles-fbcebf05.js";import"./assets/vendor-94c342ae.js";let c=document.getElementById("toastBox");const a=document.getElementById("notification-form");function i(){return new Promise((s,t)=>{const e=document.querySelector('input[name="delay"]').value,o=a.querySelector('input[name="state"]:checked').value;setTimeout(o==="fulfilled"?()=>{s(e)}:()=>{t(e)},e)})}a.addEventListener("submit",function(s){s.preventDefault(),i().then(t=>{const e=`<i class="fa-solid fa-square-check"></i>Fulfilled promise in ${t}ms`;n(e,"successMsg")}).catch(t=>{const e=`<i class="fa-solid fa-xmark"></i>Rejected promise in ${t}ms`;n(e,"errorMsg")})});function n(s,t){let e=document.createElement("div");e.classList.add("toast"),e.classList.add(t),e.innerHTML=s,c.appendChild(e);const o=document.querySelector('input[name="delay"]').value;setTimeout(()=>{e.remove()},o)}
//# sourceMappingURL=commonHelpers2.js.map
