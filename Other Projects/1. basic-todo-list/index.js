const addButton = document.querySelector("#addBtn");
const input = document.querySelector("#newList");
const list = document.querySelector("#list")

// Validate Add button
addButton.addEventListener('click', () => {
  if(input.validity.valid) {
    list.append(createText())
    input.value = "";
  } else {
    showError();
    addButton.preventDefault;
  }
});

//Validate Enter Key
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter" && input.validity.valid) {
    list.append(createText())
    e.preventDefault();
    input.value = "";
  }
})

input.addEventListener('input', () => {
  document.getElementById("errMsg").innerHTML = "";
})
//Check an Item
const checkItem = (e) => {
  let parent = e.parentElement;
  if (parent.querySelectorAll(".checkbox")[0].checked) {
    parent.style.textDecoration = "line-through";
  } else {
    parent.style.textDecoration = "none";
  }
}
// Delete an Item
const deleteItem = (e) => {
  let parent = e.parentElement;
  parent.remove();
}

// Create a List
const createText = () => {
  const li = document.createElement("li");
  const textNode = document.createTextNode(input.value);
  li.classList.add("list-item");
  li.append(createCheck(), textNode, createDel());

  return li;
}
const createCheck = () => {
  const check = document.createElement("input");
  check.classList.add("checkbox")
  check.setAttribute("onclick", "checkItem(this)");
  check.setAttribute("type", "checkbox")

  return check;
}
const createDel = () => {
  const del = document.createElement("button");
  del.classList.add("del-btn")
  del.setAttribute("type", "button");
  del.setAttribute("onclick", "deleteItem(this)");
  del.innerHTML = "X";

  return del;
}

// 


const showError = () => {
  document.getElementById("errMsg").innerHTML = "Invalid input. Try again.";
}
