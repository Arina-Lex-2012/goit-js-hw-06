const formEl = document.querySelector(".login-form");
const emailEl = formEl.elements.email;
const passwordEl = formEl.elements.password;

formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    if (emailEl.value === "" || passwordEl.value === "") {
         alert("Fill in all the fields, please!");
    } else {
        const user = {
            [emailEl.name]: emailEl.value,
            [passwordEl.name]: passwordEl.value,
        };
        console.log(user);
    }
    
    formEl.reset();
});






