import{_ as n,a as t,b as e,c as o,i as r,s as a,d as c,S as i,H as s,e as u,t as f,g as p,h as l,j as g,k as d,n as h,o as v,y as T,I as m,A as R,B as $,q as w,r as W,u as E,f as I,v as b,l as U,w as y,m as M,G as B,x,z as C,C as D,D as P,E as H,F as j}from"./client.3dfb36a3.js";import{W as A}from"./Widget2.f7a0ddf0.js";import{w as O}from"./utils.6bb646a3.js";function V(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(o){var c=t(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return e(this,r)}}function N(n){var t,e,o,r,a=n[2].default,c=s(a,n,n[1],null);return{c:function(){t=u("div"),e=f("Inclusion begins here [\n  "),c&&c.c(),o=f("\n  ] and ends here.")},l:function(n){t=p(n,"DIV",{});var r=l(t);e=g(r,"Inclusion begins here [\n  "),c&&c.l(r),o=g(r,"\n  ] and ends here."),r.forEach(d)},m:function(n,a){h(n,t,a),v(t,e),c&&c.m(t,null),v(t,o),r=!0},p:function(n,t){var e=T(t,1)[0];c&&c.p&&2&e&&m(c,a,n,n[1],e,null,null)},i:function(n){r||(R(c,n),r=!0)},o:function(n){$(c,n),r=!1},d:function(n){n&&d(t),c&&c.d(n)}}}function k(n,t,e){var o=t.$$slots,r=void 0===o?{}:o,a=t.$$scope,c=t.test;return console.log("Test#".concat(c," Widget#").concat("wrapper"," - I am running on ").concat(O(),".")),w((function(){console.log("Test#".concat(c," Widget#").concat("wrapper"," - Running onMount on ").concat(O()))})),W((function(){console.log("Test#".concat(c," Widget#").concat("wrapper"," - Running beforeUpdate on ").concat(O()))})),E((function(){console.log("Test#".concat(c," Widget#").concat("wrapper"," - Running afterUpdate on ").concat(O()))})),n.$$set=function(n){"test"in n&&e(0,c=n.test),"$$scope"in n&&e(1,a=n.$$scope)},[c,a,r]}var q=function(t){n(s,i);var e=V(s);function s(n){var t;return o(this,s),t=e.call(this),r(c(t),n,k,N,a,{test:0}),t}return s}();function z(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,a=t(n);if(o){var c=t(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return e(this,r)}}function F(n){var t,e,o;function r(t){n[1](t)}var a={};return void 0!==n[0]&&(a.test=n[0]),t=new A({props:a}),P.push((function(){return H(t,"test",r)})),{c:function(){b(t.$$.fragment)},l:function(n){y(t.$$.fragment,n)},m:function(n,e){x(t,n,e),o=!0},p:function(n,o){var r={};!e&&1&o&&(e=!0,r.test=n[0],j((function(){return e=!1}))),t.$set(r)},i:function(n){o||(R(t.$$.fragment,n),o=!0)},o:function(n){$(t.$$.fragment,n),o=!1},d:function(n){D(t,n)}}}function G(n){var t,e,o,r,a,c,i,s,m,w,W,E,A,O,V,N,k,z,G,L,S,_,J,K,Q,X,Y,Z,nn,tn,en,on,rn,an,cn,sn,un,fn,pn,ln;function gn(t){n[2](t)}var dn={$$slots:{default:[F]},$$scope:{ctx:n}};return void 0!==n[0]&&(dn.test=n[0]),W=new q({props:dn}),P.push((function(){return H(W,"test",gn)})),{c:function(){t=u("div"),e=u("h2"),o=f("Test "),r=f(n[0]),a=f(" (with wrapper component)"),c=I(),i=u("p"),s=f("This page uses several components, one of them wraps another one.\n    Indentation in the client output is mine."),m=I(),w=u("div"),b(W.$$.fragment),A=I(),O=u("center"),V=u("button"),N=u("a"),k=f("previous test"),z=I(),G=u("table"),L=u("tr"),S=u("th"),_=f("server"),J=u("th"),K=f("client"),Q=I(),X=u("tr"),Y=u("td"),Z=u("pre"),nn=f("Test#8 - I am running on server.\nTest#8 Widget#wrapper - I am running on server.\nTest#8 Widget#2/page - I am running on server."),tn=I(),en=u("td"),on=u("pre"),rn=f("Test#8 - I am running on client.\nTest#8 - Running beforeUpdate on client\n  Test#8 Widget#wrapper - I am running on client.\n  Test#8 Widget#wrapper - Running beforeUpdate on client\n    Test#8 Widget#2/page - I am running on client. \n    Test#8 Widget#2/page - Running beforeUpdate on client \n    Test#8 Widget#2/page - Running onMount on client \n    Test#8 Widget#2/page - Running afterUpdate on client\n  Test#8 Widget#wrapper - Running onMount on client \n  Test#8 Widget#wrapper - Running afterUpdate on client\nTest#8 - Running onMount on client\nTest#8 - Running afterUpdate on client"),an=I(),cn=u("h2"),sn=f("Conclusion"),un=I(),fn=u("p"),pn=f("Code of inner components is run between beforeUpdate and onMount\n    of the wrapping component."),this.h()},l:function(u){t=p(u,"DIV",{});var f=l(t);e=p(f,"H2",{});var h=l(e);o=g(h,"Test "),r=g(h,n[0]),a=g(h," (with wrapper component)"),h.forEach(d),c=U(f),i=p(f,"P",{});var v=l(i);s=g(v,"This page uses several components, one of them wraps another one.\n    Indentation in the client output is mine."),v.forEach(d),m=U(f),w=p(f,"DIV",{class:!0});var T=l(w);y(W.$$.fragment,T),T.forEach(d),A=U(f),O=p(f,"CENTER",{});var R=l(O);V=p(R,"BUTTON",{});var $=l(V);N=p($,"A",{href:!0});var E=l(N);k=g(E,"previous test"),E.forEach(d),$.forEach(d),R.forEach(d),z=U(f),G=p(f,"TABLE",{});var I=l(G);L=p(I,"TR",{});var b=l(L);S=p(b,"TH",{});var M=l(S);_=g(M,"server"),M.forEach(d),J=p(b,"TH",{});var B=l(J);K=g(B,"client"),B.forEach(d),b.forEach(d),Q=U(I),X=p(I,"TR",{});var x=l(X);Y=p(x,"TD",{});var C=l(Y);Z=p(C,"PRE",{});var D=l(Z);nn=g(D,"Test#8 - I am running on server.\nTest#8 Widget#wrapper - I am running on server.\nTest#8 Widget#2/page - I am running on server."),D.forEach(d),C.forEach(d),tn=U(x),en=p(x,"TD",{});var P=l(en);on=p(P,"PRE",{style:!0});var H=l(on);rn=g(H,"Test#8 - I am running on client.\nTest#8 - Running beforeUpdate on client\n  Test#8 Widget#wrapper - I am running on client.\n  Test#8 Widget#wrapper - Running beforeUpdate on client\n    Test#8 Widget#2/page - I am running on client. \n    Test#8 Widget#2/page - Running beforeUpdate on client \n    Test#8 Widget#2/page - Running onMount on client \n    Test#8 Widget#2/page - Running afterUpdate on client\n  Test#8 Widget#wrapper - Running onMount on client \n  Test#8 Widget#wrapper - Running afterUpdate on client\nTest#8 - Running onMount on client\nTest#8 - Running afterUpdate on client"),H.forEach(d),P.forEach(d),x.forEach(d),I.forEach(d),an=U(f),cn=p(f,"H2",{});var j=l(cn);sn=g(j,"Conclusion"),j.forEach(d),un=U(f),fn=p(f,"P",{});var q=l(fn);pn=g(q,"Code of inner components is run between beforeUpdate and onMount\n    of the wrapping component."),q.forEach(d),f.forEach(d),this.h()},h:function(){M(w,"class","border"),M(N,"href","test7"),B(on,"margin-left","2em")},m:function(n,u){h(n,t,u),v(t,e),v(e,o),v(e,r),v(e,a),v(t,c),v(t,i),v(i,s),v(t,m),v(t,w),x(W,w,null),v(t,A),v(t,O),v(O,V),v(V,N),v(N,k),v(t,z),v(t,G),v(G,L),v(L,S),v(S,_),v(L,J),v(J,K),v(G,Q),v(G,X),v(X,Y),v(Y,Z),v(Z,nn),v(X,tn),v(X,en),v(en,on),v(on,rn),v(t,an),v(t,cn),v(cn,sn),v(t,un),v(t,fn),v(fn,pn),ln=!0},p:function(n,t){var e=T(t,1)[0];(!ln||1&e)&&C(r,n[0]);var o={};9&e&&(o.$$scope={dirty:e,ctx:n}),!E&&1&e&&(E=!0,o.test=n[0],j((function(){return E=!1}))),W.$set(o)},i:function(n){ln||(R(W.$$.fragment,n),ln=!0)},o:function(n){$(W.$$.fragment,n),ln=!1},d:function(n){n&&d(t),D(W)}}}function L(n,t,e){var o=8;return console.log("Test#".concat(o," - I am running on ").concat(O(),".")),w((function(){console.log("Test#".concat(o," - Running onMount on ").concat(O()))})),W((function(){console.log("Test#".concat(o," - Running beforeUpdate on ").concat(O()))})),E((function(){console.log("Test#".concat(o," - Running afterUpdate on ").concat(O()))})),[o,function(n){e(0,o=n)},function(n){e(0,o=n)}]}var S=function(t){n(s,i);var e=z(s);function s(n){var t;return o(this,s),t=e.call(this),r(c(t),n,L,G,a,{}),t}return s}();export default S;