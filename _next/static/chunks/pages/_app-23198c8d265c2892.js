(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(310)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,u=r(n(7294)),a=n(1003),l=n(7795),i=n(4465),c=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(h.has(u))return;h.add(u)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:l.formatUrl(e)}let y=u.default.forwardRef(function(e,t){let n,r;let{href:l,as:h,children:y,prefetch:m,passHref:b,replace:_,shallow:x,scroll:j,locale:w,onClick:T,onMouseEnter:C,onTouchStart:E,legacyBehavior:M=!1}=e,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,M&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));let k=!1!==m,P=u.default.useContext(c.RouterContext),O=u.default.useContext(s.AppRouterContext),I=null!=P?P:O,S=!P,{href:D,as:N}=u.default.useMemo(()=>{if(!P){let e=g(l);return{href:e,as:h?g(h):e}}let[t,n]=a.resolveHref(P,l,!0);return{href:t,as:h?a.resolveHref(P,h):n||t}},[P,l,h]),R=u.default.useRef(D),A=u.default.useRef(N);M&&(r=u.default.Children.only(n));let H=M?r&&"object"==typeof r&&r.ref:t,[K,U,B]=f.useIntersection({rootMargin:"200px"}),G=u.default.useCallback(e=>{(A.current!==N||R.current!==D)&&(B(),A.current=N,R.current=D),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[N,H,D,B,K]);u.default.useEffect(()=>{I&&U&&k&&v(I,D,N,{locale:w})},[N,D,U,w,k,null==P?void 0:P.locale,I]);let X={ref:G,onClick(e){M||"function"!=typeof T||T(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?u.default.startTransition(h):h()}(e,I,D,N,_,x,j,w,S,k)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(k||!S)&&v(I,D,N,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(k||!S)&&v(I,D,N,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===r.type&&!("href"in r.props)){let Z=void 0!==w?w:null==P?void 0:P.locale,F=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(N,Z,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);X.href=F||p.addBasePath(i.addLocale(N,Z,null==P?void 0:P.defaultLocale))}return M?u.default.cloneElement(r,X):u.default.createElement("a",Object.assign({},L,X),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[s,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(u){if(!c&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},l.push(n),a.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);let t=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&l.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,c,n,t,s]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(7294),o=n(4686);let u="function"==typeof IntersectionObserver,a=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},310:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(1664),u=n.n(o);function a(){return(0,r.jsx)("header",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(u(),{href:"/",passHref:!0,id:"header-name",children:"Dora Guo"}),(0,r.jsx)("span",{children:" | "}),(0,r.jsx)(u(),{href:"/blog",passHref:!0,id:"header-blog",children:"blog"})]})})}function l(){return(0,r.jsx)("footer",{children:(0,r.jsx)("div",{className:"footer-container",children:(0,r.jsx)("p",{children:"Made at \uD83C\uDF19 by Dora"})})})}n(4744);var i=n(4298),c=n.n(i),s=n(1163),f=n(7294),d=n(3454);let p=d.env.GA_MEASUREMENT_ID,h=e=>{window.gtag("config",p,{page_path:e})};function v(e){let{Component:t,pageProps:n}=e,o=(0,s.useRouter)();return(0,f.useEffect)(()=>{let e=e=>{h(e)};return o.events.on("routeChangeComplete",e),()=>{o.events.off("routeChangeComplete",e)}},[o.events]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-9PJKXZ7BC3"}),(0,r.jsx)(c(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-9PJKXZ7BC3', {\n            page_path: window.location.pathname,\n          });\n        "}}),(0,r.jsx)(a,{}),(0,r.jsx)("main",{className:"container",children:(0,r.jsx)(t,{...n})}),(0,r.jsx)(l,{})]})}},4744:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function u(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===u||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:u}catch(e){t=u}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var i=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?i=r.concat(i):s=-1,i.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=i.length;t;){for(r=i,i=[];++s<t;)r&&r[s].run();s=-1,t=i.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new p(e,t)),1!==i.length||c||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}},a=!0;try{t[e](u,u.exports,r),a=!1}finally{a&&delete n[e]}return u.exports}r.ab="//";var o=r(229);e.exports=o}()},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},4298:function(e,t,n){e.exports=n(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);