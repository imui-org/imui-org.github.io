var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}document.addEventListener("DOMContentLoaded",function(){particlesJS.load("particles-js","lib/particlesjs-config.json",function(){});var a=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0<a.length&&a.forEach(function(a){a.addEventListener("click",function(){var b=a.dataset.target,c=document.getElementById(b);a.classList.toggle("is-active"),c.classList.toggle("is-active")})});var b=new CookieBanner("imui-cookies",30);b.init();var c=new ContactForm("contact-name","contact-email","contact-message","contact-privacy","contact-send");c.init()});var ContactForm=function(){function a(b,c,d,e,f){_classCallCheck(this,a),this.name=document.getElementById(b),this.email=document.getElementById(c),this.message=document.getElementById(d),this.privacy=document.getElementById(e),this.send=document.getElementById(f)}return _createClass(a,[{key:"init",value:function b(){var a=this;this.privacy.addEventListener("change",function(b){b.target.checked?a.send.removeAttribute("disabled"):a.send.setAttribute("disabled","")}),this.send.addEventListener("click",function(){console.log("Send")})}}]),a}(),CookieBanner=function(){function a(b,c){_classCallCheck(this,a),this.name=b,this.duration=c}return _createClass(a,[{key:"init",value:function a(){"accept"!=this.checkCookieExist()&&this.createCookieBanner()}},{key:"checkCookieExist",value:function g(){for(var a,b=this.name+"=",d=decodeURIComponent(document.cookie),e=d.split(";"),f=0;f<e.length;f++){for(a=e[f];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return""}},{key:"setCookie",value:function c(){var a=new Date;a.setTime(a.getTime()+1e3*(60*(60*(24*this.duration))));var b="expires="+a.toUTCString();document.cookie=this.name+"=accept;"+b+";path=/"}},{key:"createCookieBanner",value:function h(){var a=this,b=document.getElementsByTagName("body")[0],c=document.createElement("div");c.setAttribute("id","cookie-banner"),c.setAttribute("class","notification is-primary");var d=document.createElement("div");d.setAttribute("class","columns"),c.appendChild(d);var e=document.createElement("p");e.setAttribute("class","column is-four-fifths"),e.innerHTML="Diese Internetseite verwendet Cookies, um die Nutzererfahrung zu verbessern und den Benutzern bestimmte Dienste und Funktionen bereitzustellen. ",d.appendChild(e);var f=document.createElement("a");f.setAttribute("class","column"),f.href="/privacy.html",f.innerText="Datenschutzerkl\xE4rung",d.appendChild(f);var g=document.createElement("button");g.setAttribute("class","delete"),g.onclick=function(){a.setCookie(),b.removeChild(c)},c.appendChild(g),b.appendChild(c)}}]),a}();