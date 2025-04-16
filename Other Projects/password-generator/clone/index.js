import { UPPERCASE, LOWERCASE, NUMBERS } from "./chars.js";

const form = document.querySelector("#form");
const lenSlider = document.querySelector("#lenSlider");
const lenLabel = document.querySelector("#lenLabel");
const inpResult = document.querySelector("#inpResult");
const genBtn = document.querySelector("#genBtn");
let length = 0;

form.addEventListener("submit", (e) => e.preventDefault())

lenSlider.addEventListener("input", (e) => {
    lenLabel.textContent = e.target.value;
    length = e.target.value;
    console.log(length)
})

genBtn.addEventListener("click", () => {
    let password = "";
    const ALL_CHARS = UPPERCASE.concat(LOWERCASE).concat(NUMBERS);

    for(let x = 0; x <= length; x++) {
        let thisChar = ALL_CHARS[Math.floor(Math.random()*ALL_CHARS.length)]
        password += thisChar;
    }

    inpResult.value = password;
})

