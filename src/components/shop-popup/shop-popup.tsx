import { Component, ComponentInterface, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'shop-popup',
  styleUrl: 'shop-popup.css',
  shadow: true,
})
export class ShopPopup implements ComponentInterface {
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
         <img class ="news" src="news.png"> </img>
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
