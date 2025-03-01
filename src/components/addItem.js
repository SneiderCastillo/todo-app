import { html, LitElement } from "lit";

export class AddItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html``;
  }
}

window.customElements.define("add-item", AddItem);
