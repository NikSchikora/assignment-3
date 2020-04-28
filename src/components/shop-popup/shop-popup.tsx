import { Component, ComponentInterface, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'shop-popup',
  styleUrl: 'shop-popup.css',
  shadow: true,
})
export class ShopPopup implements ComponentInterface {
 @Method()
 async test() {

  const verschwinden=document.getElementById("newsletter-popup")!;
  const button2=document.getElementById("button2")!;
  const button1=document.getElementById("button1")!;
  
  function hideItem() :void {
   verschwinden.style.display="none";
  }
  
  button2.addEventListener("click", hideItem);
  
  
  
  function passOn (): void {
      window.location.href = ("https://play.google.com/store/apps?hl=de");
  }
  button1.addEventListener("click", passOn)
 }
 
  render() {
    return (
      <div id="newsletter-popup">
      <div class="hinweis">
        <span>Willst du immer über die neusten Styles infomiert sein?</span>
        <p>Abonniere unseren kostenlosen Newsletter und erhalte einen 5€ Gutschein. <br></br>
        Außerdem erhälst du eine kostenlose Style-Beratung von unseren Experten!</p>
        <button id="button1" >OK, I accept</button>
			<button id="button2">Cancel</button>
      </div>
    </div>
    );
  }

}
