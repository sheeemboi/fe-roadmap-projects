let count = 0
const countEl  = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const increment = () => {
  count += 1
  countEl.textContent = count
  console.log(count)
}

function save() {
  const breakTag = document.createElement("br")
  saveEl.append(count, " Counts", breakTag)
  count = 0
  countEl.textContent = count

}