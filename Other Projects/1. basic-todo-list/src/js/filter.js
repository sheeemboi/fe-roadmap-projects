//Check an Item
export function checkItem(e) {
  let parent = e.parentElement;
  if (parent.querySelectorAll(".checkbox")[0].checked) {
    parent.style.textDecoration = "line-through";
  } else {
    parent.style.textDecoration = "none";
  }
}

// Delete an Item
export function deleteItem(e) {
  let parent = e.parentElement;
  parent.remove();
}