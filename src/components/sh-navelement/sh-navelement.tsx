import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "sh-navelement",
  styleUrl: "sh-navelement.css",
  shadow: true,
})
export class ShNavelement implements ComponentInterface {
  @Prop() link: string;

  getLink(slotName: string): string {
    return slotName.replace(/\s/g, "") + ".html";
  }

  redirect(): void {
    window.location.href = this.link;
  }

  render() {
    return (
      <a onClick={() => this.redirect()}>
        <slot />
      </a>
    );
  }
}
