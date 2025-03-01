import { html, LitElement } from "lit";

export class Button extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    label: { type: String },
    class: { type: String },
    svg: { type: String },
    width: { type: String },
  };

  constructor() {
    super();
    this.width = "md:w-50";
  }

  render() {
    return html`<button class="btn ${this.class} ${this.width}">
      ${this.svg ? html`<img src="${this.svg}" class="min-w-5" />` : ``}
      ${this.label
        ? html`<span class="hidden md:block mx-3">${this.label}</span>`
        : ``}
    </button>`;
  }
}

window.customElements.define("button-element", Button);
