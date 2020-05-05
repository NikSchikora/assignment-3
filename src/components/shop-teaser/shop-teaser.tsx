import {Prop, getAssetPath, Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'shop-teaser',
  styleUrl: 'shop-teaser.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class ShopTeaser implements ComponentInterface {
  @Prop() image="nähen.jpg";


 passOn () {
    window.location.href = ("https://play.google.com/store/apps?hl=de");
}

  componentWillLoad() {
alert("hallo");

  }
  componentDidLoad() {
    document.getElementById("btnpassOn").addEventListener("onclick", this.passOn);
  }
  
  render() {
 
    
    return (
      <article class="teaser">   
      <img src={getAssetPath(`./assets/${this.image}`)} />
    <h1><slot/></h1>      

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
    <button id="btnpassOn">read more</button>
  </article>   

    );
  }

}
