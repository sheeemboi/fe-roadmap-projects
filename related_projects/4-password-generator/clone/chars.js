export const LOWERCASE = rangeFinder(97, 122);
export const UPPERCASE = rangeFinder(65, 90);
export const NUMBERS = rangeFinder(48, 57);

function rangeFinder(low, high) {
  let arr = [];
  for (let x = low; x <= high; x++) {
    let y = String.fromCharCode(x);
    arr.push(y);
  }
  return arr;
}