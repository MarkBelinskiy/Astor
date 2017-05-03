if (!basket_animation) {
	var animation = 0;
}
if (basket_animation) {
	var animation = 600;
}
if (!basket_direction) {
	var direction = ["fixed-right", "opened-right"];
}
if (basket_direction == 1) {
	var direction = ["fixed-left", "opened-left"];
}
if (basket_direction == 2) {
	var direction = ["fixed-top", "opened-top"];
}
if (basket_direction == 3) {
	var direction = ["fixed-bottom", "opened-bottom"];
}

var sale_finish_replace = ".category-products";

function sale_reinit() {
	// пишем сюда скрипты для переинициализации, например lightbox
	// $(".thumb").lightbox({modal: true});
}

// core
/* perfect-scrollbar v0.6.12 */
!function t(e,n,r){function o(l,a){if(!n[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(t){return this.each(function(){if("object"==typeof t||"undefined"==typeof t){var e=t;i.get(this)||o.initialize(this,e)}else{var n=t;"update"===n?o.update(this):"destroy"===n&&o.destroy(this)}})}}var o=t("../main"),i=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var l=window.jQuery?window.jQuery:window.$;"undefined"!=typeof l&&r(l)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var l={};l.e=function(t,e){var n=document.createElement(t);return n.className=e,n},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},l.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},e.exports=l},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return!(!n||r===e)||(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom"),i=n.toInt=function(t){return parseInt(t,10)||0},l=n.clone=function(t){if(null===t)return null;if(t.constructor===Array)return t.map(l);if("object"==typeof t){var e={};for(var n in t)e[n]=l(t[n]);return e}return t};n.extend=function(t,e){var n=l(t);for(var r in e)n[r]=l(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return i(o.css(t,"width"))+i(o.css(t,"paddingLeft"))+i(o.css(t,"paddingRight"))+i(o.css(t,"borderLeftWidth"))+i(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=function(t){t.stopPropagation()};e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var i=o.toInt(e.scrollbarYHeight/2),s=e.railYRatio*(r.pageY-window.pageYOffset-n(e.scrollbarYRail).top-i),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),u=s/c;u<0?u=0:u>1&&(u=1),a(t,"top",(e.contentHeight-e.containerHeight)*u),l(t),r.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var i=o.toInt(e.scrollbarXWidth/2),s=e.railXRatio*(r.pageX-window.pageXOffset-n(e.scrollbarXRail).left-i),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),u=s/c;u<0?u=0:u>1&&(u=1),a(t,"left",(e.contentWidth-e.containerWidth)*u-e.negativeScrollAdjustment),l(t),r.stopPropagation()})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);o<0?e.scrollbarXLeft=0:o>l?e.scrollbarXLeft=l:e.scrollbarXLeft=o;var a=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",a)}var r=null,o=null,a=function(e){n(e.pageX-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);o<0?e.scrollbarYTop=0:o>l?e.scrollbarYTop=l:e.scrollbarYTop=o;var a=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",a)}var r=null,o=null,a=function(e){n(e.pageY-o),s(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var i=t("../../lib/helper"),l=t("../../lib/dom"),a=t("../instances"),s=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=a.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){if("IFRAME"===d.tagName)d=d.contentDocument.activeElement;else for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=-30;break;case 38:f=30;break;case 39:p=30;break;case 40:f=-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}s(t,"top",t.scrollTop-f),s(t,"left",t.scrollLeft+p),a(t),l=n(p,f),l&&c.preventDefault()}}})}var o=t("../../lib/helper"),i=t("../../lib/dom"),l=t("../instances"),a=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&n<0||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!=typeof e&&"undefined"!=typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function o(e,n){var r=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(r){if("TEXTAREA"!==r.tagName&&!window.getComputedStyle(r).overflow.match(/(scroll|auto)/))return!1;var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&n<0))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&e<0||r.scrollLeft===i&&e>0))return!0}return!1}function a(a){var c=r(a),u=c[0],d=c[1];o(u,d)||(s=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?l(t,"top",t.scrollTop-d*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),s=!0):(l(t,"top",t.scrollTop-d*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),s=s||n(u,d),s&&(a.stopPropagation(),a.preventDefault()))}var s=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",a):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",a)}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){i(t)})}var o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return i.get(t)?(a(t,"top",t.scrollTop+u.top),a(t,"left",t.scrollLeft+u.left),void l(t)):void clearInterval(c)},50))}function s(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,s())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,s())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<i.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>i.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<i.top+3?(i.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>i.bottom-3?(n.y-i.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?s():r()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function o(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),a=Math.abs(r);if(a>l){if(r<0&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>a&&(n<0&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function s(e,n){a(t,"top",t.scrollTop-n),a(t,"left",t.scrollLeft-e),l(t)}function c(){Y=!0}function u(){Y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(p(t)){w=!0;var e=d(t);v.pageX=e.pageX,v.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!w&&e.settings.swipePropagation&&f(t),!Y&&w&&p(t)){var n=d(t),r={pageX:n.pageX,pageY:n.pageY},i=r.pageX-v.pageX,l=r.pageY-v.pageY;s(i,l),v=r;var a=(new Date).getTime(),c=a-g;c>0&&(m.x=i/c,m.y=l/c,g=a),o(i,l)&&(t.stopPropagation(),t.preventDefault())}}function b(){!Y&&w&&(w=!1,clearInterval(y),y=setInterval(function(){return i.get(t)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(s(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var v={},g=0,m={},y=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){if(o.env.supportsTouch||o.env.supportsIePointer){var e=i.get(t);r(t,e,o.env.supportsTouch,o.env.supportsIePointer)}}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),i=t("./instances"),l=t("./update-geometry"),a={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},s=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps-container");var n=i.add(t);n.settings=r.extend(n.settings,e),o.add(t,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(e){a[e](t)}),s(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){s.add(t,"ps-focus")}function n(){s.remove(t,"ps-focus")}var r=this;r.settings=a.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===u.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new d,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=u.appendTo(u.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=u.appendTo(u.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=a.toInt(u.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:a.toInt(u.css(r.scrollbarXRail,"top")),r.railBorderXWidth=a.toInt(u.css(r.scrollbarXRail,"borderLeftWidth"))+a.toInt(u.css(r.scrollbarXRail,"borderRightWidth")),u.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=a.toInt(u.css(r.scrollbarXRail,"marginLeft"))+a.toInt(u.css(r.scrollbarXRail,"marginRight")),u.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=u.appendTo(u.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=u.appendTo(u.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=a.toInt(u.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:a.toInt(u.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?a.outerWidth(r.scrollbarY):null,r.railBorderYWidth=a.toInt(u.css(r.scrollbarYRail,"borderTopWidth"))+a.toInt(u.css(r.scrollbarYRail,"borderBottomWidth")),u.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=a.toInt(u.css(r.scrollbarYRail,"marginTop"))+a.toInt(u.css(r.scrollbarYRail,"marginBottom")),u.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var a=t("../lib/helper"),s=t("../lib/class"),c=t("./default-setting"),u=t("../lib/dom"),d=t("../lib/event-manager"),p=t("../lib/guid"),f={};n.add=function(t){var e=p();return i(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],l(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,a.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,a.css(e.scrollbarYRail,r),a.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),a.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=t("../lib/helper"),l=t("../lib/class"),a=t("../lib/dom"),s=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=a.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=a.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){a.remove(t)}),a.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?l.add(t,"ps-active-x"):(l.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?l.add(t,"ps-active-y"):(l.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),a=document.createEvent("Event"),s=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),h=document.createEvent("Event"),b=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),a.initEvent("ps-scroll-down",!0,!0),s.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),h.initEvent("ps-y-reach-start",!0,!0),b.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(h)),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(p));var v=i.get(t);"top"===e&&n>=v.contentHeight-v.containerHeight&&(n=v.contentHeight-v.containerHeight,n-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(b)),"left"===e&&n>=v.contentWidth-v.containerWidth&&(n=v.contentWidth-v.containerWidth,n-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(f)),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&n<r&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(a),"left"===e&&n<o&&t.dispatchEvent(s),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),i=t("./instances"),l=t("./update-geometry"),a=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),l(t),a(t,"top",t.scrollTop),a(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);

