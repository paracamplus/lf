import{_ as n,a as t,b as e,c as o,i as r,d as i,S as a,s,e as c,t as u,f as g,v as f,g as d,h as l,j as p,k as T,l as v,w as h,m,G as R,n as W,o as E,x as b,y as I,z as U,A as w,B as $,C as M,q as y,r as B,u as j,D as x,E as D,F as P}from"./client.3dfb36a3.js";import{W as A}from"./Widget2.f7a0ddf0.js";import{W as C}from"./Widget1.c5393de3.js";import{w as H}from"./utils.6bb646a3.js";function N(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,i=t(n);if(o){var a=t(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function O(n){var t,e,o,r,i,a,s,y,B,j,H,N,O,V,k,q,z,F,G,L,S,_,J,K,Q,X,Y,Z,nn,tn,en,on,rn,an,sn,cn,un,gn,fn,dn,ln,pn,Tn,vn,hn,mn,Rn;function Wn(t){n[1](t)}var En={};function bn(t){n[2](t)}void 0!==n[0]&&(En.test=n[0]),H=new A({props:En}),x.push((function(){return D(H,"test",Wn)}));var In={};return void 0!==n[0]&&(In.test=n[0]),V=new C({props:In}),x.push((function(){return D(V,"test",bn)})),{c:function(){t=c("div"),e=c("h2"),o=u("Test "),r=u(n[0]),i=u(" (with unused component)"),a=g(),s=c("p"),y=u("This page imports Widget3 but does not use it so its code will not run."),B=g(),j=c("div"),f(H.$$.fragment),O=g(),f(V.$$.fragment),q=g(),z=c("center"),F=c("button"),G=c("a"),L=u("previous test"),S=g(),_=c("button"),J=c("a"),K=u("next test"),Q=g(),X=c("table"),Y=c("tr"),Z=c("th"),nn=u("server"),tn=c("th"),en=u("client"),on=g(),rn=c("tr"),an=c("td"),sn=c("pre"),cn=u("Test#7 - I am running on server.\nTest#7 Widget#2/page - I am running on server.\nTest#7 Widget#1 - I am running on server.\nTest#7 Widget#2/widget1 - I am running on server."),un=g(),gn=c("td"),fn=c("pre"),dn=u("Test#7 - I am running on client. \nTest#7 - Running beforeUpdate on client \n  Test#7 Widget#2/page - I am running on client. \n  Test#7 Widget#2/page - Running beforeUpdate on client \n  Test#7 Widget#1 - I am running on client.\n  Test#7 Widget#1 - Running beforeUpdate on client \n    Test#7 Widget#2/widget1 - I am running on client. \n    Test#7 Widget#2/widget1 - Running beforeUpdate on client \n  Test#7 Widget#2/page - Running onMount on client\n  Test#7 Widget#2/page - Running afterUpdate on client\n    Test#7 Widget#2/widget1 - Running onMount on client \n    Test#7 Widget#2/widget1 - Running afterUpdate on client \n  Test#7 Widget#1 - Running onMount on client\n  Test#7 Widget#1 - Running afterUpdate on client\nTest#7 - Running onMount on client \nTest#7 - Running afterUpdate on client"),ln=g(),pn=c("h2"),Tn=u("Conclusion"),vn=g(),hn=c("p"),mn=u("Imported but unused components do not perturb the evaluation order\n    of used components."),this.h()},l:function(c){t=d(c,"DIV",{});var u=l(t);e=d(u,"H2",{});var g=l(e);o=p(g,"Test "),r=p(g,n[0]),i=p(g," (with unused component)"),g.forEach(T),a=v(u),s=d(u,"P",{});var f=l(s);y=p(f,"This page imports Widget3 but does not use it so its code will not run."),f.forEach(T),B=v(u),j=d(u,"DIV",{class:!0});var m=l(j);h(H.$$.fragment,m),O=v(m),h(V.$$.fragment,m),m.forEach(T),q=v(u),z=d(u,"CENTER",{});var R=l(z);F=d(R,"BUTTON",{});var W=l(F);G=d(W,"A",{href:!0});var E=l(G);L=p(E,"previous test"),E.forEach(T),W.forEach(T),S=v(R),_=d(R,"BUTTON",{});var b=l(_);J=d(b,"A",{href:!0});var I=l(J);K=p(I,"next test"),I.forEach(T),b.forEach(T),R.forEach(T),Q=v(u),X=d(u,"TABLE",{});var U=l(X);Y=d(U,"TR",{});var w=l(Y);Z=d(w,"TH",{});var $=l(Z);nn=p($,"server"),$.forEach(T),tn=d(w,"TH",{});var M=l(tn);en=p(M,"client"),M.forEach(T),w.forEach(T),on=v(U),rn=d(U,"TR",{});var x=l(rn);an=d(x,"TD",{});var D=l(an);sn=d(D,"PRE",{});var P=l(sn);cn=p(P,"Test#7 - I am running on server.\nTest#7 Widget#2/page - I am running on server.\nTest#7 Widget#1 - I am running on server.\nTest#7 Widget#2/widget1 - I am running on server."),P.forEach(T),D.forEach(T),un=v(x),gn=d(x,"TD",{});var A=l(gn);fn=d(A,"PRE",{style:!0});var C=l(fn);dn=p(C,"Test#7 - I am running on client. \nTest#7 - Running beforeUpdate on client \n  Test#7 Widget#2/page - I am running on client. \n  Test#7 Widget#2/page - Running beforeUpdate on client \n  Test#7 Widget#1 - I am running on client.\n  Test#7 Widget#1 - Running beforeUpdate on client \n    Test#7 Widget#2/widget1 - I am running on client. \n    Test#7 Widget#2/widget1 - Running beforeUpdate on client \n  Test#7 Widget#2/page - Running onMount on client\n  Test#7 Widget#2/page - Running afterUpdate on client\n    Test#7 Widget#2/widget1 - Running onMount on client \n    Test#7 Widget#2/widget1 - Running afterUpdate on client \n  Test#7 Widget#1 - Running onMount on client\n  Test#7 Widget#1 - Running afterUpdate on client\nTest#7 - Running onMount on client \nTest#7 - Running afterUpdate on client"),C.forEach(T),A.forEach(T),x.forEach(T),U.forEach(T),ln=v(u),pn=d(u,"H2",{});var N=l(pn);Tn=p(N,"Conclusion"),N.forEach(T),vn=v(u),hn=d(u,"P",{});var k=l(hn);mn=p(k,"Imported but unused components do not perturb the evaluation order\n    of used components."),k.forEach(T),u.forEach(T),this.h()},h:function(){m(j,"class","border"),m(G,"href","test6"),m(J,"href","test8"),R(fn,"margin-left","2em")},m:function(n,c){W(n,t,c),E(t,e),E(e,o),E(e,r),E(e,i),E(t,a),E(t,s),E(s,y),E(t,B),E(t,j),b(H,j,null),E(j,O),b(V,j,null),E(t,q),E(t,z),E(z,F),E(F,G),E(G,L),E(z,S),E(z,_),E(_,J),E(J,K),E(t,Q),E(t,X),E(X,Y),E(Y,Z),E(Z,nn),E(Y,tn),E(tn,en),E(X,on),E(X,rn),E(rn,an),E(an,sn),E(sn,cn),E(rn,un),E(rn,gn),E(gn,fn),E(fn,dn),E(t,ln),E(t,pn),E(pn,Tn),E(t,vn),E(t,hn),E(hn,mn),Rn=!0},p:function(n,t){var e=I(t,1)[0];(!Rn||1&e)&&U(r,n[0]);var o={};!N&&1&e&&(N=!0,o.test=n[0],P((function(){return N=!1}))),H.$set(o);var i={};!k&&1&e&&(k=!0,i.test=n[0],P((function(){return k=!1}))),V.$set(i)},i:function(n){Rn||(w(H.$$.fragment,n),w(V.$$.fragment,n),Rn=!0)},o:function(n){$(H.$$.fragment,n),$(V.$$.fragment,n),Rn=!1},d:function(n){n&&T(t),M(H),M(V)}}}function V(n,t,e){var o=7;return console.log("Test#".concat(o," - I am running on ").concat(H(),".")),y((function(){console.log("Test#".concat(o," - Running onMount on ").concat(H()))})),B((function(){console.log("Test#".concat(o," - Running beforeUpdate on ").concat(H()))})),j((function(){console.log("Test#".concat(o," - Running afterUpdate on ").concat(H()))})),[o,function(n){e(0,o=n)},function(n){e(0,o=n)}]}var k=function(t){n(c,a);var e=N(c);function c(n){var t;return o(this,c),t=e.call(this),r(i(t),n,V,O,s,{}),t}return c}();export default k;