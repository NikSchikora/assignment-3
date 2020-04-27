import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'shop-slideshow',
  styleUrl: 'shop-slideshow.css',
  shadow: true,
})
export class ShopSlideshow implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
