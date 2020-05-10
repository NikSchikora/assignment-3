import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sh-navelement",
  styleUrl: "sh-navelement.css",
  shadow: true,
})
export class ShNavelement implements ComponentInterface {
  getLink(slotName: string) {
    return slotName.replace(/\s/g, "") + ".html";
  }

  render() {
    return (
      <a href="">
        <slot />
      </a>
    );
  }
}
