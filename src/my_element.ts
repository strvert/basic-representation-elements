import {
  LitElement,
  html,
  property,
  customElement,
} from "@polymer/lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  @property() firstName: string;
  @property() lastName: string;

  constructor() {
    super();
    this.firstName = "";
    this.lastName = "";
  }

  render() {
    return html` <h1>Hello ${this.firstName} ${this.lastName}</h1> `;
  }
}
