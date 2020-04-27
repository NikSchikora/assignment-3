/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ShNavigation {
        "logo": string;
    }
    interface ShopCard {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLShNavigationElement extends Components.ShNavigation, HTMLStencilElement {
    }
    var HTMLShNavigationElement: {
        prototype: HTMLShNavigationElement;
        new (): HTMLShNavigationElement;
    };
    interface HTMLShopCardElement extends Components.ShopCard, HTMLStencilElement {
    }
    var HTMLShopCardElement: {
        prototype: HTMLShopCardElement;
        new (): HTMLShopCardElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "sh-navigation": HTMLShNavigationElement;
        "shop-card": HTMLShopCardElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ShNavigation {
        "logo"?: string;
    }
    interface ShopCard {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "sh-navigation": ShNavigation;
        "shop-card": ShopCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "sh-navigation": LocalJSX.ShNavigation & JSXBase.HTMLAttributes<HTMLShNavigationElement>;
            "shop-card": LocalJSX.ShopCard & JSXBase.HTMLAttributes<HTMLShopCardElement>;
        }
    }
}