$(document).ready(function () {
	$("body").append('<div class="sale-popup"></div>');

	if (basket_type == 1) {
		$('body').append('<div class="sale-basket-overlay"></div>');
		$('#sale-basket-goods').wrap('<div class="sale-basket-animation-' + direction[0] + ' sale-toshow"></div>').before('<div class="sale-basket-title">Моя корзина</div>');
		$('#sale-basket-goods').perfectScrollbar();
	}

	$("#sale-basket-goods").on("mouseenter", function () {
		$('#sale-basket-goods').perfectScrollbar('update');
	});

	$(".sale-basket-overlay").on("click", function () {
		$(".sale-toshow").removeClass(direction[1]);
		$(".sale-basket-overlay").fadeOut(600);
	});

	if (typeof generate_gs !== "undefined") {
		var sale_price_change = generate_gs.join(', ');
		$(sale_price_change).on("change click", function (event) {
			// false as select click
			if (event.type == "click" && $(this).prop("tagName").toLowerCase() == "select") {
				return false;
			}

			// if button
			if (event.type == "click" && $(event.target).prop("tagName").toLowerCase() == "button") {
				$(this).find("button").removeClass("active");
				$(event.target).addClass("active");
			}

			// if span
			if (event.type == "click" && $(event.target).prop("tagName").toLowerCase() == "span") {
				$(this).find("span").removeClass("active");
				$(event.target).addClass("active");
			}

			var price_real = generate_gp,
			price_old = generate_gp;
			var newsid = $(this).attr("id");
			var what_element_changed = $(this).prop("tagName").toLowerCase();
			var type_changed = $(this).attr("type");

			//if select
			if (what_element_changed == "select") {
				var type_changed_selected = $(this).find("option:selected");
			}

			//if button
			if (what_element_changed == "div") {
				var type_changed_selected = $(this).find("button.active");
			}

			//if color
			if (what_element_changed == "color") {
				var type_changed_selected = $(this).find("span.active");
			}

			var old_price_main = type_changed_selected.attr("old");
			var new_price_main = type_changed_selected.attr("new");
			var real_price_main = (typeof new_price_main !== "undefined") ? new_price_main : old_price_main;

			$.each(generate_gs, function (i, e) {
				var what_element = $(e).prop("tagName").toLowerCase();
				var type_this = $(e).attr("type");

				//if select
				if (what_element == "select") {
					var selected_option = $(e).find("option:selected");
				}

				//if button
				if (what_element == "div") {
					var selected_option = $(e).find("button.active");
				}

				//if color
				if (what_element == "color") {
					var selected_option = $(e).find("span.active");
				}
				var old_price = selected_option.attr("old");
				var new_price = selected_option.attr("new");
				var add_price = selected_option.attr("add");

				if (type_changed == "replace" && type_this != "replace" && real_price_main != generate_gp) {
					if (what_element == "select") {
						$(e).find("option:first-child").prop("selected", true);
						$(e).prop("disabled", true);
					}
					if (what_element == "div") {
						$(e).find("button").removeClass("active");
						$(e).find("button:first-child").addClass("active");
						$(e).find("button").prop("disabled", true);
					}
					if (what_element == "color") {
						$(e).find("span").removeClass("active");
						$(e).find("span:first-child").addClass("active");
						$(e).find("span").addClass("disabled");
					}
				} else {
					if (what_element == "select") {
						$(e).prop("disabled", false);
					}
					if (what_element == "div") {
						$(e).find("button").prop("disabled", false);
					}
					if (what_element == "color") {
						$(e).find("span").removeClass("disabled");
					}
				}
				if (type_this == "on" && type_changed != "replace") {
					if (typeof new_price !== "undefined") {
						price_real = Number(new_price);
					}
					price_old = Number(old_price);
				}
				if (type_this == "add" && type_changed != "replace") {
					if (typeof new_price !== "undefined") {
						price_real = Number(price_real) + Number(add_price);
					}
					price_old = Number(price_old) + Number(add_price);
				}
				if (type_changed == "replace" && type_this == "replace") {
					if (typeof new_price !== "undefined") {
						price_real = Number(new_price);
					}
					price_old = Number(old_price);
				}
			});

			// add type
			eval("sale_goods_info_" + newsid).sale_type = type_changed;

			if (typeof new_price_main !== "undefined") {
				$(".sale-price-old").html(price_old + sale_currency);
				$(".sale-price-real").html(price_real + sale_currency);
				eval("sale_goods_info_" + newsid).sale_getprice = price_real + sale_currency;
			} else {
				$(".sale-price-real").html(price_old + sale_currency);
				eval("sale_goods_info_" + newsid).sale_getprice = price_old + sale_currency;
			}
		});
	}

	$(window).resize(function () {
		basket_resize();
	});

	$(document).on("click", ".ui-widget-overlay", function (e) {
		$("#sale-basket-goods").dialog("close");
	});

	$(document).on("click", "#sale-box", function (e) {
		e.preventDefault();
		basket();
	});

	$(".sale-gen-pm i.fa-minus").click(function () {
		var iv = $(this).next("input").val();
		if (iv > 1) {
			$(this).next("input").val(Number(iv) - 1);
		}
	});
	$(".sale-gen-pm i.fa-plus").click(function () {
		var iv = $(this).prev("input").val();
		$(this).prev("input").val(Number(iv) + 1);
	});

	// поиск куки и наполнение корзины
	if ($.cookie('sale-cookie-info')) {
		$(".sale-empty-tr").css("display", "none");
		var cookie_arr = JSON.parse($.cookie('sale-cookie-info'));
		$.each(cookie_arr, function (sale_id, sale_item) {
			if (sale_item.full_img) {
				var check_img = '<a href="' + sale_item.full_img + '" class="sale-goods-full image thumb" title="' + sale_item.title + '"><img src="' + sale_item.img + '" class="sale-goods-img"></a>';
			} else {
				var check_img = '<img src="' + sale_item.img + '" class="sale-goods-img">';
			}
			var req = sale_count_onoff == "0" ? " hidden readonly" : "";
			if (document.location.pathname != "/order.html") {
				var what_page = ".sale-goods";
				$(what_page).append('<tr class="sale-goods-item" sale-id="' + sale_id + '"><td>' + check_img + '</td><td><span class="sale-goods-item-name">' + sale_item.title + '<button class="sale-goods-delete" sale-id="' + sale_id + '"><i class="fa fa-times"></i></button><input class="sale-goods-item-count" value="' + sale_item.count + '" type="text" sale-options=\'' + sale_item.options + '\' sale-id="' + sale_id + '"' + req + '></span><span class="sale-goods-item-price">' + sale_item.price + '</span></td></tr>');
			} else {
				$("#sale-basket").hide().remove();
			}
		});
		sale_order();
		sale_count();
		sale_calc();
		sale_reinit();
	}

	// show hide click
	$(document).on("click", ".sale-show-hide", function () {
		$(".sale-show-hide-items").slideToggle(150, function () {
			if ($(this).is(":visible")) {
				s_h = "open"
			} else {
				s_h = "close"
			}
			$.cookie('sale-show-hide', s_h, {
				path : '/'
			});
		});
	});

	// перемещение продукта
/*	$(".sale-news").draggable({
		revert : true,
		drag : function () {
			$(this).addClass("active");
			$(this).closest("#dle-content").addClass("active");
		},
		stop : function () {
			$(this).removeClass("active").closest("#dle-content").removeClass("active");
		}
	});*/

	// кнопка купить
	$(document).on("click", ".sale-buy", function (e) {
		e.preventDefault();
		var sale_moved = $(this).data("id");
		sale_func(sale_moved);
	});

	// кнопка упаковку
	$(document).on("click", ".sale-buy-pack", function (e) {
		e.preventDefault();
		var sale_moved = $(this).data("id");
		var how_many = $(this).data("how");
		sale_func(sale_moved, how_many);
	});

	// быстрый заказ
	$(document).on("click", ".sale-buy-fast", function (e) {
		e.preventDefault();
		var sale_moved = $(this).data("id");
		sale_func(sale_moved, false, "/order.html");
	});

	// закидывание в корзину
	if (typeof droppable == 'function') {
		$("#sale-basket").droppable({
			activeClass : "active",
			hoverClass : "hover",
			tolerance : "touch",
			drop : function (event, ui) {
				var sale_moved = ui.draggable;
				sale_func(sale_moved);
			}
		});
	}

	// обновить
	$(document).on("click", ".sale-refresh", function () {
		location.reload();
	});

	// изменение количества
	$(document).on("keyup", ".sale-goods-item-count", function () {
		if($(this).val() < 1) {
			$(this).val(1);
			return false;
		}
		sale_recount($(this));
	});
	
	// изменение количества плюс/минус
	$(document).on("click", ".sale-count-og>.fa-minus, .sale-count-og>.fa-plus", function (e) {
		var allready = Number($(this).parent().children(".sale-goods-item-count").val());
		if($(e.target).hasClass("fa-plus")) {
			var count_that = $(this).parent().children(".sale-goods-item-count").val(allready+1);
			sale_recount(count_that);
		} else {
			if(allready > 1) {
				var count_that = $(this).parent().children(".sale-goods-item-count").val(allready-1);
				sale_recount(count_that);
			} else {
				$(this).parent().children(".sale-goods-item-count").val(1);
			}
		}
	});

	// Функция для удаления товара из списка
	$(document).on("click", ".sale-goods-delete", function () {
		var delete_id = $(this).attr("sale-id");
		$(this).closest("tr").fadeOut(150, function () {
			$(this).remove();
			if ($.cookie('sale-cookie-info')) {
				var cookie_arr = JSON.parse($.cookie('sale-cookie-info'));
				if (count(cookie_arr) > 1) {
					delete cookie_arr[delete_id];
					var save_sale_cookie = JSON.stringify(cookie_arr);
					$.cookie('sale-cookie-info', save_sale_cookie, {
						path : '/'
					});
				} else {
					$.removeCookie('sale-cookie-info', {
						path : '/'
					});
					$(".sale-empty-tr").css("display", "block");
					if (document.location.pathname == "/order.html") {
						location.reload();
					}
				}
			}
			if (document.location.pathname == "/order.html" && refresh_ajax) {
				$.ajax({
					url : "/engine/ajax/sale.php",
					data : {
						action : 'refresh_items',
					},
					type : "POST",
					success : function (data) {
						$(".sale-order-page").next("script").remove();
						$(".sale-order-page").replaceWith(data);
						sale_reinit();
					}
				});
			} else {
				basket_resize();
				sale_order();
				sale_count();
			}
		});
	});

	// errors
	function sale_errors(field) {
		$.each(field, function (key, val) {
			$(".sale-finish-" + val).addClass("sale-order-error");
			setTimeout(function () {
				$(".sale-finish-" + val).removeClass("sale-order-error");
			}, 2000);
		});
	}

	// заказ
	$(".sale-finish").on("click", function () {
		var name = $(".sale-finish-name").val();
		var userid = $(".sale-finish-name").attr("user");
		var email = $(".sale-finish-email").val();
		var payment = $(".sale-finish-payment option:selected").text();
		var method = $(".sale-finish-payment option:selected").val();
		var delivery = $(".sale-finish-delivery option:selected").text();
		var comment = $(".sale-finish-comment").val();
		var total = $(".sale-price-total").text();
		var count = $(".sale-goods-count").text();
		var xf = [];
		$(".xf-sale").each(function (i, v) {
			xf[i] = {
				name : $(this).attr("name"),
				value : $(this).val()
			}
		});
		var items = [];
		$(".sale-goods-item-count").each(function (i, v) {
			items[i] = {
				id : $(this).attr("sale-id"),
				count : $(this).val(),
				options : $(this).attr("sale-options")
			}
		});
		$.ajax({
			url : "/engine/ajax/sale.php",
			data : {
				action : 'sale_finish',
				name : name,
				userid : userid,
				xf : xf,
				email : email,
				payment : payment,
				method : method,
				delivery : delivery,
				comment : comment,
				total : total,
				count : count,
				items : items
			},
			type : "POST",
			success : function (data) {
				if (data.error !== undefined) {
					sale_errors(data.error);
				} else if (data.liqpay !== undefined) {
					location.href = data.liqpay[0];
				} else if (data.unitpay !== undefined) {
					location.href = data.unitpay[0];
				} else {
					$(sale_finish_replace).slideUp(750, function () {
						$(this).replaceWith(data).slideDown(750);
						$("html, body").animate({
							scrollTop : 0
						}, 750);
						$.removeCookie('sale-cookie-info', {
							path : '/'
						});
					});
				}
			}
		});
	});
});

