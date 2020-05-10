import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sh-login",
  styleUrl: "sh-login.css",
  shadow: true,
})
export class ShLogin implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="container">
          <button>
            <p>+</p>
            <span>LOGIN</span>
          </button>
        </div>
      </Host>
    );
  }
}
