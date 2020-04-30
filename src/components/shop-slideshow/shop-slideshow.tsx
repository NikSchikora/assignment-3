import { Component, ComponentInterface, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'shop-slideshow',
  styleUrl: 'shop-slideshow.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class ShopSlideshow implements ComponentInterface {
 
 @Prop() image = "pic03.jpg";
 @Prop() image2 = "pic04.jpg";
 @Prop() image3 = "pic05.jpg";
 @Prop() js = "index.js";

  render() {
    return (
      <Host>
        <div id="sidebar">
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image}`)}/>
        </div>
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image2}`)}/>
        </div>
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image3}`)}/></div>
        </div>
        <script src={getAssetPath(`./assets/${this.js}`)}></script>
      </Host>
    );
  }

}