// корзина
function basket() {
	if (!basket_type) {
		$('#sale-basket-goods').dialog({
			autoOpen : true,
			resizable : false,
			modal : true,
			draggable : false,
			width : "auto",
			height : "auto",
			title : "Корзина",
			hide : {
				delay : animation
			},
			dialogClass : "modalfixed dle-popup-alert",
			create : function (event, ui) {
				if (basket_animation) {
					$('.modalfixed.ui-dialog').addClass(direction[0]);
				}
			},
			open : function (event, ui) {
				if (basket_animation) {
					$('.modalfixed.ui-dialog').addClass(direction[1]);
				}
				$('#sale-basket-goods').dialog("option", "position", {
					my : "center",
					at : "center",
					of : window
				});
				sale_reinit();
			},
			beforeClose : function (event, ui) {
				if (basket_animation) {
					$('.modalfixed.ui-dialog').removeClass(direction[1]);
				} else {
					$(".ui-widget, .ui-widget-overlay").remove();
				}
			},
			buttons : {
				'Оформить заказ' : function () {
					location.href = "/order.html";
				}
			}
		});
	}
	if (basket_type == 1) {
		$(".sale-toshow").addClass(direction[1]);
		$(".sale-basket-overlay").fadeIn(600);
	}
}

// ресайз
function basket_resize() {
	if ($(".ui-dialog").length)
		$("#sale-basket-goods").dialog("option", "position", {
			my : "center",
			at : "center",
			of : window
		});
}

