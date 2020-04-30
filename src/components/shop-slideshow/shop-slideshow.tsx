import { Component, ComponentInterface, Host, h, Method, Prop, getAssetPath } from '@stencil/core';

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

 @Method()
 async slideshow() {

    var index = 0;  
    var i;  
    var x = document.getElementsByTagName("img");   
    for (i = 0; i < x.length; i++) {    
    x[i].style.display = "none";     
    }
    index++;   
    if (index > x.length) {index = 1}   
    x[index-1].style.display = "block";    
    setTimeout(this.slideshow, 2000); 
 }

 

  render() {
    return (
      <Host>
        <script src={getAssetPath(`./assets/${this.js}`)}></script>
        <div id="sidebar">
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image}`)}/>
        </div>
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image2}`)}/>
        </div>
        <div class="slide">
          <img src={getAssetPath(`./assets/${this.image3}`)}/>        </div>
        </div>
      </Host>
    );
  }

}
