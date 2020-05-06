/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ShopFooter {
    }
    interface ShopSlideshow {
        "index": number;
        "picture": Array<String>;
        "pictureNumber": number;
    }
}
declare global {
    interface HTMLShopFooterElement extends Components.ShopFooter, HTMLStencilElement {
    }
    var HTMLShopFooterElement: {
        prototype: HTMLShopFooterElement;
        new (): HTMLShopFooterElement;
    };
    interface HTMLShopSlideshowElement extends Components.ShopSlideshow, HTMLStencilElement {
    }
    var HTMLShopSlideshowElement: {
        prototype: HTMLShopSlideshowElement;
        new (): HTMLShopSlideshowElement;
    };
    interface HTMLElementTagNameMap {
        "shop-footer": HTMLShopFooterElement;
        "shop-slideshow": HTMLShopSlideshowElement;
    }
}
declare namespace LocalJSX {
    interface ShopFooter {
    }
    interface ShopSlideshow {
        "index"?: number;
        "picture"?: Array<String>;
        "pictureNumber"?: number;
    }
    interface IntrinsicElements {
        "shop-footer": ShopFooter;
        "shop-slideshow": ShopSlideshow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "shop-footer": LocalJSX.ShopFooter & JSXBase.HTMLAttributes<HTMLShopFooterElement>;
            "shop-slideshow": LocalJSX.ShopSlideshow & JSXBase.HTMLAttributes<HTMLShopSlideshowElement>;
        }
    }
}
