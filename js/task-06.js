const inputEl = document.querySelector("#validation-input");

    
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        alert(`Let's try again! ${inputEl.placeholder}`);
        location.reload();
    }
});