// пересчет количества в корзине
function sale_recount(elem) {
	var t_id = $(elem).attr("sale-id");
	var changed_value = $(elem).val();
	var cookie_arr = JSON.parse($.cookie('sale-cookie-info'));
	cookie_arr[t_id] = {
		"id" : cookie_arr[t_id]['id'],
		"options" : cookie_arr[t_id]['options'],
		"title" : cookie_arr[t_id]['title'],
		"price" : cookie_arr[t_id]['price'],
		"img" : cookie_arr[t_id]['img'],
		"full_img" : cookie_arr[t_id]['full_img'],
		"count" : changed_value
	};
	var save_sale_cookie = JSON.stringify(cookie_arr);
	sale_cookie(save_sale_cookie);
	sale_count();
	sale_calc();
	if (document.location.pathname == "/order.html" && refresh_ajax) {
		$.ajax({
			url : "/engine/ajax/sale.php",
			data : {
				action : 'refresh_items',
			},
			type : "POST",
			success : function (data) {
				$(".sale-order-page").next("script").remove();
				$(".sale-order-page").replaceWith(data);
				sale_reinit();
			}
		});
	}
}

// запись/перезапись в куки
function sale_cookie(save_sale_cookie) {
	$.cookie('sale-cookie-info', save_sale_cookie, {
		path : '/'
	});
}

