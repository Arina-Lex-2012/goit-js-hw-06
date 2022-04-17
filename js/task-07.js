const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

inputEl.addEventListener('input', ()=> {
    spanEl.setAttribute("style", `font-size: ${inputEl.value}px`);
});





