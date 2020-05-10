import { Prop, getAssetPath, Component, h } from "@stencil/core";

@Component({
  tag: "shop-popup",
  styleUrl: "shop-popup.css",
  assetsDirs: ["assets"],
  shadow: true,
})
export class ShopPopup {
  @Prop() image = "news.png";

  divElement!: HTMLDivElement;
  inputElement!: HTMLInputElement;

  hideItem() {
    this.divElement.remove();
  }

  submitForm() {
    if (this.inputElement.value != "") {
      this.divElement.remove();
    }
  }

  render() {
    return (
      <div ref={(el) => (this.divElement = el as HTMLDivElement)}>
        <div id="newsletter-popup">
          <div class="hinweis">
            <span>Sign up for our newsletter</span>
            <p>You also recieve a 5 € Voucher!</p>
            <div>
              <img class="news" src={getAssetPath(`./assets/${this.image}`)} />
            </div>
            <form>
              <p>
                <label>Email-Adresse:</label>
                <input
                  ref={(el) => (this.inputElement = el as HTMLInputElement)}
                  id="email"
                  required
                >
                  {" "}
                </input>
                <button onClick={() => this.submitForm()} type="submit">
                  Send
                </button>
              </p>
              <button id="deny" onClick={() => this.hideItem()}>
                No thanks!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
