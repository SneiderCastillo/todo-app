import { html, LitElement } from "lit";

export class Button extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    label: { type: String },
    class: { type: String },
    svg: { type: String },
  };

  render() {
    return html`<button class="btn ${this.class}">
      ${this.svg ? html`<img src="${this.svg}" class="min-w-5" />` : ``}
      <span class="hidden md:block mx-3">${this.label}</span>
    </button>`;
  }
}

window.customElements.define("button-element", Button);
