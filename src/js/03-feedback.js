import Throttle from "lodash.throttle";

const formEl = document.querySelector('form');

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

getobj =localStorage.getItem("feedback-form-state") || {};

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
    if(email.value || message.value === true){
        formEl.reset();
    }else{
        console.log("заповни поля");
    }
    
});

console.log(getobj);


