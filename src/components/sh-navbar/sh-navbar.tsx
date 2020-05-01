import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'sh-navbar',
  styleUrl: 'sh-navbar.css',
  shadow: true,
})
export class ShNavbar implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
