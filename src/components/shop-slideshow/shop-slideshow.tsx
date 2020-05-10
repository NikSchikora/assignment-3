import { Component, ComponentInterface, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'shop-slideshow',
  styleUrl: 'shop-slideshow.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class ShopSlideshow implements ComponentInterface {
 

@Prop() picture: Array<String> = ["pic03.jpg", "pic04.jpg", "pic05.jpg"];
@Prop() index: number = 1;
@Prop() pictureNumber: number = 0;

  slideButton(i): void{
    this.slide(this.index += i);
    return i;
  } 
  
  slide(i: number): number {
    if (i > this.picture.length) {
      this.index = 1;
    }
    else if (i < 1) {
      this.index = this.picture.length;
    }
    this.pictureNumber = this.index - 1;
    return this.pictureNumber;
  }

  render() {
    return (
        <div class="slide">
          <button onClick = { () => this.slideButton(-1)} id="left">&lt;</button>
          <img src={getAssetPath(`./assets/${this.picture[this.pictureNumber]}`)}/>
          <button onClick = { () => this.slideButton(+1)} id="right">&gt;</button>
        </div>
    );
  }
}
