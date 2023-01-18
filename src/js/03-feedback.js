import Throttle from "lodash.throttle";

const formEl = document.querySelector('form');

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

let getobj =JSON.parse(localStorage.getItem("feedback-form-state"))||{};

if(getobj){
email.value=getobj.email||"";
message.value=getobj.message||"";
}

function myInput (event){
    event.preventDefault();
    getobj[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(getobj));
}

formEl.addEventListener("input", Throttle(myInput , 500));

formEl.addEventListener(`submit`, event => {
    event.preventDefault();
    if( email.value===""||message.value===""){
    alert("введіть будь-ласка всі поля");return}
    console.log(getobj);
    formEl.reset();
    localStorage.removeItem("feedback-form-state");
    getobj={};
});




