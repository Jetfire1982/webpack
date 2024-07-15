import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './App.module.scss';
import About from '@/pages/about/About';
import twitter from '@/assets/twitter.png';
import delicious from '@/assets/delicious.jpg';
import Instagram from '@/assets/instagram.svg';
import Burger from '@/assets/burger.svg';
function TODO(a) {
    console.log("TODOFUNCTION");
}
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    TODO(5345);
    var increment = function () { return setCount(function (prev) { return prev + 1; }); };
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "ISDESKTOPPLATFORM" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "ISMOBILEPLATFORM" });
    }
    if (__ENV__ === 'development') {
        //addDevtools()
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { src: twitter, width: "100", height: "100", alt: "" }), _jsx("img", { src: delicious, width: 50, height: 50, alt: "" })] }), _jsx("div", { children: _jsx(Instagram, {}) }), _jsxs("div", { children: [_jsx(Burger, { fill: 'red', width: 150, height: 150 }), _jsx(Burger, { className: classes.icon, width: 150, height: 150 }), _jsx(Burger, { color: 'red', width: 150, height: 150 })] }), _jsx(Link, { to: '/about', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), _jsx("h1", { className: classes.value, children: count }), _jsxs("button", { className: classes.button, onClick: increment, children: [_jsx("span", { children: "Hey" }), "inc"] }), _jsx(About, {})] }));
};
