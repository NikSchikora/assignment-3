import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "sh-infobutton",
  styleUrl: "sh-infobutton.css",
  shadow: true,
})
export class ShInfobutton implements ComponentInterface {
  @Prop() type: string;
  button: HTMLButtonElement;

  componentDidLoad() {
    this.applySettings();
  }

  applySettings() {
    if (this.button != null) {
      switch (this.type) {
        case "info":
          this.button.style.backgroundColor = "#035aa6";
          break;
        case "warning":
          this.button.style.backgroundColor = "#e43f5a";
          break;
        case "buy":
          this.button.style.backgroundColor = "#ffe75e";
          break;
        default:
          this.button.style.backgroundColor = "#79bac1";
      }
    }
    this.button.style.visibility = "visible";
  }

  render() {
    return (
      <Host>
        <button ref={(el) => (this.button = el as HTMLButtonElement)}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
