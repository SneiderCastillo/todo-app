import { html, LitElement } from "lit";

export class ListItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    text: { type: String },
  };

  constructor() {
    super();
    this.text = "";
  }

  render() {
    return html`<div class="flex bg-gray-200 rounded-lg">
      <button-element
        class="bg-violet-600 hover:bg-violet-500"
        svg="src/assets/check.svg"
        width=""
        @click=${() => this.consoleLog("Done!")}
      ></button-element>
      <input
        type="text"
        value="${this.text}"
        placeholder="Write the task you want to add"
        class="grow px-2 h-10 focus-within:outline-0"
      />
      <button-element
        label="Edit"
        class="bg-sky-600 hover:bg-sky-500"
        svg="src/assets/edit.svg"
        @click=${() => this.consoleLog("Edit!")}
      ></button-element>
      <button-element
        label="Delete"
        class="bg-orange-700 rounded-e-lg hover:bg-orange-600"
        svg="src/assets/delete.svg"
        @click=${() => this.consoleLog("Delete!")}
      ></button-element>
    </div>`;
  }

  consoleLog(text) {
    return console.log(text);
  }
}

window.customElements.define("list-item", ListItem);
