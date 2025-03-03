import { LitElement, html } from "lit";
import { AddItem } from "./components/addItem";
import { Button } from "./components/buttons";
import { ListItem } from "./components/listItem";

export class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [
      { id: 1, task: "Do something", isDone: false },
      { id: 2, task: "2 Do something", isDone: false },
    ];
  }

  addTask(event) {
    event.preventDefault();
    const input = this.renderRoot.querySelector("form>input");
    if (!input.value.trim()) return;
    this.items = [
      ...this.items,
      {
        id: Date.now(),
        task: input.value,
        isDone: false,
      },
    ];
    input.value = "";
  }

  removeTask(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  render() {
    return html`
      <header class="text-center p-5">
        <h1 class="text-3xl font-bold">ToDo Project</h1>
      </header>

      <main class="flex flex-col gap-5 p-6">
        <section class="flex">
          <form
            @submit=${this.addTask}
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
            ></button-element>
          </form>
        </section>
        <section class="flex flex-col gap-2">
          <h2>List of current tasks</h2>
          ${this.items
            .filter((item) => !item.isDone)
            .map(
              (item) => html` <list-item
                .task=${item}
                @delete-task="${(e) => this.removeTask(e.detail.id)}"
              ></list-item>`
            )}
        </section>
      </main>
    `;
  }
}

window.customElements.define("app-content", App);
