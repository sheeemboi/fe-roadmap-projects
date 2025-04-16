export const UPPER_CASE_CHAR = getCodeRange(65, 90)
export const LOWER_CASE_CHAR = getCodeRange(97, 122)
export const NUMBER_CHAR = getCodeRange(48, 57)
export const SYMBOL_CHAR = getCodeRange(33, 38).concat(getCodeRange(42, 46))

/** Array Maker for ASCII Character Codes
 *  Sample Call: 
 *    let THIS_ARRAY = getCodeRange(97, 102)
 *  Sample Result:
 *    THIS_ARRAY = [a, b, c, d, e, f]      
 * */ 
function getCodeRange(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(String.fromCharCode(i))
  };
  return arr;
};