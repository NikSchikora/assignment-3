import { Prop, getAssetPath, Component, ComponentInterface, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'shop-popup',
  styleUrl: 'shop-popup.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class ShopPopup implements ComponentInterface {
@Prop() image="news.png";

 @Method()
 async test() {

 }
 
  render() {
    return (
      <div id="newsletter-popup">
      <div class="hinweis">
        <span>Sign up for our newsletter</span>  
        <p>You also recieve a 5 € Voucher!</p>    
        <div>
        <img class ="news" src={getAssetPath(`./assets/${this.image}`)}/>
         </div>
          <form><p>
              <label>Email-Adresse:</label>
              <input id="email" required> </input>
              <button type="submit">Send</button></p>
          </form>
      </div>
    </div>
    );
  }

}
