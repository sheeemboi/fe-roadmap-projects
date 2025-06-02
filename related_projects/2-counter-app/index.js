const counter = function() {
  let count = 0;

  function increment() {
    return count += 1;
  }

  function decrement() {
    return count = count === 0 ? count : count -= 1;
  }

  function reset() {
    return count = 0;
  }

  function getResult() {
    return count;
  }

  return {increment, decrement, reset, getResult};
}();

function displayCount(operator) {
  document.querySelector(".count").textContent = counter[operator]();
}


document.querySelector("#increment").addEventListener("click", () => displayCount("increment"))
document.querySelector("#decrement").addEventListener("click",() => displayCount("decrement"))
document.querySelector("#reset").addEventListener("click",() => displayCount("reset"))