parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ppP3":[function(require,module,exports) {
!function(o){var r=new ScrollMagic.Controller,e=[];o(".scroll-scale-up").each(function(){var n=this,i=new ScrollMagic.Scene({triggerElement:n,triggerHook:1,duration:o(window).height()+o(".scroll-scale-up").parent().height()}).addTo(r).on("progress",function(r){var e=1+.2*r.progress.toFixed(3);o(n).css("transform","scale("+e+")")});e.push(i)});var n=null;o(window).on("resize",function(){clearTimeout(n),n=setTimeout(function(){for(var r=0;r<e.length;r++)e[r].duration(o(window).height()+o(o(".scroll-scale-up")[r]).parent().height())},100)})}(jQuery),function(o){var r=new ScrollMagic.Controller,e=[];o(".scroll-fade-in").each(function(){var n=this,i=new ScrollMagic.Scene({triggerElement:n,triggerHook:.9,duration:"40%"}).addTo(r).on("progress",function(r){var e=r.progress.toFixed(3);o(n).css("opacity",e)});e.push(i)});var n=null;o(window).on("resize",function(){clearTimeout(n),n=setTimeout(function(){for(var o=0;o<e.length;o++)e[o].duration("40%")},100)})}(jQuery);
},{}]},{},["ppP3"], null)
//# sourceMappingURL=/scroll-effect.d470798a.js.map