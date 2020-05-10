import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "sh-navbar",
  styleUrl: "sh-navbar.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class ShNavbar implements ComponentInterface {
  render() {
    return (
      <div class="navbar">
        <slot></slot>
      </div>
    );
  }
}
