import{s as K,b as Q,n as V,c as U}from"../chunks/scheduler.CctMDInn.js";import{S as W,i as X,s as x,e as m,t as q,h as Y,d as _,f as $,c as p,j as M,g as y,k as G,a as l,b as z,l as e,m as F}from"../chunks/index.DxEaYflM.js";import{s as Z}from"../chunks/entry.BrRR-dFp.js";import{b as J}from"../chunks/paths.DWcJ9Ae5.js";const ee=()=>{const t=Z;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},te={subscribe(t){return ee().page.subscribe(t)}};function se(t){var O,P;let i,f,r,o,g,R='<h1 class="hamstrump-title svelte-2a2ruo"><span class="hams svelte-2a2ruo">Hams</span><span class="trump svelte-2a2ruo">trump</span> Error</h1>',S,a,c,E=t[0].status+"",w,D,C=((O=t[0].error)==null?void 0:O.message)+"",A,L,b,j="Oops! Something went wrong. Don't worry, Hamstrump is on it!",T,d,B,k,n,N="Go Back Home";return document.title=i=t[0].status+" - "+((P=t[0].error)==null?void 0:P.message),{c(){f=x(),r=m("div"),o=m("article"),g=m("header"),g.innerHTML=R,S=x(),a=m("main"),c=m("h2"),w=q(E),D=q(": "),A=q(C),L=x(),b=m("p"),b.textContent=j,T=x(),d=m("img"),k=x(),n=m("a"),n.textContent=N,this.h()},l(s){Y("svelte-xfft6",document.head).forEach(_),f=$(s),r=p(s,"DIV",{class:!0});var H=M(r);o=p(H,"ARTICLE",{class:!0});var v=M(o);g=p(v,"HEADER",{"data-svelte-h":!0}),y(g)!=="svelte-1v94msu"&&(g.innerHTML=R),S=$(v),a=p(v,"MAIN",{});var u=M(a);c=p(u,"H2",{class:!0});var I=M(c);w=G(I,E),D=G(I,": "),A=G(I,C),I.forEach(_),L=$(u),b=p(u,"P",{"data-svelte-h":!0}),y(b)!=="svelte-1vewtce"&&(b.textContent=j),T=$(u),d=p(u,"IMG",{src:!0,alt:!0,class:!0}),k=$(u),n=p(u,"A",{href:!0,role:!0,class:!0,"data-svelte-h":!0}),y(n)!=="svelte-1s3g8es"&&(n.textContent=N),u.forEach(_),v.forEach(_),H.forEach(_),this.h()},h(){l(c,"class","svelte-2a2ruo"),Q(d.src,B=J+"/barbatrump.png")||l(d,"src",B),l(d,"alt","Confused Hamstrump"),l(d,"class","error-image svelte-2a2ruo"),l(n,"href",J+"/"),l(n,"role","button"),l(n,"class","connectme secondary outline svelte-2a2ruo"),l(o,"class","container svelte-2a2ruo"),l(r,"class","error-container svelte-2a2ruo")},m(s,h){z(s,f,h),z(s,r,h),e(r,o),e(o,g),e(o,S),e(o,a),e(a,c),e(c,w),e(c,D),e(c,A),e(a,L),e(a,b),e(a,T),e(a,d),e(a,k),e(a,n)},p(s,[h]){var H,v;h&1&&i!==(i=s[0].status+" - "+((H=s[0].error)==null?void 0:H.message))&&(document.title=i),h&1&&E!==(E=s[0].status+"")&&F(w,E),h&1&&C!==(C=((v=s[0].error)==null?void 0:v.message)+"")&&F(A,C)},i:V,o:V,d(s){s&&(_(f),_(r))}}}function ae(t,i,f){let r;return U(t,te,o=>f(0,r=o)),[r]}let ie=class extends W{constructor(i){super(),X(this,i,ae,se,K,{})}};export{ie as component};
