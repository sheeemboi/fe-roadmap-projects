import { ListBuilder } from "./builder.js";
import { listArr } from "./main.js";

export class ListItem {
  constructor(text, isComplete) {
    this.text = text;
    this.isComplete = isComplete;
    this.li = new ListBuilder();
  }
  markComplete(e, $label, $edit) {
    this.isComplete = e.target.checked;
    $label.classList.toggle("line-through", this.isComplete);
    $edit.toggleAttribute("disabled");
    $edit.classList.toggle("opacity-30");
  }
  editItem(e, $label, $check) {
    if ($label.isContentEditable) {
      this.text = $label.textContent;
      e.target.textContent = "Edit";
    } else {
      e.target.textContent = "Save";
    }
    $label.setAttribute("contenteditable", !$label.isContentEditable);
    $check.toggleAttribute("disabled", $label.isContentEditable);
    $label.classList.toggle("border-b-2", $label.isContentEditable);
    $label.classList.toggle("select-none", !$label.isContentEditable);
    $label.classList.toggle("rounded-sm", !$label.isContentEditable);
  }
  deleteItem(item) {
    item.remove();

    const index = listArr.indexOf(this);
    listArr.splice(index, 1);

    console.log(listArr);
  }

  render() {
    this.li.checkBox();
    this.li.textNode(this.text);
    this.li.editBtn();
    this.li.deleteBtn();

    const thisList = this.li.build();

    const $check = thisList.querySelector('input[type="checkbox"]');
    const $label = thisList.querySelector("label");
    const $edit = thisList.querySelector("button:nth-of-type(1)");
    const $delete = thisList.querySelector("button:nth-of-type(2)");

    $check.addEventListener("change", (e) =>
      this.markComplete(e, $label, $edit)
    );
    $edit.addEventListener("click", (e) => this.editItem(e, $label, $check));
    $delete.addEventListener("click", () => this.deleteItem(thisList));

    return thisList;
  }
}
