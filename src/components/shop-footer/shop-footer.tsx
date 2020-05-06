import { Component, ComponentInterface, Host, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'shop-footer',
  styleUrl: 'shop-footer.css',
  shadow: true,
})
export class ShopFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <footer> 
          <p>Lina Käfer, Niklas Schikora, Laura Krumm</p>
          <a href="#">www.Kontakt.de</a> <br></br>
          <a href="#">AGB Bestimmungen</a>
          <img src={getAssetPath(`./assets/`)}/>
          <img src={getAssetPath(`./assets/`)}/>
          <img src={getAssetPath(`./assets/`)}/>
        </footer>
      </Host>
    );
  }

}
