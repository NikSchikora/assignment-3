import { Component, ComponentInterface, Host, h, Method, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'shop-slideshow',
  styleUrl: 'shop-slideshow.css',
  assetsDirs: ['images'],
  shadow: true,
})
export class ShopSlideshow implements ComponentInterface {
 
 @Prop() pic = "pic03.jpg";
 @Method()

 async slideshow() {

  var index = 0;     
  slideshow(); 

  function slideshow() {  
      var i;  
      var x = document.getElementsByTagName("img");   
      for (i = 0; i < x.length; i++) {    
      x[i].style.display = "none";    
      }
      index++;   
      if (index > x.length) {index = 1}   
      x[index-1].style.display = "block";    
      setTimeout(slideshow, 5000); 
  }
 }

  render() {
    return (
      <Host>
        <img src={getAssetPath(`./images/${this.pic}`)}></img>
        <div id="sidebar">
        <div class="slide">
          <img src="images/pic05.jpg" alt="" />
        </div>
        <div class="slide">
          <img src="images/pic04.jpg" alt="" />	
        </div>
        <div class="slide">
          <img src={getAssetPath(`./images/${this.pic}`)} />
        </div>
        </div>
      </Host>
    );
  }

}
