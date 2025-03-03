import { html, LitElement } from "lit";

export class ListItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    task: { type: Object },
  };

  constructor() {
    super();
    this.task = { id: null, task: "", isDone: false };
  }

  deleteTask() {
    this.dispatchEvent(
      new CustomEvent("delete-task", {
        detail: {
          id: this.task.id,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`<div class="flex bg-gray-200 rounded-lg">
      <button-element
        class="bg-violet-600 hover:bg-violet-500"
        svg="src/assets/check.svg"
        width=""
      ></button-element>
      <input
        type="text"
        value="${this.task.task}"
        placeholder="Write the task you want to add"
        class="grow px-2 h-10 focus-within:outline-0"
        disabled
      />
      <button-element
        label="Edit"
        class="bg-sky-600 hover:bg-sky-500"
        svg="src/assets/edit.svg"
      ></button-element>
      <button-element
        label="Delete"
        class="bg-orange-700 rounded-e-lg hover:bg-orange-600"
        svg="src/assets/delete.svg"
        @click=${this.deleteTask}
      ></button-element>
    </div>`;
  }
}

window.customElements.define("list-item", ListItem);
