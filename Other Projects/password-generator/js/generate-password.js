import { LOWER_CASE_CHAR, UPPER_CASE_CHAR } from "./char-codes.js";

const prefixTypes = LOWER_CASE_CHAR.concat(UPPER_CASE_CHAR);

export default function generateChar(length, selectedTypes) {
  let fullPw = "";
  
  // Full Password:
  for (let x = 0; x <= length; x++) {
    fullPw += selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
    if (x === 6 || x === 16) fullPw += "-";
  }
  
  return fullPw;

}