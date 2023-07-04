import React from "react";
declare global {
    interface Window {
        ym: any;
    }
}
interface IYandexMetrika {
    counter: number;
}
declare const _default: React.MemoExoticComponent<({ counter }: IYandexMetrika) => import("react/jsx-runtime").JSX.Element>;
export default _default;
