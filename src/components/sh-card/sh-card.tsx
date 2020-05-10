import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  getAssetPath,
} from "@stencil/core";

@Component({
  tag: "sh-card",
  styleUrl: "sh-card.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class ShCard implements ComponentInterface {
  @Prop() placeholderImage = "placeholder.png";
  container: HTMLDivElement;

  componentDidLoad() {}

  toggleMoreInformation() {
    this.container.classList.toggle("moreInformation");
  }

  render() {
    return (
      <Host>
        <div class="card" ref={(el) => (this.container = el as HTMLDivElement)}>
          <h1>
            <slot name="product-heading"></slot>
          </h1>
          <div class="wrapper">
            <div class="preview-text">
              <img src={getAssetPath(`./assets/${this.placeholderImage}`)} />
              <p>
                <slot name="description"></slot>
              </p>
            </div>
            <div class="expand">
              <h2>
                <slot name="expand-header"></slot>
              </h2>
              <p>
                <slot name="expand-description"></slot>
              </p>
            </div>
          </div>
          <sh-infobutton
            type="info"
            onClick={() => this.toggleMoreInformation()}
          >
            More
          </sh-infobutton>
          <p>
            <slot name="more"></slot>
          </p>
        </div>
      </Host>
    );
  }
}
