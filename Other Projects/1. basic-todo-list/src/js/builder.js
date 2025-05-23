export class ListBuilder {
  constructor() {
    this.element = document.createElement("li");
    this.label = document.createElement("label");
    this.input = document.createElement("input");
    this.edit = document.createElement("button");
    this.delete = document.createElement("button");
    this.id = crypto.randomUUID();
  }
  textNode(text, id) {
    this.label.append(document.createTextNode(text));
    this.label.setAttribute(
      "class",
      "mx-2 py-1 pl-2 rounded-sm outline-none w-full select-none cursor-pointer hover:bg-gray-300"
    );
    this.label.htmlFor = this.id;
    this.element.append(this.label);
    return this;
  }
  checkBox() {
    this.input.setAttribute("type", "checkbox");
    this.input.setAttribute("class", "mt-2 w-4 h-4");
    this.input.id = this.id;
    this.element.append(this.input);
    return this;
  }
  editBtn() {
    this.edit.append("Edit");
    this.edit.setAttribute(
      "class",
      "bg-green-600 text-white rounded-md text-sm py-1 px-3 ml-auto h-8 shadow cursor-pointer active:opacity-80"
    );
    this.element.append(this.edit);
    return this;
  }
  deleteBtn() {
    this.delete.append("Delete");
    this.delete.setAttribute(
      "class",
      "bg-red-700 text-white rounded-md text-sm py-1 px-3 ml-2 h-8 shadow cursor-pointer active:opacity-80"
    );
    this.element.append(this.delete);
    return this;
  }
  build() {
    this.element.setAttribute("class", "container flex items-start my-2");
    return this.element;
  }
}
