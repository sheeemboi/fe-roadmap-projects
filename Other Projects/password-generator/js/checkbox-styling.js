

let url = ["assets/square-regular.svg",
  "assets/square-check-solid.svg"
 ]

export default function toggleCheckbox(e) {
  const thisCheckbox = e.target;
  if(thisCheckbox.checked) {
    thisCheckbox.nextElementSibling.src = url[1]
  } else {
    thisCheckbox.nextElementSibling.src = url[0]
  }
}