// показать/скрыть кнопку
function sale_order() {
	var if_find = $("#sale-basket").find(".sale-goods-item").length;
	var if_find_button = $("#sale-basket").find(".sale-goods-order").length;
	if (if_find > 0) {
		$(".sale-goods-order").show();
	} else {
		$(".sale-goods-order").hide();
	}
}

// калькулятор
function sale_calc() {
	var calc = 0;
	$(".sale-goods-item").each(function () {
		var price = $(this).find(".sale-goods-item-price").html();
		var count = $(this).find(".sale-goods-item-count").val();
		calc = (Number(price) * Number(count)) + Number(calc);
	});
	if (document.location.pathname != "/order.html") {
		$(".sale-price-total").html(calc + " " + sale_currency);
	}
}

// товаров в корзине
function sale_count() {
	var items_count = 0;
	$(".sale-goods-item-count").each(function () {
		items_count = Number($(this).val()) + Number(items_count);
	});
	$(".sale-goods-count").html(items_count);
}

// base64
function base64_encode(stringToEncode) {
	if (typeof window !== 'undefined') {
		if (typeof window.btoa !== 'undefined') {
			return window.btoa(escape(encodeURIComponent(stringToEncode)))
		}
	} else {
		return new Buffer(stringToEncode).toString('base64')
	}

	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		var o1
		var o2
		var o3
		var h1
		var h2
		var h3
		var h4
		var bits
		var i = 0
		var ac = 0
		var enc = ''
		var tmpArr = []

		if (!stringToEncode) {
			return stringToEncode
		}

		stringToEncode = unescape(encodeURIComponent(stringToEncode))

		do {
			o1 = stringToEncode.charCodeAt(i++)
				o2 = stringToEncode.charCodeAt(i++)
				o3 = stringToEncode.charCodeAt(i++)
				bits = o1 << 16 | o2 << 8 | o3
				h1 = bits >> 18 & 0x3f
				h2 = bits >> 12 & 0x3f
				h3 = bits >> 6 & 0x3f
				h4 = bits & 0x3f
				tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
		} while (i < stringToEncode.length)
		enc = tmpArr.join('')
		var r = stringToEncode.length % 3

		return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}

