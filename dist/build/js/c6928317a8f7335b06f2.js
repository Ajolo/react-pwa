(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{271:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(69);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=i(this,s(t).call(this,e))).state={open:!1},a}var a,l,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["PureComponent"]),a=t,(l=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",{className:"hero-head"},r.a.createElement("section",{className:"hero is-primary is-bold is-medium"},r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"Alex J. Lopez")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/contact",onClick:function(){return e.closeMenuBar()}},"Contact"),r.a.createElement(o.b,{className:"navbar-item",to:"/projects",onClick:function(){return e.closeMenuBar()}},"Projects"),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-primary is-inverted",href:"https://github.com/ajolo",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.closeMenuBar()}},"GitHub")),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-primary is-inverted",href:"https://www.linkedin.com/in/alex-joel-lopez/",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.closeMenuBar()}},"LinkedIn"))))))))}}])&&c(a.prototype,l),m&&c(a,m),t}();t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(m,null),t,r.a.createElement("br",null))}},278:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(271);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("section",{className:"hero is-primary is-bold is-fullheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("section",{className:"m-t-lg"},r.a.createElement("div",{className:"container p-l-md p-r-md"},r.a.createElement("article",{class:"message is-dark"},r.a.createElement("div",{class:"message-body title is-2 has-text-dark"},"(661)675-6864")),r.a.createElement("article",{class:"message is-dark"},r.a.createElement("div",{class:"message-body title is-2 has-text-dark"},r.a.createElement("a",{class:"pure-button",href:"mailto:alexjlopez96@gmail.com",target:"_blank",rel:"noopener noreferrer"},"alexjlopez96@gmail.com"))),r.a.createElement("article",{class:"message is-dark"},r.a.createElement("div",{class:"message-body title is-2 has-text-dark"},r.a.createElement("a",{class:"pure-button",href:"mailto:lopez@spu.edu",target:"_blank",rel:"noopener noreferrer"},"lopez@spu.edu"))))))))}}}]);