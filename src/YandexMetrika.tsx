/* eslint-disable @next/next/no-img-element */

import { memo } from "react";
import Head from "next/head";

declare global {
  interface Window {
    ym: any;
  }
}

interface IYandexMetrika {
  counter: number;
}

const YandexMetrika = ({ counter }: IYandexMetrika) => {
  const ymScript = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(${counter}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});`;

  const pixel = `https://mc.yandex.ru/watch/${counter}`;
  

  return (
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: ymScript }}
      />
      <noscript>
        <div>
          <img
            src={pixel}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </Head>
  );
};

export default memo(YandexMetrika);