function base64_decode(encodedData) {
	if (typeof window !== 'undefined') {
		if (typeof window.atob !== 'undefined') {
			return decodeURIComponent(unescape(window.atob(encodedData)))
		}
	} else {
		return new Buffer(encodedData, 'base64').toString('utf-8')
	}

	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		var o1
		var o2
		var o3
		var h1
		var h2
		var h3
		var h4
		var bits
		var i = 0
		var ac = 0
		var dec = ''
		var tmpArr = []

		if (!encodedData) {
			return encodedData
		}

		encodedData += ''

		do {
			h1 = b64.indexOf(encodedData.charAt(i++))
				h2 = b64.indexOf(encodedData.charAt(i++))
				h3 = b64.indexOf(encodedData.charAt(i++))
				h4 = b64.indexOf(encodedData.charAt(i++))

				bits = h1 << 18 | h2 << 12 | h3 << 6 | h4

				o1 = bits >> 16 & 0xff
				o2 = bits >> 8 & 0xff
				o3 = bits & 0xff

				if (h3 === 64) {
					tmpArr[ac++] = String.fromCharCode(o1)
				} else if (h4 === 64) {
					tmpArr[ac++] = String.fromCharCode(o1, o2)
				} else {
					tmpArr[ac++] = String.fromCharCode(o1, o2, o3)
				}
		} while (i < encodedData.length)

		dec = tmpArr.join('')

		return decodeURIComponent(escape(dec.replace(/\0+$/, '')))
}

