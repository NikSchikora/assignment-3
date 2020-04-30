/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ShopSlideshow {
        "pic": string;
        "slideshow": () => Promise<void>;
    }
}
declare global {
    interface HTMLShopSlideshowElement extends Components.ShopSlideshow, HTMLStencilElement {
    }
    var HTMLShopSlideshowElement: {
        prototype: HTMLShopSlideshowElement;
        new (): HTMLShopSlideshowElement;
    };
    interface HTMLElementTagNameMap {
        "shop-slideshow": HTMLShopSlideshowElement;
    }
}
declare namespace LocalJSX {
    interface ShopSlideshow {
        "pic"?: string;
    }
    interface IntrinsicElements {
        "shop-slideshow": ShopSlideshow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "shop-slideshow": LocalJSX.ShopSlideshow & JSXBase.HTMLAttributes<HTMLShopSlideshowElement>;
        }
    }
}
