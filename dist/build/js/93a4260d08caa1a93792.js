(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{271:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(69);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=l(this,s(t).call(this,e))).state={open:!1},a}var a,i,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n["PureComponent"]),a=t,(i=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",{className:"hero-head"},r.a.createElement("section",{className:"hero is-primary is-bold is-medium"},r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"Alex J. Lopez")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/contact",onClick:function(){return e.closeMenuBar()}},"Contact"),r.a.createElement(o.b,{className:"navbar-item",to:"/projects",onClick:function(){return e.closeMenuBar()}},"Projects"),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-primary is-inverted",href:"https://github.com/ajolo",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.closeMenuBar()}},"GitHub")),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{className:"button is-primary is-inverted",href:"https://www.linkedin.com/in/alex-joel-lopez/",target:"_blank",rel:"noopener noreferrer",onClick:function(){return e.closeMenuBar()}},"LinkedIn"))))))))}}])&&c(a.prototype,i),m&&c(a,m),t}();t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(m,null),t,r.a.createElement("br",null))}},273:function(e,t){e.exports="/images/4247d3fcd26654525326dd749a7cf29e.jpg"},274:function(e,t){e.exports=[{sources:{"1200w":"/images/be0c7676289d89f1f7099acbac10914c.jpg","1000w":"/images/c3ccf2843ade4666be47d98147d0f12c.jpg","800w":"/images/bab15e0fd15b9bc69d63a37b29e4cd97.jpg","600w":"/images/ce4ed7c8d51e495c7522bd822d03dcde.jpg","400w":"/images/ba264ad63c4ffd75c2ffabb60910d2c4.jpg"},type:"image/jpeg",srcSet:"/images/be0c7676289d89f1f7099acbac10914c.jpg 1200w,/images/c3ccf2843ade4666be47d98147d0f12c.jpg 1000w,/images/bab15e0fd15b9bc69d63a37b29e4cd97.jpg 800w,/images/ce4ed7c8d51e495c7522bd822d03dcde.jpg 600w,/images/ba264ad63c4ffd75c2ffabb60910d2c4.jpg 400w",placeholder:{color:[166,145,126,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUdBQUFBd0VCQUFBQUFBQUFBQUFBQUFBQUFBWUhBZ1gveEFBbUVBQUJBd01FQUFjQkFBQUFBQUFBQUFBQkFnTUVBQVVSQmhJaE1RY1RGQ0lqUVdHUi84UUFGZ0VCQVFFQUFBQUFBQUFBQUFBQUFBQUFBZ1FGLzhRQUhoRUJBQUlCQkFNQUFBQUFBQUFBQUFBQUFRQUNJUU1SRWhNeFVZSC8yZ0FNQXdFQUFoRURFUUEvQUczVXZpR1V5RGI5SnlJc2g5ay9JNkNOcXozc1NvNUdlT1QrNHJlcDc1ZjM3UEhtdmVqVlpweFV5Nnk0MGNObzJaUFhLajJEK2l1ODE0WjZWbVNOemR2Y2hLU1VFR0c4cHJuQSt1cWJZK25yWXc2d3kweTRsaHRUcWZKODFSUXNLSHUzQTk1L2xRZGQyenpjZlpvdXBVQXFaa1pzOXRrS3RyQU4xVGJrcEd4TEVoYVZxMmc0QkNqMkQ5VVZTTGRBVkdFaU1sYkphWWVVMjBQVG85cU9DQnpuck5GTXBWUEVHNzduLzlrPSIgZmlsdGVyPSJ1cmwoI3gpIi8+CiAgICAgICAgPC9zdmc+",ratio:1.6}},{sources:{"1200w":"/images/f6a7648705fe8afdee795266c80d19dd.webp","1000w":"/images/d351631a6cccd130191afa38edfede33.webp","800w":"/images/4c723ad44b911d37df59b50554805e40.webp","600w":"/images/3205593c3f4d9318b303759b4d978fd2.webp","400w":"/images/e035b3b01ef908d9f7a9e7a0d0b454e0.webp"},type:"image/webp",srcSet:"/images/f6a7648705fe8afdee795266c80d19dd.webp 1200w,/images/d351631a6cccd130191afa38edfede33.webp 1000w,/images/4c723ad44b911d37df59b50554805e40.webp 800w,/images/3205593c3f4d9318b303759b4d978fd2.webp 600w,/images/e035b3b01ef908d9f7a9e7a0d0b454e0.webp 400w",placeholder:{color:[166,145,126,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUdBQUFBd0VCQUFBQUFBQUFBQUFBQUFBQUFBWUhBZ1gveEFBbUVBQUJBd01FQUFjQkFBQUFBQUFBQUFBQkFnTUVBQVVSQmhJaE1RY1RGQ0lqUVdHUi84UUFGZ0VCQVFFQUFBQUFBQUFBQUFBQUFBQUFBZ1FGLzhRQUhoRUJBQUlCQkFNQUFBQUFBQUFBQUFBQUFRQUNJUU1SRWhNeFVZSC8yZ0FNQXdFQUFoRURFUUEvQUczVXZpR1V5RGI5SnlJc2g5ay9JNkNOcXozc1NvNUdlT1QrNHJlcDc1ZjM3UEhtdmVqVlpweFV5Nnk0MGNObzJaUFhLajJEK2l1ODE0WjZWbVNOemR2Y2hLU1VFR0c4cHJuQSt1cWJZK25yWXc2d3kweTRsaHRUcWZKODFSUXNLSHUzQTk1L2xRZGQyenpjZlpvdXBVQXFaa1pzOXRrS3RyQU4xVGJrcEd4TEVoYVZxMmc0QkNqMkQ5VVZTTGRBVkdFaU1sYkphWWVVMjBQVG85cU9DQnpuck5GTXBWUEVHNzduLzlrPSIgZmlsdGVyPSJ1cmwoI3gpIi8+CiAgICAgICAgPC9zdmc+",ratio:1.6}}]},284:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,a){return t&&m(e.prototype,t),a&&m(e,a),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,u(t).call(this,e))).state={image:t.rearrange(e.image),showImage:!1},a.elementRef=r.a.createRef(),a.observer=null,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n["Component"]),d(t,null,[{key:"rearrange",value:function(e){if(!Array.isArray(e))return e;var t=e.find(function(e){return"image/webp"===e.type.toLowerCase()});if(!t)return e;var a=e.filter(function(e){return e.type&&"image/webp"!==e.type.toLowerCase()});return a.unshift(t),a}},{key:"getFallbackSrc",value:function(e){if("string"==typeof e)return e;if(Array.isArray(e)&&e.length>=2){var t=e.find(function(e){return"image/webp"!==e.type.toLowerCase()});if(!t)t=l(e,1)[0];var a=t.placeholder&&t.placeholder.url?t.placeholder.url:"";if(a)return a;var n=t.sources&&"object"===c(t.sources)&&Object.keys(t.sources).length?t.sources:{},r=Object.keys(n);return r.length?n[r[r.length-1]]:""}return""}},{key:"getSourceSrc",value:function(e){var t=e&&e.sources&&Object.keys(e.sources).length?e.sources:{},a=Object.keys(t);return a.length?t[a[a.length-1]]:""}},{key:"getSrcSet",value:function(e){var a=e&&e.srcSet?e.srcSet:"";return a||"".concat(t.getSourceSrc(e)," 1w")}}]),d(t,[{key:"componentDidMount",value:function(){var e=this;"requestIdleCallback"in window?window.requestIdleCallback(function(){return e.showImage()}):setTimeout(this.showImage(),1)}},{key:"componentWillReceiveProps",value:function(e){this.setState({image:t.rearrange(e.image)})}},{key:"componentWillUnmount",value:function(){this.stopObserving()}},{key:"showImage",value:function(){var e=this;if("IntersectionObserver"in window){this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.intersectionRatio>0&&(e.stopObserving(),e.setState({showImage:!0}))})},{rootMargin:"0px",threshold:.1}),this.observer.observe(this.elementRef.current)}else this.setState({showImage:!0})}},{key:"stopObserving",value:function(){this.observer&&(this.observer.unobserve&&this.observer.unobserve(this.elementRef.current),this.observer.disconnect&&this.observer.disconnect(),this.observer=null)}},{key:"render",value:function(){var e=this.props,a=e.alt,n=e.imgClassName,o=e.pictureClassName,i=this.state,c=i.image,l=i.showImage;return r.a.createElement("picture",{className:o,ref:this.elementRef},l&&c.map(function(e){var a=t.getSrcSet(e);return r.a.createElement("source",{type:e.type,srcSet:a,key:a})}),r.a.createElement("img",{className:n,src:t.getFallbackSrc(c),alt:a}))}}]),t}();f.propTypes={alt:i.a.string,image:i.a.oneOfType([i.a.arrayOf(i.a.shape({sources:i.a.object,type:i.a.string,srcSet:i.a.string,placeholder:i.a.shape({color:i.a.array,url:i.a.string,ratio:i.a.number})})),i.a.string]),pictureClassName:i.a.string,imgClassName:i.a.string},f.defaultProps={alt:"",image:[],pictureClassName:"",imgClassName:""};var b=f,g=a(271),h=a(273),U=a.n(h),v=a(274),y=a.n(v);t.default=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"container p-t-xl p-r-md p-l-md"},r.a.createElement("h1",{className:"title"},"Optimizing user image experience to the best possible level"),r.a.createElement("p",null,"The original size of the image below is"," ",r.a.createElement("code",null,"216.53 kb")," ","You may check the repo. But with implementation of"," ",r.a.createElement("strong",null,"@pawjs/image-optimizer")," ","we were able to reduce the size of image by"," ",r.a.createElement("strong",null,"57%"),". Thus making the final size to just 91.2KB"),r.a.createElement("img",{alt:"Cat & Dog Sleeping",src:U.a}),r.a.createElement("hr",null),r.a.createElement("h2",{className:"title"},"Atyantik (ultimate) Optimization"),r.a.createElement("div",{className:"content"},"Well the above was not enough for us and thus we wanted"," ","more light weight image with undetectable quality loss!"," ","Below is the set of functionality we were looking at:",r.a.createElement("ol",null,r.a.createElement("li",null,"Best Auto Image optimization irrespective of its original size"),r.a.createElement("li",null,"WebP Image format for latest browsers and fallback png/jpeg"," ","image for unsupported browsers."),r.a.createElement("li",null,"Different Images depending on the size of screen. Well that is very important,"," ",'We don"t want any user to download large images for mobile devices! Thus implementing srcset.'),r.a.createElement("li",null,"Why load image instantaneously?"," ","If the SEO bots can wait for image to load, why not users as well? Thus implementing Lazy image loading.")),r.a.createElement("blockquote",null,r.a.createElement("p",null,"To fulfill such complex requirement with simple code we created"," ",r.a.createElement("code",null,"@pawjs/srcset, @pawjs/image-optimizer"))),r.a.createElement("div",{className:"is-medium"},r.a.createElement("h3",null,"Check below!"))),r.a.createElement(b,{alt:"Cat & Dog",image:y.a})))}}}]);