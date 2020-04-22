import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  h,
  getAssetPath,
} from "@stencil/core";

@Component({
  tag: "sh-navigation",
  styleUrl: "sh-navigation.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class ShNavigation implements ComponentInterface {
  @Prop() logo = "monkey.png";

  render() {
    return (
      <div class="bar">
        <div id="logo">
          <img src={getAssetPath(`./assets/${this.logo}`)} alt="" />
        </div>
        <div class="nav-element">
          <p>Home</p>
        </div>
        <div class="nav-element">
          <p>Shop</p>
        </div>
        <div class="nav-element">
          <p>Contact</p>
        </div>
        <div class="nav-element">
          <p>Login</p>
        </div>
      </div>
    );
  }
}