// корзина функция
function sale_func(sale_moved, how_many, fast) {
	// получаем куки
	if (!$.cookie('sale-cookie-info')) {
		var cookie_arr = {};
	} else {
		var cookie_arr = JSON.parse($.cookie('sale-cookie-info'));
	}

	var func = "on";

	// наполняем опции, если есть
	var sale_options = {};
	if (typeof generate_en !== "undefined") {
		$.each(generate_en, function (i, e) {
			if ($(".sale-gen-select-" + e + " option:selected").val())
				sale_options[e] = $(".sale-gen-select-" + e + " option:selected").val();
		});
	}

	// наполняем строки и заголовки
	var string_options = [];
	var title_options = "";
	$.each(sale_options, function (i, e) {
		string_options.push(e);
		title_options += " (" + e + ")";
	});

	// очищаем заголовки и объеденяем куки
	var sale_opt_for_title = eval("sale_goods_info_" + sale_moved).sale_gettitle + " " + title_options.trim();
	var sale_opt_for_cookie = JSON.stringify(sale_options);
	sale_to_title = sale_opt_for_title.replace(/\(\)/g, "").trim(); // replace title
	var sale_to_cookie = string_options.join("_");

	// проверяем количество
	if (!how_many) {
		if ($(".sale-count-buy").val()) {
			var new_count = $(".sale-count-buy").val();
		} else {
			var new_count = 1;
		}
	} else {
		var new_count = how_many;
	}

	// проверяем товар в корзине, если не включено количество
	$(document).find(".sale-goods-item").each(function () {
		if (sale_count_onoff == "0" && sale_to_title == $(this).find(".sale-goods-item-name").text()) {
			$(".sale-popup").html('Товар уже в корзине').addClass("moved").delay(2000).queue(function () {
				$(this).removeClass("moved").dequeue()
			});
			func = "off";
		}
	});
	if (func == "off")
		return false;

	// сообщение
	$(".sale-popup").html('Товар &laquo;' + sale_to_title + '&raquo; успешно добавлен в корзину').addClass("moved").delay(2000).queue(function () {
		$(this).removeClass("moved").dequeue()
	});

	// получаем из ajax
	var sale_price = eval("sale_goods_info_" + sale_moved).sale_getprice;
	var sale_img = eval("sale_goods_info_" + sale_moved).sale_getphoto;
	var sale_full_img = eval("sale_goods_info_" + sale_moved).sale_getphoto;
	var check_img = sale_full_img ? '<a href="' + sale_full_img + '" class="sale-goods-full image thumb" title="' + sale_to_title + '"><img src="' + sale_img + '" class="sale-goods-img"></a>' : '<img src="' + sale_img + '" class="sale-goods-img">';

	// проверяем в цикле товары в корзине
	$(document).find(".sale-goods-item").each(function () {
		if (sale_to_title == $(this).find(".sale-goods-item-name").text() && $(this).attr("sale-id") == sale_moved + "_" + sale_to_cookie) {
			var item_count = $(this).find(".sale-goods-item-count");
			var item_count_this = Number(item_count.val()) + Number(new_count);
			item_count.val(item_count_this);
			cookie_arr[sale_moved + "_" + sale_to_cookie] = {
				"id" : sale_moved,
				"options" : sale_opt_for_cookie,
				"title" : sale_to_title,
				"price" : sale_price,
				"img" : sale_img,
				"full_img" : sale_full_img,
				"count" : item_count_this,
				"type" : eval("sale_goods_info_" + sale_moved).sale_type
			};
			var save_sale_cookie = JSON.stringify(cookie_arr);
			sale_cookie(save_sale_cookie);
			sale_count();
			func = "off";
		}
	});

	if (func == "off")
		return false;

	// запись в куки
	cookie_arr[sale_moved + "_" + sale_to_cookie] = {
		"id" : sale_moved,
		"options" : sale_opt_for_cookie,
		"title" : sale_to_title,
		"price" : sale_price,
		"img" : sale_img,
		"full_img" : sale_full_img,
		"count" : new_count,
		"type" : eval("sale_goods_info_" + sale_moved).sale_type
	};
	var save_sale_cookie = JSON.stringify(cookie_arr);
	sale_cookie(save_sale_cookie);

	// проверка корзины
	$(".sale-empty-tr").css("display", "none");

	// проверка количества
	var req = sale_count_onoff == "0" ? " hidden readonly" : "";
	$(document).find(".sale-goods").append('<tr class="sale-goods-item" sale-id="' + sale_moved + '_' + sale_to_cookie + '"><td>' + check_img + '</td><td><span class="sale-goods-item-name">' + sale_to_title + '<button class="sale-goods-delete" sale-id="' + sale_moved + '_' + sale_to_cookie + '"><i class="fa fa-times"></i></button><input class="sale-goods-item-count" value="' + new_count + '" type="text" sale-options=\'' + sale_opt_for_cookie + '\' sale-id="' + sale_moved + '_' + sale_to_cookie + '"' + req + '></span><span class="sale-goods-item-price">' + sale_price + '</span></td></tr>');
	sale_order();
	sale_count();

	// если быстрая покупка то переходим
	if (fast) {
		location.href = fast;
	}
}

