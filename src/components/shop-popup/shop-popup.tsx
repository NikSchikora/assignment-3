import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'shop-popup',
  styleUrl: 'shop-popup.css',
  shadow: true,
})
export class ShopPopup implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
