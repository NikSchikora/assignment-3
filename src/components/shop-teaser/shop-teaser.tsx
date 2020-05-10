import {
  Prop,
  getAssetPath,
  Component,
  ComponentInterface,
  Host,
  h,
} from "@stencil/core";

@Component({
  tag: "shop-teaser",
  styleUrl: "shop-teaser.css",
  assetsDirs: ["assets"],
  shadow: true,
})
export class ShopTeaser {
  @Prop() image = "naehen.jpg";

  passOn() {
    window.location.href = "https://www.google.de";
  }

  render() {
    return (
      <article class="teaser">
        <img src={getAssetPath(`./assets/${this.image}`)} />
        <h1>
          <slot />
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.{" "}
        </p>

        <sh-infobutton type="outline" onClick={() => this.passOn()}>
          Read more
        </sh-infobutton>
      </article>
    );
  }
}
