(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"20a2":function(e,t,n){e.exports=n("nOHt")},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),c=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=c.a.createContext&&c.a.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};function s(e){return e&&e.map((function(e,t){return c.a.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return c.a.createElement(f,i({attr:i({},e.attr)},t),s(e.child))}}function f(e){var t=function(t){var n,r=e.attr,o=e.size,a=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),c.a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&c.a.createElement("title",null,a),e.children)};return void 0!==a?c.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},"NqE+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),c=(n("q1tI"),n("hizP"));function o(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{}),t]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),l=n("vNVm"),s={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,m=f.as,p=e.children,j=e.replace,h=e.shallow,b=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var v=o.Children.only(p),O=v&&"object"===typeof v&&v.ref,g=(0,l.useIntersection)({rootMargin:"200px"}),y=r(g,2),w=y[0],N=y[1],k=o.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,o.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,c=s[d+"%"+m+(r?"%"+r:"")];e&&!c&&u(n,d,m,{locale:r})}),[m,d,N,x,t,n]);var E={ref:k,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,m,j,h,b,x)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,d,m,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var C="undefined"!==typeof x?x:n&&n.locale,I=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(m,C,n&&n.locales,n&&n.domainLocales);E.href=I||(0,a.addBasePath)((0,a.addLocale)(m,C,n&&n.defaultLocale))}return o.default.cloneElement(v,E)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},hizP:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),c=(n("q1tI"),n("g4pe")),o=n.n(c),a=n("20a2"),i=n("ukZj");function l(e){var t=e.title,n=e.description,c=e.keyword,l=e.image,s=e.url,u=Object(a.useRouter)(),f=null!==s&&void 0!==s?s:Object(i.a)("".concat("https://nyamadan.github.io").concat(u.asPath)),d=null!==t&&void 0!==t?t:"nyamadan.github.io",m=null!==c&&void 0!==c?c:"programmer,blog",p=null!==l&&void 0!==l?l:"".concat("https://nyamadan.github.io","/images/ogp/ogp.png"),j=null!==n&&void 0!==n?n:"\u30d7\u30ed\u30b0\u30e9\u30de\u306e\u65e5\u5e38\u306a\u3069";return Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:d},"title"),Object(r.jsx)("meta",{name:"description",content:j},"description"),Object(r.jsx)("meta",{property:"og:title",content:d},"og:title"),Object(r.jsx)("meta",{property:"og:description",content:j},"og:description"),Object(r.jsx)("meta",{property:"og:type",content:"blog"},"og:type"),Object(r.jsx)("meta",{property:"og:url",content:f},"og:url"),Object(r.jsx)("meta",{property:"og:image",content:p},"og:image"),Object(r.jsx)("meta",{property:"og:site_name",content:d},"og:site_name"),Object(r.jsx)("meta",{name:"keywords",content:m},"keywords"),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twitter:card"),Object(r.jsx)("meta",{name:"twitter:site",content:"@nyamadandan"},"twitter:site"),Object(r.jsx)("meta",{name:"twitter:url",content:p},"twitter:url"),Object(r.jsx)("meta",{name:"twitter:title",content:d},"twitter:title"),Object(r.jsx)("meta",{name:"twitter:description",content:j},"twitter:description"),Object(r.jsx)("meta",{name:"twitter:image",content:p},"twitter:image"),Object(r.jsx)("link",{rel:"canonical",href:f},"canonical")]})}},soUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n("nKUr"),c=(n("q1tI"),n("YFqc")),o=n.n(c),a=n("ma3e");function i(e){var t=e.children;return Object(r.jsx)("li",{className:" mx-2 list-none ",children:t})}function l(){return Object(r.jsxs)("header",{className:" flex justify-between flex-row items-center py-2 px-4 shadow-lg ",children:[Object(r.jsxs)("h1",{className:" flex flex-no-wrap flex-row items-center text-xl ",children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:" font-bold mr-2 ",children:"nyamadan.github.io"})}),Object(r.jsx)(s,{})]}),Object(r.jsx)("nav",{className:" my-auto ml-auto mr-0 ",children:Object(r.jsxs)("ul",{className:" flex flex-row items-center p-0 mx-auto ",children:[Object(r.jsx)(i,{children:Object(r.jsx)(o.a,{href:"/about",children:Object(r.jsx)("a",{children:"About"})})}),Object(r.jsx)(i,{children:Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{children:"Posts"})})})]})})]})}var s=function(){return Object(r.jsx)(o.a,{href:"/rss.xml",children:Object(r.jsx)("a",{children:Object(r.jsx)(a.c,{})})})},u=function(e){var t=e.children;return Object(r.jsx)("div",{className:" flex flex-row container max-w-5xl mx-auto ",children:t})},f=function(e){var t=e.children;return Object(r.jsx)("div",{className:" container p-4 ",children:t})},d=function(e){var t=e.children;return Object(r.jsx)("div",{className:" container max-w-xs p-4 overflow-hidden relative hidden md:block ",children:t})};function m(e){var t=e.children;return Object(r.jsxs)("div",{className:" flex flex-col min-h-screen overflow-x-hidden ",children:[Object(r.jsx)(l,{}),t,Object(r.jsxs)("footer",{className:" mt-auto mb-0 py-4 text-center ",children:["powered by next.js",Object(r.jsx)("br",{}),"\xa9 2020 nyamadan"]})]})}},ukZj:function(e,t,n){"use strict";function r(e){return e.replace(/\?.*$/,"").replace(/#.*$/,"").replace(/\.html?$/,"").replace(/\/index$/,"").replace(/\/$/,"")}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],m=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[m,f]};var c=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}}]);