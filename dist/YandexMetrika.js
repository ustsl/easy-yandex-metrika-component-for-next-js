"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var head_1 = __importDefault(require("next/head"));
var YandexMetrika = function (_a) {
    var counter = _a.counter;
    var ymScript = "\n    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n    m[i].l=1*new Date();\n    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n    (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n    ym(".concat(counter, ", \"init\", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});");
    var pixel = "https://mc.yandex.ru/watch/".concat(counter);
    return ((0, jsx_runtime_1.jsxs)(head_1.default, { children: [(0, jsx_runtime_1.jsx)("script", { type: "text/javascript", dangerouslySetInnerHTML: { __html: ymScript } }), (0, jsx_runtime_1.jsx)("noscript", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: pixel, style: { position: "absolute", left: "-9999px" }, alt: "" }) }) })] }));
};
exports.default = (0, react_1.memo)(YandexMetrika);
