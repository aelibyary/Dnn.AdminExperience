!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-tooltip"),require("react")):"function"==typeof define&&define.amd?define(["dnn-tooltip","react"],t):"object"==typeof exports?exports.Switch=t(require("dnn-tooltip"),require("react")):e.Switch=t(e["dnn-tooltip"],e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=r(l),p=n(5),f=r(p);n(4);var d=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={switchActive:e.value,innerStateSet:!1},n}return a(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({switchActive:e.value})}},{key:"toggleStatus",value:function(){var e=this.props,t=this.state;e.readOnly||"function"==typeof this.props.onChange&&e.onChange(!t.switchActive)}},{key:"getClassName",value:function(){var e=this.props,t="dnn-switch";return e.value&&(t+=" dnn-switch-active"),e.readOnly&&(t+=" dnn-switch-readonly"),e.labelPlacement&&(t+=" place-"+e.labelPlacement),t}},{key:"render",value:function(){var e=this.props,t=this.state,n=e.tooltipMessage instanceof Array?e.tooltipMessage:[e.tooltipMessage];return c["default"].createElement("div",{className:"dnn-switch-container"},e.label&&c["default"].createElement("span",{className:"switch-label"},e.label),c["default"].createElement(f["default"],{messages:n,type:"info",className:e.placement,tooltipPlace:e.tooltipPlace,rendered:e.tooltipMessage}),c["default"].createElement("span",{className:this.getClassName(),onClick:this.toggleStatus.bind(this)},c["default"].createElement("span",{className:"mark"}),!e.labelHidden&&c["default"].createElement("label",null,t.switchActive?e.onText:e.offText)))}}]),t}(l.Component);d.propTypes={value:l.PropTypes.bool,labelHidden:l.PropTypes.bool,onText:l.PropTypes.string,offText:l.PropTypes.string,label:l.PropTypes.string,onChange:l.PropTypes.func,readOnly:l.PropTypes.bool,labelPlacement:l.PropTypes.oneOf(["left","right"]),tooltipMessage:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.array]),placement:l.PropTypes.string,tooltipPlace:l.PropTypes.string},d.defaultProps={onText:"On",offText:"Off",labelPlacement:"left"},t["default"]=d},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-switch-container{float:left;padding:5px 0}.dnn-switch-container .dnn-ui-common-tooltip{float:left;margin-left:10px}.dnn-switch-container .dnn-ui-common-tooltip .tooltip-text{max-width:255px;text-align:center;padding:7px 15px}.dnn-switch-container .dnn-ui-common-tooltip svg{width:20px;height:20px}.dnn-switch-container .switch-label{padding-top:1px;color:#46292b;font-size:13px;font-weight:700;float:left}.dnn-switch-container .dnn-switch{display:inline-block;position:relative;width:45px;height:21px;border-radius:14px;border:1px solid #959695;background-color:#c8c8c8;margin:0;cursor:pointer;-webkit-transition:background .1s linear;transition:background .1s linear}.dnn-switch-container .dnn-switch.place-left{margin-left:25px}.dnn-switch-container .dnn-switch.place-left>label{left:-25px}.dnn-switch-container .dnn-switch.place-right{margin-right:25px}.dnn-switch-container .dnn-switch.place-right>label{right:-25px}.dnn-switch-container .dnn-switch>label{position:absolute;margin-top:2px;color:#46292b}.dnn-switch-container .dnn-switch.dnn-switch-active{background-color:#21a3da;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-active .mark{left:24px;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-readonly{border:1px solid #e5e7e6;cursor:not-allowed;background-color:#e5e7e6}.dnn-switch-container .dnn-switch.dnn-switch-readonly .mark{border:1px solid #e5e7e6;background-color:#eff0f0}.dnn-switch-container .dnn-switch .mark{width:21px;height:21px;display:inline-block;border-radius:13px;background-color:#fff;border:1px solid #959695;position:absolute;top:0;left:0;box-sizing:border-box;-webkit-transition:left .1s linear,background-color .1s linear,border-color .1s linear;transition:left .1s linear,background-color .1s linear,border-color .1s linear}.dnn-switch-container .dnn-switch .mark img{display:none}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));u[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],c={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=g(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=s(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var u={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=u[s.id];l.refs--,i.push(l)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete u[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});