// количество куки в объекте
function count(obj) {
	var count = 0;
	for (var prs in obj) {
		if (obj.hasOwnProperty(prs))
			count++;
	}
	return count;
}

// таймер
var days = 24 * 60 * 60,
hours = 60 * 60,
minutes = 60;

$.fn.countdown = function (prop) {
	var options = $.extend({
			callback : function () {},
			timestamp : 0,
			nleft : 0
		}, prop);
	var left,
	d,
	h,
	m,
	s,
	positions;
	init(this, options);
	test = options.nleft - Math.floor((options.timestamp - (new Date())) / 1000);

	if (test < 0) {
		mp = 0;
	} else {
		mp = 1;
	}
	positions = this.find('.position');

	(function tick() {
		left = Math.floor((options.timestamp - (new Date())) / 1000) + Number(test);
		if (left < 0) {
			left = 0;
		}

		d = Math.floor(left / days);
		updateDuo(0, 1, d);
		left -= d * days;

		h = Math.floor(left / hours);
		updateDuo(2, 3, h);
		left -= h * hours;

		m = Math.floor(left / minutes);
		updateDuo(4, 5, m);
		left -= m * minutes;

		s = left;
		updateDuo(6, 7, s);

		options.callback(d, h, m, s);

		setTimeout(tick, 1000);
	})();

	function updateDuo(minor, major, value) {
		switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
		switchDigit(positions.eq(major), value % 10);
	}
	return this;
};

function init(elem, options) {
	elem.addClass('countdownHolder');
	$.each(['Days', 'Hours', 'Minutes', 'Seconds'], function (i) {
		$('<span class="count' + this + '">').html(
			'<span class="position"><span class="digit static">0</span></span><span class="position"><span class="digit static">0</span></span>').appendTo(elem);

		if (this != "Seconds") {
			elem.append('<span class="countDiv countDiv' + i + '"></span>');
		}
	});
}

function switchDigit(position, number) {
	var digit = position.find('.digit')

		if (position.data('digit') == number) {
			return false;
		}

		position.data('digit', number);

	var replacement = $('<span>', {
			'class' : 'digit',
			html : number
		});

	digit
	.before(replacement)
	.removeClass('static')
	.addClass('delete')
	.delay(500)
	.queue(function () {
		$(this).remove();
		$(this).dequeue();
	});

	replacement
	.delay(500)
	.queue(function () {
		$(this).addClass('static');
		$(this).dequeue();
	});
}

if (typeof sale_timer !== "undefined") {
	$('#sale-countdown').countdown({
		timestamp : sale_timer,
		nleft : sale_howleft,
		callback : function (days, hours, minutes, seconds) {
			if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
				location.reload();
			}
		}
	});
}
