!function(){function n(t,e,r){function i(u,f){if(!e[u]){if(!t[u]){var s="function"==typeof require&&require;if(!f&&s)return s(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var p=e[u]={exports:{}};t[u][0].call(p.exports,function(n){return i(t[u][1][n]||n)},p,p.exports,n,t,e,r)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}return n}()({1:[function(n,t,e){"use strict";var r=document.querySelector(".bg-square"),i=function(n){var t=window.innerHeight,e=window.innerWidth,r=Math.max(t,e),i={hypotenuse:function(){return Math.hypot(t,e)},dimensions:function(){return r+(o()-r)},position:function(){return{top:t/2-u()/2,left:e/2-u()/2}}},o=i.hypotenuse,u=i.dimensions,f=i.position;n.style.cssText=" width: "+u()+"px; height: "+u()+"px; top: "+f().top+"px; left: "+f().left+"px;"},o=function(){return i(r)};o(),window.addEventListener("resize",o)},{}]},{},[1]);
