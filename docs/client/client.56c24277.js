function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,i){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=a(e,n,r,i);t.p(o,c)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function _(){return h("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function b(t){return v(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let P;function x(t){P=t}function N(){if(!P)throw new Error("Function called outside component initialization");return P}function w(t){N().$$.before_update.push(t)}function j(t){N().$$.on_mount.push(t)}function C(t){N().$$.after_update.push(t)}const R=[],A=[],I=[],O=[],T=Promise.resolve();let k=!1;function L(t){I.push(t)}function J(t){O.push(t)}let q=!1;const U=new Set;function B(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];x(e),K(e.$$)}for(x(null),R.length=0;A.length;)A.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];U.has(e)||(U.add(e),e())}I.length=0}while(R.length);for(;O.length;)O.pop()();k=!1,q=!1,U.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const M=new Set;let D;function V(){D={r:0,c:[],p:D}}function z(){D.r||o(D.c),D=D.p}function H(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),D.c.push((()=>{M.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function F(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function X(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r,i){const{fragment:c,on_mount:a,on_destroy:f,after_update:l}=t.$$;c&&c.m(e,r),i||L((()=>{const e=a.map(n).filter(s);f?f.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(L)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(R.push(t),k||(k=!0,T.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,i,c,a,f=[-1]){const l=P;x(e);const u=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:n.context||[]),callbacks:r(),dirty:f,skip_bound:!1};let d=!1;if(u.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return u.ctx&&c(u.ctx[t],u.ctx[t]=o)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](o),d&&et(e,t)),n})):[],u.update(),d=!0,o(u.before_update),u.fragment=!!i&&i(u.ctx),n.target){if(n.hydrate){const t=$(n.target);u.fragment&&u.fragment.l(t),t.forEach(p)}else u.fragment&&u.fragment.c();n.intro&&H(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),B()}x(l)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot=[];function st(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const it={};function ct(t){let e,n;const r=t[1].default,o=c(r,t,t[0],null);return{c(){e=d("main"),o&&o.c(),this.h()},l(t){e=y(t,"MAIN",{class:!0});var n=$(e);o&&o.l(n),n.forEach(p),this.h()},h(){g(e,"class","svelte-1vk44dp")},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&f(o,r,t,t[0],e,null,null)},i(t){n||(H(o,t),n=!0)},o(t){Y(o,t),n=!1},d(t){t&&p(e),o&&o.d(t)}}}function at(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ft extends rt{constructor(t){super(),nt(this,t,at,ct,i,{})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=y(t,"PRE",{});var o=$(e);n=v(o,r),o.forEach(p)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function ut(e){let n,r,o,s,i,c,a,f,E,P=e[1].message+"";document.title=n=e[0];let x=e[2]&&e[1].stack&&lt(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),i=m(),c=d("p"),a=h(P),f=m(),x&&x.c(),E=_(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=b(t),o=y(t,"H1",{class:!0});var n=$(o);s=v(n,e[0]),n.forEach(p),i=b(t),c=y(t,"P",{class:!0});var l=$(c);a=v(l,P),l.forEach(p),f=b(t),x&&x.l(t),E=_(),this.h()},h(){g(o,"class","svelte-8od9u6"),g(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,i,e),u(t,c,e),l(c,a),u(t,f,e),x&&x.m(t,e),u(t,E,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&P!==(P=t[1].message+"")&&S(a,P),t[2]&&t[1].stack?x?x.p(t,e):(x=lt(t),x.c(),x.m(E.parentNode,E)):x&&(x.d(1),x=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(i),t&&p(c),t&&p(f),x&&x.d(t),t&&p(E)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class dt extends rt{constructor(t){super(),nt(this,t,pt,ut,i,{status:0,error:1})}}function ht(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&X(n.$$.fragment),r=_()},l(t){n&&Q(n.$$.fragment,t),r=_()},m(t,e){n&&Z(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?F(s,[G(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){V();const t=n;Y(t.$$.fragment,1,0,(()=>{tt(t,1)})),z()}i?(n=new i(c()),X(n.$$.fragment),H(n.$$.fragment,1),Z(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&Y(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&tt(n,t)}}}function mt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){X(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,r){Z(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function _t(t){let e,n,r,o;const s=[mt,ht],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=_()},l(t){n.l(t),r=_()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(V(),Y(i[a],1,1,(()=>{i[a]=null})),z(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){o||(H(n),o=!0)},o(t){Y(n),o=!1},d(t){i[e].d(t),t&&p(r)}}}function gt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){X(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,e){Z(n,t,e),r=!0},p(t,[e]){const r=12&e?F(o,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){Y(n.$$.fragment,t),r=!1},d(t){tt(n,t)}}}function $t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:f}=e;var l,u;return C(f),l=it,u=r,N().$$.context.set(l,u),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,i,c,a,r,f]}class yt extends rt{constructor(t){super(),nt(this,t,$t,gt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[],bt=[{js:()=>Promise.all([import("./index.4d79f8a2.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test1.ae8345b9.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test2.d65dacf5.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test3.e39f3de8.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test4.dd1d4804.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test5.6a84b709.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test6.db4d2263.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test7.b36712c3.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./test8.607803a9.js"),__inject_styles(["client-a6ab5402.css"])]).then((function(t){return t[0]}))}],St=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/test1\/?$/,parts:[{i:1}]},{pattern:/^\/test2\/?$/,parts:[{i:2}]},{pattern:/^\/test3\/?$/,parts:[{i:3}]},{pattern:/^\/test4\/?$/,parts:[{i:4}]},{pattern:/^\/test5\/?$/,parts:[{i:5}]},{pattern:/^\/test6\/?$/,parts:[{i:6}]},{pattern:/^\/test7\/?$/,parts:[{i:7}]},{pattern:/^\/test8\/?$/,parts:[{i:8}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Et(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let xt,Nt=1;const wt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},jt={};let Ct,Rt;function At(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function It(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct))return null;let e=t.pathname.slice(Ct.length);if(""===e&&(e="/"),!vt.some((t=>t.test(e))))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=At(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Ot(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=It(o);if(s){Lt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),wt.pushState({id:xt},"",o.href)}}function Tt(){return{x:pageXOffset,y:pageYOffset}}function kt(t){if(jt[xt]=Tt(),t.state){const e=It(new URL(location.href));e?Lt(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){xt=t}(Nt),wt.replaceState({id:xt},"",location.href)}function Lt(t,e,n,r){return Et(this,void 0,void 0,(function*(){const o=!!e;if(o)xt=e;else{const t=Tt();jt[xt]=t,xt=e=++Nt,jt[xt]=n?t:{x:0,y:0}}if(yield Rt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=jt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),jt[xt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Jt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let qt,Ut=null;function Bt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&function(t){const e=It(new URL(t,Jt(document)));if(e)Ut&&t===Ut.href||(Ut={href:t,promise:re(e)}),Ut.promise}(e.href)}function Kt(t){clearTimeout(qt),qt=setTimeout((()=>{Bt(t)}),20)}function Mt(t,e={noscroll:!1,replaceState:!1}){const n=It(new URL(t,Jt(document)));return n?(wt[e.replaceState?"replaceState":"pushState"]({id:xt},"",t),Lt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Dt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Vt,zt,Ht,Yt=!1,Ft=[],Gt="{}";const Wt={page:function(t){const e=st(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:st(null),session:st(Dt&&Dt.session)};let Xt,Qt,Zt;function te(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ee(t){return Et(this,void 0,void 0,(function*(){Vt&&Wt.preloading.set(!0);const e=function(t){return Ut&&Ut.href===t.href?Ut.promise:re(t)}(t),n=zt={},r=yield e,{redirect:o}=r;if(n===zt)if(o)yield Mt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ne(n,e,te(e,t.page))}}))}function ne(t,e,n){return Et(this,void 0,void 0,(function*(){Wt.page.set(n),Wt.preloading.set(!1),Vt?Vt.$set(e):(e.stores={page:{subscribe:Wt.page.subscribe},preloading:{subscribe:Wt.preloading.subscribe},session:Wt.session},e.level0={props:yield Ht},e.notify=Wt.page.notify,Vt=new yt({target:Zt,props:e,hydrate:!0})),Ft=t,Gt=JSON.stringify(n.query),Yt=!0,Qt=!1}))}function re(t){return Et(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Ht){const t=()=>({});Ht=Dt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Xt)}let c,a=1;try{const o=JSON.stringify(n.query),f=e.pattern.exec(n.path);let l=!1;c=yield Promise.all(e.parts.map(((e,c)=>Et(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==Gt)return!0;const o=Ft[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,f,o)&&(l=!0),s.segments[a]=r[c+1],!e)return{segment:u};const p=a++;if(!Qt&&!l&&Ft[c]&&Ft[c].part===e.i)return Ft[c];l=!1;const{default:d,preload:h}=yield bt[e.i].js();let m;return m=Yt||!Dt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Xt):{}:Dt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:u,match:f,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var oe,se,ie;Wt.session.subscribe((t=>Et(void 0,void 0,void 0,(function*(){if(Xt=t,!Yt)return;Qt=!0;const e=It(new URL(location.href)),n=zt={},{redirect:r,props:o,branch:s}=yield re(e);n===zt&&(r?yield Mt(r.location,{replaceState:!0}):yield ne(s,o,te(o,e.page)))})))),oe={target:document.querySelector("#sapper")},se=oe.target,Zt=se,ie=Dt.baseUrl,Ct=ie,Rt=ee,"scrollRestoration"in wt&&(wt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{wt.scrollRestoration="auto"})),addEventListener("load",(()=>{wt.scrollRestoration="manual"})),addEventListener("click",Ot),addEventListener("popstate",kt),addEventListener("touchstart",Bt),addEventListener("mousemove",Kt),Dt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Dt;Ht||(Ht=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Ht},level1:{props:{status:s,error:i},component:dt},segments:o},a=At(n);ne([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;wt.replaceState({id:Nt},"",e);const n=It(new URL(location.href));if(n)return Lt(n,Nt,!0,t)}));export{J as A,E as B,c as C,f as D,rt as S,m as a,$ as b,y as c,v as d,d as e,p as f,b as g,g as h,nt as i,u as j,l as k,w as l,C as m,t as n,j as o,X as p,Q as q,Z as r,i as s,h as t,S as u,H as v,Y as w,tt as x,A as y,W as z};

import __inject_styles from './inject_styles.5607aec6.js';