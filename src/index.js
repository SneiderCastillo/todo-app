import { LitElement, html } from "lit";
import { AddItem } from "./components/addItem";
import { Button } from "./components/buttons";
import { ListItem } from "./components/listItem";

export class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    items: {},
  };

  constructor() {
    super();
    this.items = [
      { task: "Do something", isDone: false },
      { task: "2 Do something", isDone: false },
    ];
  }

  render() {
    const header = html`
      <header class="text-center p-5">
        <h1 class="text-3xl font-bold">ToDo Project</h1>
      </header>
    `;

    return html`
      ${header}
      <main class="flex flex-col gap-5 p-6">
        <section class="flex">
          <form
            onsubmit="return false"
            class="flex border border-black rounded-lg w-full"
          >
            <input
              type="text"
              placeholder="Write the task you want to add"
              class="grow px-2 h-10 focus-within:outline-0"
            />
            <button-element
              label="Add"
              class="bg-emerald-600 rounded-e-lg hover:bg-emerald-500"
              svg="src/assets/add.svg"
              @click=${this.addTask}
            ></button-element>
          </form>
        </section>
        <section class="flex flex-col gap-2">
          <h2>List of current tasks</h2>
          ${this.items.map(
            (item, index) => html`<list-item text="${item.task}"></list-item>`
          )}
        </section>
      </main>
    `;
  }

  addTask() {
    const input = this.renderRoot.querySelector("form>input");
    if (!input.value.trim()) return;
    this.items = [
      ...this.items,
      {
        task: input.value,
        isDone: false,
      },
    ];
    input.value = "";
  }
}

window.customElements.define("app-content", App);
