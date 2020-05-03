import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'shop-footer',
  styleUrl: 'shop-footer.css',
  shadow: true,
})
export class ShopFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <footer> </footer>
      </Host>
    );
  }

}
