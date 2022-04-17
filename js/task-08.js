const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector("[type=email]");
const inputPasswordEl = document.querySelector("[type=password]");

const user = {
    email: "",
    password: "",
};


formEl.addEventListener('submit', () => {
    if (inputEmailEl.value === "" && inputPasswordEl.value === "") {
        console.log('error');
        alert("Fill in all the fields, please!");
    } else {
        // console.log("OK");
        // alert("OK");
        user.email = inputEmailEl.value;
        user.password = inputPasswordEl.value;
        alert(user.email);
    }

});

console.log(user);


