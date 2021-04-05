import{S as n,i as e,s as t,e as o,t as i,a as r,p as a,c as s,b as c,d,f as g,g as u,q as l,h as p,j as f,k as h,r as T,u as m,v,w as W,x as R,o as E,l as $,m as U,y as b,z as w,A as I}from"./client.56c24277.js";import{W as M}from"./Widget1.f03279fc.js";import{W as y}from"./Widget2.a4b3b0f8.js";import{w as H}from"./utils.932e656f.js";function j(n){let e,t,E,$,U,H,j,x,N,P,A,D,q,B,C,L,O,V,k,z,S,F,G,J,K,Q,X,Y,Z,_,nn,en,tn,on,rn,an,sn,cn,dn,gn,un,ln,pn,fn,hn,Tn,mn,vn,Wn,Rn;function En(e){n[1](e)}let $n={};function Un(e){n[2](e)}void 0!==n[0]&&($n.test=n[0]),B=new M({props:$n}),b.push((()=>w(B,"test",En)));let bn={};return void 0!==n[0]&&(bn.test=n[0]),O=new y({props:bn}),b.push((()=>w(O,"test",Un))),{c(){e=o("div"),t=o("h2"),E=i("Test "),$=i(n[0]),U=i(" (with components)"),H=r(),j=o("p"),x=i("This page shows how code within a script element is run on the\n    server and on the client in presence of several components."),N=r(),P=o("p"),A=i("We see that the code of the script element of the current page is run\n  then the components start loading and everything is interlaced.\n  Indentation in the client column is mine to help understand the\n  order of operations. Note that included components are completely loaded\n  (that is no more code is run) before the including component (or page)\n  is completely loaded."),D=r(),q=o("div"),a(B.$$.fragment),L=r(),a(O.$$.fragment),k=r(),z=o("center"),S=o("button"),F=o("a"),G=i("previous test"),J=r(),K=o("button"),Q=o("a"),X=i("next test"),Y=r(),Z=o("table"),_=o("tr"),nn=o("th"),en=i("server"),tn=o("th"),on=i("client"),rn=r(),an=o("tr"),sn=o("td"),cn=o("pre"),dn=i("Test#4 - I am running on server.\nTest#4 Widget#1 - I am running on server.\nTest#4 Widget#2/widget1 - I am running on server.\nTest#4 Widget#2/page - I am running on server."),gn=r(),un=o("td"),ln=o("pre"),pn=i("Test#4 - I am running on client. \nTest#4 - Running beforeUpdate on client \n  Test#4 Widget#1 - I am running on client.\n  Test#4 Widget#1 - Running beforeUpdate on client \n    Test#4 Widget#2/widget1 - I am running on client. \n    Test#4 Widget#2/widget1 - Running beforeUpdate on client \n  Test#4 Widget#2/page - I am running on client. \n  Test#4 Widget#2/page - Running beforeUpdate on client \n    Test#4 Widget#2/widget1 - Running onMount on client \n    Test#4 Widget#2/widget1 - Running afterUpdate on client \n  Test#4 Widget#1 - Running onMount on client\n  Test#4 Widget#1 - Running afterUpdate on client\n  Test#4 Widget#2/page - Running onMount on client\n  Test#4 Widget#2/page - Running afterUpdate on client\nTest#4 - Running onMount on client \nTest#4 - Running afterUpdate on client"),fn=r(),hn=o("h2"),Tn=i("Conclusion"),mn=r(),vn=o("p"),Wn=i("The evaluation order is respected but if code and beforeUpdate are\n    run in sequence, onMount and afterUpdate are run after the\n    corresponding HTML is generated."),this.h()},l(o){e=s(o,"DIV",{});var i=c(e);t=s(i,"H2",{});var r=c(t);E=d(r,"Test "),$=d(r,n[0]),U=d(r," (with components)"),r.forEach(g),H=u(i),j=s(i,"P",{});var a=c(j);x=d(a,"This page shows how code within a script element is run on the\n    server and on the client in presence of several components."),a.forEach(g),N=u(i),P=s(i,"P",{});var p=c(P);A=d(p,"We see that the code of the script element of the current page is run\n  then the components start loading and everything is interlaced.\n  Indentation in the client column is mine to help understand the\n  order of operations. Note that included components are completely loaded\n  (that is no more code is run) before the including component (or page)\n  is completely loaded."),p.forEach(g),D=u(i),q=s(i,"DIV",{class:!0});var f=c(q);l(B.$$.fragment,f),L=u(f),l(O.$$.fragment,f),f.forEach(g),k=u(i),z=s(i,"CENTER",{});var h=c(z);S=s(h,"BUTTON",{});var T=c(S);F=s(T,"A",{href:!0});var m=c(F);G=d(m,"previous test"),m.forEach(g),T.forEach(g),J=u(h),K=s(h,"BUTTON",{});var v=c(K);Q=s(v,"A",{href:!0});var W=c(Q);X=d(W,"next test"),W.forEach(g),v.forEach(g),h.forEach(g),Y=u(i),Z=s(i,"TABLE",{});var R=c(Z);_=s(R,"TR",{});var b=c(_);nn=s(b,"TH",{});var w=c(nn);en=d(w,"server"),w.forEach(g),tn=s(b,"TH",{});var I=c(tn);on=d(I,"client"),I.forEach(g),b.forEach(g),rn=u(R),an=s(R,"TR",{});var M=c(an);sn=s(M,"TD",{});var y=c(sn);cn=s(y,"PRE",{});var C=c(cn);dn=d(C,"Test#4 - I am running on server.\nTest#4 Widget#1 - I am running on server.\nTest#4 Widget#2/widget1 - I am running on server.\nTest#4 Widget#2/page - I am running on server."),C.forEach(g),y.forEach(g),gn=u(M),un=s(M,"TD",{});var V=c(un);ln=s(V,"PRE",{});var Rn=c(ln);pn=d(Rn,"Test#4 - I am running on client. \nTest#4 - Running beforeUpdate on client \n  Test#4 Widget#1 - I am running on client.\n  Test#4 Widget#1 - Running beforeUpdate on client \n    Test#4 Widget#2/widget1 - I am running on client. \n    Test#4 Widget#2/widget1 - Running beforeUpdate on client \n  Test#4 Widget#2/page - I am running on client. \n  Test#4 Widget#2/page - Running beforeUpdate on client \n    Test#4 Widget#2/widget1 - Running onMount on client \n    Test#4 Widget#2/widget1 - Running afterUpdate on client \n  Test#4 Widget#1 - Running onMount on client\n  Test#4 Widget#1 - Running afterUpdate on client\n  Test#4 Widget#2/page - Running onMount on client\n  Test#4 Widget#2/page - Running afterUpdate on client\nTest#4 - Running onMount on client \nTest#4 - Running afterUpdate on client"),Rn.forEach(g),V.forEach(g),M.forEach(g),R.forEach(g),fn=u(i),hn=s(i,"H2",{});var En=c(hn);Tn=d(En,"Conclusion"),En.forEach(g),mn=u(i),vn=s(i,"P",{});var $n=c(vn);Wn=d($n,"The evaluation order is respected but if code and beforeUpdate are\n    run in sequence, onMount and afterUpdate are run after the\n    corresponding HTML is generated."),$n.forEach(g),i.forEach(g),this.h()},h(){p(q,"class","border"),p(F,"href","test3"),p(Q,"href","test5")},m(n,o){f(n,e,o),h(e,t),h(t,E),h(t,$),h(t,U),h(e,H),h(e,j),h(j,x),h(e,N),h(e,P),h(P,A),h(e,D),h(e,q),T(B,q,null),h(q,L),T(O,q,null),h(e,k),h(e,z),h(z,S),h(S,F),h(F,G),h(z,J),h(z,K),h(K,Q),h(Q,X),h(e,Y),h(e,Z),h(Z,_),h(_,nn),h(nn,en),h(_,tn),h(tn,on),h(Z,rn),h(Z,an),h(an,sn),h(sn,cn),h(cn,dn),h(an,gn),h(an,un),h(un,ln),h(ln,pn),h(e,fn),h(e,hn),h(hn,Tn),h(e,mn),h(e,vn),h(vn,Wn),Rn=!0},p(n,[e]){(!Rn||1&e)&&m($,n[0]);const t={};!C&&1&e&&(C=!0,t.test=n[0],I((()=>C=!1))),B.$set(t);const o={};!V&&1&e&&(V=!0,o.test=n[0],I((()=>V=!1))),O.$set(o)},i(n){Rn||(v(B.$$.fragment,n),v(O.$$.fragment,n),Rn=!0)},o(n){W(B.$$.fragment,n),W(O.$$.fragment,n),Rn=!1},d(n){n&&g(e),R(B),R(O)}}}function x(n,e,t){let o=4;return console.log(`Test#${o} - I am running on ${H()}.`),E((()=>{console.log(`Test#${o} - Running onMount on ${H()}`)})),$((()=>{console.log(`Test#${o} - Running beforeUpdate on ${H()}`)})),U((()=>{console.log(`Test#${o} - Running afterUpdate on ${H()}`)})),[o,function(n){o=n,t(0,o)},function(n){o=n,t(0,o)}]}export default class extends n{constructor(n){super(),e(this,n,x,j,t,{})}}