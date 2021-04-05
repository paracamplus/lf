import{S as n,i as e,s as t,e as o,t as i,a,p as s,c as r,b as g,d as c,f as d,g as f,q as u,h as l,B as T,j as p,k as h,r as m,u as v,v as W,w as R,x as $,o as E,l as w,m as U,y as I,z as b,A as M}from"./client.56c24277.js";import{W as H}from"./Widget2.a4b3b0f8.js";import{W as j}from"./Widget1.f03279fc.js";import{w as x}from"./utils.932e656f.js";function L(n){let e,t,E,w,U,x,L,A,B,D,P,C,N,y,O,V,k,q,z,S,F,G,J,K,Q,X,Y,Z,_,nn,en,tn,on,an,sn,rn,gn,cn,dn,fn,un,ln,Tn,pn,hn,mn,vn;function Wn(e){n[1](e)}let Rn={};function $n(e){n[2](e)}void 0!==n[0]&&(Rn.test=n[0]),P=new H({props:Rn}),I.push((()=>b(P,"test",Wn)));let En={};return void 0!==n[0]&&(En.test=n[0]),y=new j({props:En}),I.push((()=>b(y,"test",$n))),{c(){e=o("div"),t=o("h2"),E=i("Test "),w=i(n[0]),U=i(" (with components)"),x=a(),L=o("p"),A=i("This page is a variation of test5: Widget2 is used before Widget1.\n    Therefore the order of evaluation is not the same as in test4 and\n    test5, it follows the order of components in the HTML section."),B=a(),D=o("div"),s(P.$$.fragment),N=a(),s(y.$$.fragment),V=a(),k=o("center"),q=o("button"),z=o("a"),S=i("previous test"),F=a(),G=o("button"),J=o("a"),K=i("next test"),Q=a(),X=o("table"),Y=o("tr"),Z=o("th"),_=i("server"),nn=o("th"),en=i("client"),tn=a(),on=o("tr"),an=o("td"),sn=o("pre"),rn=i("Test#6 - I am running on server.\nTest#6 Widget#2/page - I am running on server.\nTest#6 Widget#1 - I am running on server.\nTest#6 Widget#2/widget1 - I am running on server."),gn=a(),cn=o("td"),dn=o("pre"),fn=i("Test#6 - I am running on client. \nTest#6 - Running beforeUpdate on client \n  Test#6 Widget#2/page - I am running on client. \n  Test#6 Widget#2/page - Running beforeUpdate on client \n  Test#6 Widget#1 - I am running on client.\n  Test#6 Widget#1 - Running beforeUpdate on client \n    Test#6 Widget#2/widget1 - I am running on client. \n    Test#6 Widget#2/widget1 - Running beforeUpdate on client \n  Test#6 Widget#2/page - Running onMount on client\n  Test#6 Widget#2/page - Running afterUpdate on client\n    Test#6 Widget#2/widget1 - Running onMount on client \n    Test#6 Widget#2/widget1 - Running afterUpdate on client \n  Test#6 Widget#1 - Running onMount on client\n  Test#6 Widget#1 - Running afterUpdate on client\nTest#6 - Running onMount on client \nTest#6 - Running afterUpdate on client"),un=a(),ln=o("h2"),Tn=i("Conclusion"),pn=a(),hn=o("p"),mn=i("The order of evaluation follows the order of components in the HTML part."),this.h()},l(o){e=r(o,"DIV",{});var i=g(e);t=r(i,"H2",{});var a=g(t);E=c(a,"Test "),w=c(a,n[0]),U=c(a," (with components)"),a.forEach(d),x=f(i),L=r(i,"P",{});var s=g(L);A=c(s,"This page is a variation of test5: Widget2 is used before Widget1.\n    Therefore the order of evaluation is not the same as in test4 and\n    test5, it follows the order of components in the HTML section."),s.forEach(d),B=f(i),D=r(i,"DIV",{class:!0});var l=g(D);u(P.$$.fragment,l),N=f(l),u(y.$$.fragment,l),l.forEach(d),V=f(i),k=r(i,"CENTER",{});var T=g(k);q=r(T,"BUTTON",{});var p=g(q);z=r(p,"A",{href:!0});var h=g(z);S=c(h,"previous test"),h.forEach(d),p.forEach(d),F=f(T),G=r(T,"BUTTON",{});var m=g(G);J=r(m,"A",{href:!0});var v=g(J);K=c(v,"next test"),v.forEach(d),m.forEach(d),T.forEach(d),Q=f(i),X=r(i,"TABLE",{});var W=g(X);Y=r(W,"TR",{});var R=g(Y);Z=r(R,"TH",{});var $=g(Z);_=c($,"server"),$.forEach(d),nn=r(R,"TH",{});var I=g(nn);en=c(I,"client"),I.forEach(d),R.forEach(d),tn=f(W),on=r(W,"TR",{});var b=g(on);an=r(b,"TD",{});var M=g(an);sn=r(M,"PRE",{});var H=g(sn);rn=c(H,"Test#6 - I am running on server.\nTest#6 Widget#2/page - I am running on server.\nTest#6 Widget#1 - I am running on server.\nTest#6 Widget#2/widget1 - I am running on server."),H.forEach(d),M.forEach(d),gn=f(b),cn=r(b,"TD",{});var j=g(cn);dn=r(j,"PRE",{style:!0});var C=g(dn);fn=c(C,"Test#6 - I am running on client. \nTest#6 - Running beforeUpdate on client \n  Test#6 Widget#2/page - I am running on client. \n  Test#6 Widget#2/page - Running beforeUpdate on client \n  Test#6 Widget#1 - I am running on client.\n  Test#6 Widget#1 - Running beforeUpdate on client \n    Test#6 Widget#2/widget1 - I am running on client. \n    Test#6 Widget#2/widget1 - Running beforeUpdate on client \n  Test#6 Widget#2/page - Running onMount on client\n  Test#6 Widget#2/page - Running afterUpdate on client\n    Test#6 Widget#2/widget1 - Running onMount on client \n    Test#6 Widget#2/widget1 - Running afterUpdate on client \n  Test#6 Widget#1 - Running onMount on client\n  Test#6 Widget#1 - Running afterUpdate on client\nTest#6 - Running onMount on client \nTest#6 - Running afterUpdate on client"),C.forEach(d),j.forEach(d),b.forEach(d),W.forEach(d),un=f(i),ln=r(i,"H2",{});var O=g(ln);Tn=c(O,"Conclusion"),O.forEach(d),pn=f(i),hn=r(i,"P",{});var vn=g(hn);mn=c(vn,"The order of evaluation follows the order of components in the HTML part."),vn.forEach(d),i.forEach(d),this.h()},h(){l(D,"class","border"),l(z,"href","test5"),l(J,"href","test7"),T(dn,"margin-left","2em")},m(n,o){p(n,e,o),h(e,t),h(t,E),h(t,w),h(t,U),h(e,x),h(e,L),h(L,A),h(e,B),h(e,D),m(P,D,null),h(D,N),m(y,D,null),h(e,V),h(e,k),h(k,q),h(q,z),h(z,S),h(k,F),h(k,G),h(G,J),h(J,K),h(e,Q),h(e,X),h(X,Y),h(Y,Z),h(Z,_),h(Y,nn),h(nn,en),h(X,tn),h(X,on),h(on,an),h(an,sn),h(sn,rn),h(on,gn),h(on,cn),h(cn,dn),h(dn,fn),h(e,un),h(e,ln),h(ln,Tn),h(e,pn),h(e,hn),h(hn,mn),vn=!0},p(n,[e]){(!vn||1&e)&&v(w,n[0]);const t={};!C&&1&e&&(C=!0,t.test=n[0],M((()=>C=!1))),P.$set(t);const o={};!O&&1&e&&(O=!0,o.test=n[0],M((()=>O=!1))),y.$set(o)},i(n){vn||(W(P.$$.fragment,n),W(y.$$.fragment,n),vn=!0)},o(n){R(P.$$.fragment,n),R(y.$$.fragment,n),vn=!1},d(n){n&&d(e),$(P),$(y)}}}function A(n,e,t){let o=6;return console.log(`Test#${o} - I am running on ${x()}.`),E((()=>{console.log(`Test#${o} - Running onMount on ${x()}`)})),w((()=>{console.log(`Test#${o} - Running beforeUpdate on ${x()}`)})),U((()=>{console.log(`Test#${o} - Running afterUpdate on ${x()}`)})),[o,function(n){o=n,t(0,o)},function(n){o=n,t(0,o)}]}export default class extends n{constructor(n){super(),e(this,n,A,L,t,{})}}
