const inputEl = document.querySelector("#validation-input");

const validation = {
    value: 6,
};

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === validation.value) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
});

