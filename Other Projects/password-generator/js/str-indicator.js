const $uppTgl = document.querySelector("#uppTgl");
const $numTgl = document.querySelector("#numTgl");
const $symTgl = document.querySelector("#symTgl");
const $charRng = document.querySelector("#charRng");
const $strLabel = document.querySelector("#strLabel");
let $strLevels = document.querySelectorAll(".level");

let pwLength;
let checkUppTgl;
let checkNumTgl;
let checkSymTgl;

export default function displayStrength() {
  let strengthScore = 0;
  pwLength = Number($charRng.value) + 7;
  checkUppTgl = $uppTgl.checked;
  checkNumTgl = $numTgl.checked;
  checkSymTgl = $symTgl.checked;

  if (checkUppTgl) { strengthScore++ }
  if (checkNumTgl) { strengthScore++ }
  if (checkSymTgl) { strengthScore++ }

  if (pwLength >= 16) { strengthScore++ }
  
  switch (strengthScore) {
    case 1:
      $strLabel.textContent = "Weak";
      styleLevels(1);
      break;
    case 2:
      $strLabel.textContent = "Medium";
      styleLevels(2);
      break;
    case 3:
      $strLabel.textContent = "Strong";
      styleLevels(3);
      break;
    case 4:
      $strLabel.textContent = "Very Strong";
      styleLevels(4);
      break;
    default:
      $strLabel.textContent = "Very Weak"
      styleLevels(0);
      break;
  }
}

function styleLevels(level) {
  $strLevels.forEach((value, index) => {
    if (index < level) {
      value.style.backgroundColor = "var(--primary)"
    } else {
      value.style.backgroundColor = "var(--tertiary)"
    }
  })
}