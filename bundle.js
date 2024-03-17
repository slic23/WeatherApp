(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(148),t.b),u=a()(o()),d=s()(l);u.push([e.id,`body {\n    font-family: "Poppins", sans-serif;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: url(${d});\n    color: white;\n}\n\nheader {\n\n\n    \n    display: flex;\n    justify-content: center;\n    column-gap: 50px;\n    align-items: center;\n\n}\n\n\ninput {\n    margin-top: 30px;\n}\n\n\n.hr {\n    width: 1000px;\n}\n\n.logo {\n    background-color:#292929;\n    color: white;\n    padding: 10px;\n    border: none;\n    margin-bottom: 10px; /* Espacio entre el logo y el cuadro de búsqueda */\n}\n\n.search-box {\n    margin-bottom: 20px; /* Espacio entre el cuadro de búsqueda y el siguiente elemento */\n}\n\n\n.main {\n    border: 1px solid black;\n    margin: 0 auto;\n    width: 200px;\n    text-align: center;\n    display: flex;\n}\n\ninput[type="text"] {\n    height: 30px;\n    padding: 5px;\n    border: none;\n    background-color: #f2f2f2;\n    border-radius: 5px; \n    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); \n    width: 200px; \n    transition: background-color 0.3s ease; \n    \n}\n\ninput[type="text"]:focus {\n    background-color: #e0e0e0; /* Darker background color on focus */\n    outline: none; /* Remove default focus outline */\n}\n\n\n\n.city {\n    font-size: 70px;\n    padding-left: 40px;\n\n}\n\n\n.temp {\n    font-size: 70px;\n    justify-self: end;\n}\n\n\n.day {\n    margin-left: 50px;\n    font-size: 25px;\n}\n\n\n.text {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n}\n\n\n.ordenar{\n    margin-left: 60px;\n    display: grid;\n    width: 400px;\n    grid-template-columns: 100px 100px 50px 200px;\n\n\n    align-items:center;\n    \n\n    \n}\n\n.indices {\n   \n    font-size: 20px;\n    \n}\n\n\n.datos {\n    display: grid;\n    \n    grid-template-columns: 230px;\n    padding-right: 40px;\n    \n}\n\n\n.info {\n    \n    \n}\n\n\n\n.icon {\n    padding-left: 40px;\n    \n}\n\n#opt {\n    cursor: pointer;\n}\n\nimg{\n    width: 130px;\n}\n\n.moredetails {\n    margin-left: 100px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row: 0;\n    padding-left: 10px;\n}\n#s {\n    width: 30px;\n    height: 30px;\n    \n}\n\n.kelvin {\n    color: grey;\n}\n\n\n.item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 200px;\n}\n\n\n.raiz {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    width: 50%;\n    padding: 20px;\n    margin: 50px auto 0  auto;\n    gap: 10px;\n   \n}\n\n#imagenDia {\n    width: 50px;\n}\n\n\n.daymore {\n    display: grid;\n    grid-template-columns: 1fr;\n    width: 100%;\n}`,""]);const p=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},148:(e,n,t)=>{e.exports=t.p+"52962b46dbccb84f7853.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),l=t(540),u=t.n(l),d=t(113),p=t.n(d),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=["January","February","March","April","May","June","July","August","September","October","November","December"];document.querySelector("img");let x="";async function h(e){try{document.querySelector("input").value="";const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b87bf8028f854a0c898145318241103&q=${e}&days=5`),t=await n.json(),r={kelvin:t.current.temp_f,celsius:t.current.temp_c,feelslike_c:t.current.feelslike_c,feelslike_f:t.current.feelslike_f};document.querySelector(".feels").textContent=r.feelslike_c+"°C",function(e){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.querySelector(".raiz"));for(let a=0;a<e.length;a++)v((n=y[new Date(e[a].date).getDay()],t=e[a].day.condition.icon,r=e[a].day.mintemp_c,o=e[a].day.maxtemp_c,i=e[a].day.condition.text,{day:n,icono:t,min:r,max:o,text:i}));var n,t,r,o,i}(t.forecast.forecastday),document.querySelector(".humidity").textContent=t.current.humidity+"%",document.querySelector(".wind").textContent=t.current.wind_kph+" km/h",document.querySelector("img").src=t.current.condition.icon,document.querySelector(".city").textContent=t.location.name,document.querySelector(".temp").textContent=t.current.temp_c,document.querySelector(".indices").innerHTML="<span id='opt' class='celsius'>°C</span> | <span id='opt' class='kelvin'>K</span>",document.querySelector(".info").textContent=t.current.condition.text,x=new Date(t.location.localtime),document.querySelector(".day").textContent=y[x.getDay()]+", "+x.getDate()+" "+g[x.getMonth()]+" "+x.getFullYear()+" | "+x.toLocaleTimeString("en-US"),function(e){document.querySelectorAll(".celsius, .kelvin").forEach((n=>{n.addEventListener("click",(n=>{!function(e,n){"°C"===e.target.textContent?(document.querySelector(".temp").textContent=n.celsius,document.querySelector(".feels").textContent=n.feelslike_c+"°C",e.target.style.color="black",document.querySelector(".kelvin").style.color="grey"):"K"===e.target.textContent&&(document.querySelector(".feels").textContent=n.feelslike_f+"K",document.querySelector(".temp").textContent=n.kelvin,e.target.style.color="black",document.querySelector(".celsius").style.color="grey")}(n,e)}))}))}(r)}catch(e){console.log(e)}}function v(e){const n=document.createElement("div");document.querySelector(".raiz").append(n),n.setAttribute("class","daymore");const t=document.createElement("div");n.append(t),t.textContent=e.day;const r=document.createElement("div");n.append(r);const o=document.createElement("img");o.src=e.icono,o.setAttribute("id","imagenDia"),r.append(o);const i=document.createElement("div");n.append(i),i.textContent=`${e.max}°C-${e.min}°C`;const a=document.createElement("div");n.append(a),a.textContent=e.text}document.querySelector("input").addEventListener("keyup",(function(e){e.preventDefault(),("Enter"==e.key||13==e.key)&&h(document.querySelector("input").value)})),h("San javier")})()})();