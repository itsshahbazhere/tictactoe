(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}})();const u=document.querySelector("[data-gameInfo]"),s=document.querySelectorAll(".box"),g=document.querySelector("[data-newGame]");document.querySelector("[data-tic-tac-toe]");const d=document.querySelector("[data-playerSymbol]");let t="X";d.innerText=t;let i=["","","","","","","","",""];const f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];s.forEach((e,o)=>{e.addEventListener("click",()=>{if(e.innerText===""&&!m()&&!y()){if(e.innerText=t,e.style.cursor="default",i[o]=t,m()){u.innerText=`Winner Player - ${t}`;return}if(y()){u.innerText="Game Tied !";return}p()}})});function p(){t==="X"?t="O":t="X",d.innerText=t}function m(){for(let e=0;e<f.length;e++){const[o,l,c]=f[e];if(i[o]===t&&i[l]===t&&i[c]===t)return s[o].classList.add("bg-winning-color"),s[l].classList.add("bg-winning-color"),s[c].classList.add("bg-winning-color"),!0}return!1}function y(){for(let e=0;e<i.length;e++)if(i[e]==="")return!1;return!0}g.addEventListener("click",()=>{s.forEach(e=>{e.innerText="",e.style.cursor="pointer",e.style.backgroundColor="",e.classList.remove("bg-winning-color")}),t="X",d.innerText=t,i=["","","","","","","","",""],u.innerText=`Current Player - ${t}`});
