var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,o=parseInt,r="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=r||u||Function("return this")(),s=Object.prototype.toString,m=Math.max,c=Math.min,v=function(){return f.Date.now()};function d(e,t,n){var i,a,l,o,r,u,f=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,l=a;return i=a=void 0,f=t,o=e.apply(l,n)}function h(e){return f=e,r=setTimeout(w,t),s?y(e):o}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-f>=l}function w(){var e=v();if(j(e))return O(e);r=setTimeout(w,function(e){var n=t-(e-u);return d?c(n,l-(e-f)):n}(e))}function O(e){return r=void 0,b&&i?y(e):(i=a=void 0,o)}function T(){var e=v(),n=j(e);if(i=arguments,a=this,u=e,n){if(void 0===r)return h(u);if(d)return r=setTimeout(w,t),y(u)}return void 0===r&&(r=setTimeout(w,t)),o}return t=p(t)||0,g(n)&&(s=!!n.leading,l=(d="maxWait"in n)?m(p(n.maxWait)||0,t):l,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==r&&clearTimeout(r),f=0,i=u=a=r=void 0},T.flush=function(){return void 0===r?o:O(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=a.test(e);return r||l.test(e)?o(e.slice(2),r?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),d(e,t,{leading:i,maxWait:t,trailing:a})};const b=document.querySelector(".feedback-form"),y={email:"",message:""},h=JSON.parse(localStorage.getItem("feedback-form-state"));null!==h&&(b.elements.email.value=h.email,b.elements.message.value=h.message);b.addEventListener("input",t((()=>{0===b.elements.email.value.trim().length&&0===b.elements.message.value.trim().length||(y.email=b.elements.email.value,y.message=b.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(y)))}),500)),b.addEventListener("submit",(function(e){if(0===b.elements.email.value.trim().length||0===b.elements.message.value.trim().length)return void alert("Please fill in all fields");e.preventDefault(),y.email=b.elements.email.value,y.message=b.elements.message.value,console.log(y);for(let e in y)delete y[e];console.log(y),b.elements.message.value="",b.elements.email.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.73df9044.js.map
