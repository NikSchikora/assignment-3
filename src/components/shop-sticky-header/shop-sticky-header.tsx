import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'shop-sticky-header',
  styleUrl: 'shop-sticky-header.css',
  shadow: true,
})
export class ShopStickyHeader implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
