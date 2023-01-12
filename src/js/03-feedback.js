import Throttle from "lodash.throttle";

const formEl = document.querySelector('form');

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

getobj =localStorage.getItem("feedback-form-state");

email.value=JSON.parse(getobj).email;
message.value=JSON.parse(getobj).message;


function myInput (event){
    event.preventDefault();
    const obj = {
        email:email.value,
        message:message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}

formEl.addEventListener("input", Throttle(myInput , 500));

formEl.addEventListener(`submit`, event => {
    event.preventDefault();
    console.log(getobj);
    formEl.reset();
   // localStorage.removeItem("feedback-form-state");
    
});




