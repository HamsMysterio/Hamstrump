import{n as N,s as Q,h as Te,u as Ge,y as ae,v as Xe,w as Je,x as Ue,r as ft,z as _e,c as se,A as ut,o as Ce,B as Ke,d as Qe,C as dt,D as ce}from"../chunks/scheduler.C97pc7KN.js";import{S as Z,i as x,e as T,c as E,a as I,d as v,C as ye,A as de,g as D,z as pe,n as q,l as z,u as B,v as G,o as w,h as y,w as X,x as J,s as A,k as De,f as j,q as Ze,m as xe,B as be,t as ne,y as K,b as re,p as P,H as Ie,D as Oe,j as mt}from"../chunks/index.Ct8-QQ37.js";import{e as le}from"../chunks/each.D6YF6ztN.js";import{w as me,d as ht,b as gt}from"../chunks/paths.3Kq4u9om.js";const $e=typeof window<"u";let Ee=$e?()=>window.performance.now():()=>Date.now(),et=$e?t=>requestAnimationFrame(t):N;const ue=new Set;function tt(t){ue.forEach(e=>{e.c(t)||(ue.delete(e),e.f())}),ue.size!==0&&et(tt)}function st(t){let e;return ue.size===0&&et(tt),{promise:new Promise(s=>{ue.add(e={c:t,f:s})}),abort(){ue.delete(e)}}}const nt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Me(t,e){const s={},n={},l={$$scope:1};let r=t.length;for(;r--;){const i=t[r],o=e[r];if(o){for(const f in i)f in o||(n[f]=1);for(const f in o)l[f]||(s[f]=o[f],l[f]=1);t[r]=o}else for(const f in i)l[f]=1}for(const i in n)i in s||(s[i]=void 0);return s}function pt(t){return typeof t=="object"&&t!==null?t:{}}function Pe(t){return Object.prototype.toString.call(t)==="[object Date]"}function ke(t,e,s,n){if(typeof s=="number"||Pe(s)){const l=n-s,r=(s-e)/(t.dt||1/60),i=t.opts.stiffness*l,o=t.opts.damping*r,f=(i-o)*t.inv_mass,m=(r+f)*t.dt;return Math.abs(m)<t.opts.precision&&Math.abs(l)<t.opts.precision?n:(t.settled=!1,Pe(s)?new Date(s.getTime()+m):s+m)}else{if(Array.isArray(s))return s.map((l,r)=>ke(t,e[r],s[r],n[r]));if(typeof s=="object"){const l={};for(const r in s)l[r]=ke(t,e[r],s[r],n[r]);return l}else throw new Error(`Cannot spring ${typeof s} values`)}}function He(t,e={}){const s=me(t),{stiffness:n=.15,damping:l=.8,precision:r=.01}=e;let i,o,f,m=t,d=t,g=1,c=0,a=!1;function u(p,S={}){d=p;const C=f={};return t==null||S.hard||h.stiffness>=1&&h.damping>=1?(a=!0,i=Ee(),m=p,s.set(t=d),Promise.resolve()):(S.soft&&(c=1/((S.soft===!0?.5:+S.soft)*60),g=0),o||(i=Ee(),a=!1,o=st(k=>{if(a)return a=!1,o=null,!1;g=Math.min(g+c,1);const M={inv_mass:g,opts:h,settled:!0,dt:(k-i)*60/1e3},b=ke(M,m,t,d);return i=k,m=t,s.set(t=b),M.settled&&(o=null),!M.settled})),new Promise(k=>{o.promise.then(()=>{C===f&&k()})}))}const h={set:u,update:(p,S)=>u(p(d,t),S),subscribe:s.subscribe,stiffness:n,damping:l,precision:r};return h}function vt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function _t(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function yt(t=new Set){const e=me(t),s=n=>(...l)=>{let r;return e.update(i=>(r=i[n](...l),i)),r};return{...e,add:s("add"),delete:s("delete")}}const rt={},Se=(t,e,s)=>t<e?e:t>s?s:t;let lt=!1;try{let t=Object.defineProperty({},"passive",{get:function(){lt=!0}});window.addEventListener("test",null,t)}catch{}const U={$(t){return typeof t=="string"?document.querySelector(t):t},extend(...t){return Object.assign(...t)},addListeners(t,e,s,n={passive:!1}){e instanceof Array||(e=[e]);for(let l=0;l<e.length;l++)t.addEventListener(e[l],s,lt?n:!1)},removeListeners(t,e,s){e instanceof Array||(e=[e]);for(let n=0;n<e.length;n++)t.removeEventListener(e[n],s)},cumulativeOffset(t){let e=0,s=0;do e+=t.offsetTop||0,s+=t.offsetLeft||0,t=t.offsetParent;while(t);return{top:e,left:s}},directScroll(t){return t&&t!==document&&t!==document.body},scrollTop(t,e){let s=e!==void 0;return this.directScroll(t)?s?t.scrollTop=e:t.scrollTop:s?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,e){let s=e!==void 0;return this.directScroll(t)?s?t.scrollLeft=e:t.scrollLeft:s?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},bt={container:"body",duration:500,delay:0,offset:0,easing:vt,onStart:N,onDone:N,onAborting:N,scrollX:!1,scrollY:!0},Ae=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],wt=t=>{let{offset:e,duration:s,delay:n,easing:l,x:r=0,y:i=0,scrollX:o,scrollY:f,onStart:m,onDone:d,container:g,onAborting:c,element:a}=t;typeof e=="function"&&(e=e());const u=U.cumulativeOffset(g),h=a?U.cumulativeOffset(a):{top:i,left:r},p=U.scrollLeft(g),S=U.scrollTop(g),C=h.left-u.left+e,k=h.top-u.top+e,M=C-p,b=k-S;let _=!0,H=!1,O=Ee()+n,Y=O+s;function W(R,ie,oe){o&&U.scrollLeft(R,oe),f&&U.scrollTop(R,ie)}function $(R){R||(H=!0,m(a,{x:r,y:i})),U.addListeners(g,Ae,F,{passive:!0})}function V(R){W(g,S+b*R,p+M*R)}function F(){_=!1,U.removeListeners(g,Ae,F)}return st(R=>{if(!H&&R>=O&&$(!1),H&&R>=Y)return V(1),F(),d(a,{x:r,y:i}),!1;if(!_)return c(a,{x:r,y:i}),!1;if(H){const ie=R-O,oe=0+1*l(ie/s);V(oe)}return!0}),$(n),V(0),F},Tt=t=>{let e=U.extend({},bt,t);return e.container=U.$(e.container),e.element=U.$(e.element),e},Et=t=>wt(Tt(t));(function(){if(!(typeof window>"u"||typeof document>"u"||typeof HTMLElement>"u")){var t=!1;try{var e=document.createElement("div");e.addEventListener("focus",function(r){r.preventDefault(),r.stopPropagation()},!0),e.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&typeof navigator.userAgent<"u"&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return t=!1;t=!0}}))}catch{}if(HTMLElement.prototype.nativeFocus===void 0&&!t){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var s=function(r){for(var i=r.parentNode,o=[],f=document.scrollingElement||document.documentElement;i&&i!==f;)(i.offsetHeight<i.scrollHeight||i.offsetWidth<i.scrollWidth)&&o.push([i,i.scrollTop,i.scrollLeft]),i=i.parentNode;return i=f,o.push([i,i.scrollTop,i.scrollLeft]),o},n=function(r){for(var i=0;i<r.length;i++)r[i][0].scrollTop=r[i][1],r[i][0].scrollLeft=r[i][2];r=[]},l=function(r){if(r&&r.preventScroll){var i=s(this);if(typeof setTimeout=="function"){var o=this;setTimeout(function(){o.nativeFocus(),n(i)},0)}else this.nativeFocus(),n(i)}else this.nativeFocus()};HTMLElement.prototype.focus=l}}})();const{scrollTo:kt,setTimeout:je,window:fe}=nt;function Ht(t){let e=!1,s=()=>{e=!1},n,l,r,i,o,f,m;Te(t[26]),Te(t[27]);const d=t[24].default,g=Ge(d,t,t[23],null);let c=[t[12],{class:r="parallax-container "+(t[12].class?t[12].class:"")},{style:i="height: "+t[1]*t[0]+"px; "+(t[12].style?t[12].style:"")+";"}],a={};for(let u=0;u<c.length;u+=1)a=ae(a,c[u]);return{c(){l=T("div"),g&&g.c(),this.h()},l(u){l=E(u,"DIV",{class:!0,style:!0});var h=I(l);g&&g.l(h),h.forEach(v),this.h()},h(){ye(l,a),de(l,"svelte-15ph2c6",!0)},m(u,h){D(u,l,h),g&&g.m(l,null),t[28](l),o=!0,f||(m=[pe(fe,"resize",t[25]),pe(fe,"scroll",()=>{e=!0,clearTimeout(n),n=je(s,100),t[26]()}),pe(fe,"resize",t[27])],f=!0)},p(u,[h]){h&16&&!e&&(e=!0,clearTimeout(n),kt(fe.pageXOffset,u[4]),n=je(s,100)),g&&g.p&&(!o||h&8388608)&&Xe(g,d,u,u[23],o?Ue(d,u[23],h,null):Je(u[23]),null),ye(l,a=Me(c,[h&4096&&u[12],(!o||h&4096&&r!==(r="parallax-container "+(u[12].class?u[12].class:"")))&&{class:r},(!o||h&4099&&i!==(i="height: "+u[1]*u[0]+"px; "+(u[12].style?u[12].style:"")+";"))&&{style:i}])),de(l,"svelte-15ph2c6",!0)},i(u){o||(q(g,u),o=!0)},o(u){z(g,u),o=!1},d(u){u&&v(l),g&&g.d(u),t[28](null),f=!1,ft(m)}}}function St(t,e,s){const n=["sections","sectionHeight","config","threshold","onProgress","onScroll","disabled","scrollTo"];let l=_e(e,n),r,i,o,f,m,d,{$$slots:g={},$$scope:c}=e,a,u,{sections:h=1}=e,{sectionHeight:p=void 0}=e,{config:S={stiffness:.017,damping:.26}}=e,{threshold:C={top:1,bottom:1}}=e,{onProgress:k=void 0}=e,{onScroll:M=void 0}=e,{disabled:b=!1}=e;const _=me(0);se(t,_,L=>s(4,d=L));const H=me(0);se(t,H,L=>s(29,i=L));const O=me(0);se(t,O,L=>s(1,r=L));const Y=He(void 0,{...S,precision:.001});se(t,Y,L=>s(22,m=L));const W=ht([_,H,O],([L,ee,te],we)=>{const he=L-ee,ge=0-te+te*C.top,at=te*h-te*C.bottom,ct=Se(he,ge,at);we(ct)});se(t,W,L=>s(20,o=L));const $=(L,ee)=>{if(ee===0){Y.set(0);return}const te=ee*h-ee;Y.set(Se(L/te,0,1))},V=yt(new Set);se(t,V,L=>s(21,f=L)),ut(rt,{config:S,addLayer:L=>{V.add(L)},removeLayer:L=>{V.delete(L)}}),Ce(()=>{F()});const F=()=>{O.set(p||u),H.set(a.getBoundingClientRect().top+window.pageYOffset)};function R(L,{selector:ee="",duration:te=500,easing:we=_t}={}){const he=i+r*(L-1),ge=()=>{document.querySelector(ee).focus({preventScroll:!0})};if(b){window.scrollTo({top:he}),ee&&ge();return}Et({y:he,duration:te,easing:we,onDone:ee?ge:()=>{}})}const ie=()=>setTimeout(F,0);function oe(){_.set(d=fe.pageYOffset)}function it(){s(3,u=fe.innerHeight)}function ot(L){Qe[L?"unshift":"push"](()=>{a=L,s(2,a)})}return t.$$set=L=>{e=ae(ae({},e),Ke(L)),s(12,l=_e(e,n)),"sections"in L&&s(0,h=L.sections),"sectionHeight"in L&&s(13,p=L.sectionHeight),"config"in L&&s(14,S=L.config),"threshold"in L&&s(15,C=L.threshold),"onProgress"in L&&s(16,k=L.onProgress),"onScroll"in L&&s(17,M=L.onScroll),"disabled"in L&&s(18,b=L.disabled),"$$scope"in L&&s(23,c=L.$$scope)},t.$$.update=()=>{t.$$.dirty&1179648&&M&&M(o),t.$$.dirty&1114114&&k&&$(o,r),t.$$.dirty&4259840&&k&&k(m??0),t.$$.dirty&2097154&&f.forEach(L=>{L.setHeight(r)}),t.$$.dirty&3407874&&f.forEach(L=>{L.setPosition(o,r,b)}),t.$$.dirty&8194&&r!==0&&F()},[h,r,a,u,d,_,H,O,Y,W,V,F,l,p,S,C,k,M,b,R,o,f,m,c,g,ie,oe,it,ot]}class Lt extends Z{constructor(e){super(),x(this,e,St,Ht,Q,{sections:0,sectionHeight:13,config:14,threshold:15,onProgress:16,onScroll:17,disabled:18,scrollTo:19})}get scrollTo(){return this.$$.ctx[19]}}const Ct=t=>({progress:t&1}),Ne=t=>({progress:t[0]});function It(t){let e,s,n,l;const r=t[12].default,i=Ge(r,t,t[11],Ne);let o=[t[5],{class:s="parallax-layer "+(t[5].class?t[5].class:"")},{style:n=""+(t[5].style?t[5].style:"")+"; height: "+t[1]+"px; -ms-transform: "+t[2]+"; -webkit-transform: "+t[2]+"; transform: "+t[2]+";"}],f={};for(let m=0;m<o.length;m+=1)f=ae(f,o[m]);return{c(){e=T("div"),i&&i.c(),this.h()},l(m){e=E(m,"DIV",{class:!0,style:!0});var d=I(e);i&&i.l(d),d.forEach(v),this.h()},h(){ye(e,f),de(e,"svelte-qcp0z5",!0)},m(m,d){D(m,e,d),i&&i.m(e,null),l=!0},p(m,[d]){i&&i.p&&(!l||d&2049)&&Xe(i,r,m,m[11],l?Ue(r,m[11],d,Ct):Je(m[11]),Ne),ye(e,f=Me(o,[d&32&&m[5],(!l||d&32&&s!==(s="parallax-layer "+(m[5].class?m[5].class:"")))&&{class:s},(!l||d&38&&n!==(n=""+(m[5].style?m[5].style:"")+"; height: "+m[1]+"px; -ms-transform: "+m[2]+"; -webkit-transform: "+m[2]+"; transform: "+m[2]+";"))&&{style:n}])),de(e,"svelte-qcp0z5",!0)},i(m){l||(q(i,m),l=!0)},o(m){z(i,m),l=!1},d(m){m&&v(e),i&&i.d(m)}}}function Ot(t,e,s){let n;const l=["rate","offset","span","onProgress"];let r=_e(e,l),i,o,{$$slots:f={},$$scope:m}=e,{rate:d=.5}=e,{offset:g=0}=e,{span:c=1}=e,{onProgress:a=void 0}=e;const{config:u,addLayer:h,removeLayer:p}=dt(rt),S=He(void 0,u);se(t,S,_=>s(10,o=_));const C=He(void 0,{...u,precision:.001});se(t,C,_=>s(0,i=_));let k;const M={setPosition:(_,H,O)=>{if(O){S.set(g*H,{hard:!0});return}const Y=Math.floor(g)*H,W=g*H+Y*d;S.set(-(_*d)+W),C.set(b(_,d,W,H))},setHeight:_=>{s(1,k=c*_)}},b=(_,H,O,Y)=>{const W=H+1,$=O/W,V=H>=0?1:-1,F=Y/W*V,R=$-F,ie=$+F*c,oe=(_-R)/(ie-R);return Se(oe,0,1)};return Ce(()=>(h(M),()=>{p(M)})),t.$$set=_=>{e=ae(ae({},e),Ke(_)),s(5,r=_e(e,l)),"rate"in _&&s(6,d=_.rate),"offset"in _&&s(7,g=_.offset),"span"in _&&s(8,c=_.span),"onProgress"in _&&s(9,a=_.onProgress),"$$scope"in _&&s(11,m=_.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&s(2,n=`translate3d(0px, ${o}px, 0px);`),t.$$.dirty&513&&a&&a(i??0)},[i,k,n,S,C,r,d,g,c,a,o,m,f]}class ve extends Z{constructor(e){super(),x(this,e,Ot,It,Q,{rate:6,offset:7,span:8,onProgress:9})}}const{window:Le}=nt;function qe(t,e,s){const n=t.slice();return n[17]=e[s],n}function Mt(t){let e,s,n,l,r="Hams",i,o="trump",f,m,d,g,c,a,u,h,p,S="Donald J. Hamstrump",C,k,M,b,_="Donald J. Hamstrump";return{c(){e=T("div"),s=T("div"),n=T("h1"),l=T("span"),l.textContent=r,i=T("span"),i.textContent=o,f=A(),m=T("div"),d=T("img"),c=A(),a=T("div"),u=T("p"),h=ne(`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
              `),p=T("span"),p.textContent=S,C=A(),k=T("p"),M=ne(`"Hamstrump is filthy rich and lives by the creed: 'Less grind, more laughs, more cash. Jump in, live large, and chill hard.' With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!"\r
              `),b=T("span"),b.textContent=_,this.h()},l(H){e=E(H,"DIV",{class:!0});var O=I(e);s=E(O,"DIV",{class:!0});var Y=I(s);n=E(Y,"H1",{class:!0,style:!0});var W=I(n);l=E(W,"SPAN",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-m2nqwl"&&(l.textContent=r),i=E(W,"SPAN",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-hpyklh"&&(i.textContent=o),W.forEach(v),Y.forEach(v),f=j(O),m=E(O,"DIV",{class:!0,style:!0});var $=I(m);d=E($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(v),c=j(O),a=E(O,"DIV",{class:!0});var V=I(a);u=E(V,"P",{class:!0,style:!0});var F=I(u);h=re(F,`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
              `),p=E(F,"SPAN",{class:!0,"data-svelte-h":!0}),K(p)!=="svelte-1j4h5h8"&&(p.textContent=S),F.forEach(v),C=j(V),k=E(V,"P",{class:!0,style:!0});var R=I(k);M=re(R,`"Hamstrump is filthy rich and lives by the creed: 'Less grind, more laughs, more cash. Jump in, live large, and chill hard.' With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!"\r
              `),b=E(R,"SPAN",{class:!0,"data-svelte-h":!0}),K(b)!=="svelte-1j4h5h8"&&(b.textContent=_),R.forEach(v),V.forEach(v),O.forEach(v),this.h()},h(){w(l,"class","hams"),w(i,"class","trump"),w(n,"class","hamstrump-title"),P(n,"opacity",t[8]),w(s,"class","hamstrump-content svelte-djxjow"),ce(d.src,g="./barbatrump.png")||w(d,"src",g),w(d,"alt","Barbatrump"),w(d,"class","w-full h-full object-contain"),w(m,"class","barbatrump-container svelte-djxjow"),P(m,"width",t[2]?"60%":"37%"),P(m,"transform","scale("+t[4]+")"),P(m,"transition","transform 0.7s ease"),w(p,"class","quote-author"),w(u,"class","hamstrump-quote initial-quote"),P(u,"opacity",t[7]),w(b,"class","quote-author"),w(k,"class","hamstrump-quote secondary-quote"),P(k,"opacity",1-t[7]),w(a,"class","hamstrump-quotes-container svelte-djxjow"),w(e,"class","content-wrapper svelte-djxjow")},m(H,O){D(H,e,O),y(e,s),y(s,n),y(n,l),y(n,i),y(e,f),y(e,m),y(m,d),y(e,c),y(e,a),y(a,u),y(u,h),y(u,p),y(a,C),y(a,k),y(k,M),y(k,b)},p(H,O){O&256&&P(n,"opacity",H[8]),O&4&&P(m,"width",H[2]?"60%":"37%"),O&16&&P(m,"transform","scale("+H[4]+")"),O&128&&P(u,"opacity",H[7]),O&128&&P(k,"opacity",1-H[7])},d(H){H&&v(e)}}}function Dt(t){let e,s,n;return{c(){e=T("div"),s=T("img"),this.h()},l(l){e=E(l,"DIV",{style:!0});var r=I(e);s=E(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(v),this.h()},h(){ce(s.src,n="./whitehouse.png")||w(s,"src",n),w(s,"alt","Whitehouse"),w(s,"class","w-full h-full object-cover object-bottom"),P(e,"width","100%"),P(e,"height","100%"),P(e,"opacity",t[6]),P(e,"clip-path","circle("+t[6]*150+"% at 50% 100%)")},m(l,r){D(l,e,r),y(e,s)},p(l,r){r&64&&P(e,"opacity",l[6]),r&64&&P(e,"clip-path","circle("+l[6]*150+"% at 50% 100%)")},d(l){l&&v(e)}}}function Pt(t){let e,s,n,l;return{c(){e=T("div"),s=T("img"),l=A(),this.h()},l(r){e=E(r,"DIV",{style:!0});var i=I(e);s=E(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(v),l=j(r),this.h()},h(){ce(s.src,n="./dollar-bill.webp")||w(s,"src",n),w(s,"alt","Dollar Bills"),w(s,"class","w-full h-auto"),P(e,"opacity",t[5]),P(e,"width",t[2]?"40%":"25%"),P(e,"transform","translateX("+(t[17]==="left"?"-30%":"30%")+")")},m(r,i){D(r,e,i),y(e,s),D(r,l,i)},p(r,i){i&32&&P(e,"opacity",r[5]),i&4&&P(e,"width",r[2]?"40%":"25%")},d(r){r&&(v(e),v(l))}}}function Re(t){let e,s;return e=new ve({props:{rate:t[2]?t[17]==="left"?-.8:.8:t[17]==="left"?-.9:.9,offset:t[9],style:"z-index: 5; display: flex; justify-content: "+(t[17]==="left"?"flex-start":"flex-end")+"; align-items: center;",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,l){X(e,n,l),s=!0},p(n,l){const r={};l&4&&(r.rate=n[2]?n[17]==="left"?-.8:.8:n[17]==="left"?-.9:.9),l&512&&(r.offset=n[9]),l&1048612&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){s||(q(e.$$.fragment,n),s=!0)},o(n){z(e.$$.fragment,n),s=!1},d(n){J(e,n)}}}function At(t){let e,s,n,l,r,i,o,f;e=new ve({props:{rate:0,style:"background-color: white; z-index: 1;"}}),n=new ve({props:{rate:t[12],offset:t[11],style:"z-index: 4; display: flex; justify-content: center; align-items: center; pointer-events: none;",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),r=new ve({props:{rate:.5,offset:t[10],style:"z-index: 2; display: flex; justify-content: center; align-items: flex-end;",$$slots:{default:[Dt]},$$scope:{ctx:t}}});let m=le(["left","right"]),d=[];for(let c=0;c<2;c+=1)d[c]=Re(qe(t,m,c));const g=c=>z(d[c],1,1,()=>{d[c]=null});return{c(){B(e.$$.fragment),s=A(),B(n.$$.fragment),l=A(),B(r.$$.fragment),i=A();for(let c=0;c<2;c+=1)d[c].c();o=De()},l(c){G(e.$$.fragment,c),s=j(c),G(n.$$.fragment,c),l=j(c),G(r.$$.fragment,c),i=j(c);for(let a=0;a<2;a+=1)d[a].l(c);o=De()},m(c,a){X(e,c,a),D(c,s,a),X(n,c,a),D(c,l,a),X(r,c,a),D(c,i,a);for(let u=0;u<2;u+=1)d[u]&&d[u].m(c,a);D(c,o,a),f=!0},p(c,a){const u={};a&4096&&(u.rate=c[12]),a&2048&&(u.offset=c[11]),a&1048980&&(u.$$scope={dirty:a,ctx:c}),n.$set(u);const h={};if(a&1024&&(h.offset=c[10]),a&1048640&&(h.$$scope={dirty:a,ctx:c}),r.$set(h),a&548){m=le(["left","right"]);let p;for(p=0;p<2;p+=1){const S=qe(c,m,p);d[p]?(d[p].p(S,a),q(d[p],1)):(d[p]=Re(S),d[p].c(),q(d[p],1),d[p].m(o.parentNode,o))}for(Ze(),p=2;p<2;p+=1)g(p);xe()}},i(c){if(!f){q(e.$$.fragment,c),q(n.$$.fragment,c),q(r.$$.fragment,c);for(let a=0;a<2;a+=1)q(d[a]);f=!0}},o(c){z(e.$$.fragment,c),z(n.$$.fragment,c),z(r.$$.fragment,c),d=d.filter(Boolean);for(let a=0;a<2;a+=1)z(d[a]);f=!1},d(c){c&&(v(s),v(l),v(i),v(o)),J(e,c),J(n,c),J(r,c),be(d,c)}}}function jt(t){let e,s,n,l,r,i;Te(t[15]);let o={sections:2,$$slots:{default:[At]},$$scope:{ctx:t}};return n=new Lt({props:o}),t[16](n),{c(){e=T("div"),s=T("article"),B(n.$$.fragment),this.h()},l(f){e=E(f,"DIV",{class:!0});var m=I(e);s=E(m,"ARTICLE",{class:!0});var d=I(s);G(n.$$.fragment,d),d.forEach(v),m.forEach(v),this.h()},h(){w(s,"class","feature"),w(e,"class","container")},m(f,m){D(f,e,m),y(e,s),X(n,s,null),l=!0,r||(i=pe(Le,"resize",t[15]),r=!0)},p(f,[m]){const d={};m&1056756&&(d.$$scope={dirty:m,ctx:f}),n.$set(d)},i(f){l||(q(n.$$.fragment,f),l=!0)},o(f){z(n.$$.fragment,f),l=!1},d(f){f&&v(e),t[16](null),J(n),r=!1,i()}}}function Nt(t,e,s){let n,l,r,i,o,f,m,d,g,c,a,u,h=0,p,S;Ce(()=>{const M=()=>{s(13,h=window.pageYOffset)};return window.addEventListener("scroll",M),()=>window.removeEventListener("scroll",M)});function C(){s(1,S=Le.innerWidth),s(0,p=Le.innerHeight)}function k(M){Qe[M?"unshift":"push"](()=>{u=M,s(3,u)})}return t.$$.update=()=>{t.$$.dirty&2&&s(2,n=S<=768),t.$$.dirty&4&&s(12,l=n?-.3:-.95),t.$$.dirty&4&&s(11,r=0),t.$$.dirty&4&&s(10,i=n?1.5:1),t.$$.dirty&4&&s(9,o=n?2:1),t.$$.dirty&8193&&s(14,f=Math.min(h/(p*.5),1)),t.$$.dirty&16384&&s(8,m=1-Math.min(f*3,1)),t.$$.dirty&16384&&s(7,d=1-Math.min(f*2,1)),t.$$.dirty&16384&&s(6,g=Math.max(0,Math.min(f*4,1))),t.$$.dirty&16384&&s(5,c=Math.max(0,Math.min((f-.2)*3,1))),t.$$.dirty&16384&&s(4,a=1-Math.min(f*.2,.3))},[p,S,n,u,a,c,g,d,m,o,i,r,l,h,f,C,k]}class qt extends Z{constructor(e){super(),x(this,e,Nt,jt,Q,{})}}function Rt(t){let e,s='<div class="container"><article class="feature2 svelte-1t715dr"><h2 class="highlight" style="font-family: CoffeeSpark">Hamstrump Presidential Campaign Funding</h2> <img src="./fundingraiser.jpg" alt="funder" class="feature-image"/> <div class="hamstrump-var">Public presale will open in October 2024.</div> <div>Wanna finance the campaign before public presale?</div> <div class="highlight" style="font-family: CoffeeSpark"><a href="mailto:campaignfund@hamstrump.biz">campaignfund@hamstrump.biz</a></div></article></div>';return{c(){e=T("section"),e.innerHTML=s},l(n){e=E(n,"SECTION",{"data-svelte-h":!0}),K(e)!=="svelte-1hp7v8b"&&(e.innerHTML=s)},m(n,l){D(n,e,l)},p:N,i:N,o:N,d(n){n&&v(e)}}}class zt extends Z{constructor(e){super(),x(this,e,null,Rt,Q,{})}}function Ft(t){let e,s,n,l,r,i,o,f,m,d,g,c=`<a href="${gt}/funding">Join the movement!</a>`,a,u,h,p;return{c(){e=T("article"),s=T("div"),n=T("div"),l=T("div"),r=T("h2"),i=ne(t[0]),o=A(),f=T("p"),m=new Ie(!1),d=A(),g=T("button"),g.innerHTML=c,a=A(),u=T("div"),h=T("img"),this.h()},l(S){e=E(S,"ARTICLE",{class:!0});var C=I(e);s=E(C,"DIV",{class:!0});var k=I(s);n=E(k,"DIV",{class:!0});var M=I(n);l=E(M,"DIV",{class:!0});var b=I(l);r=E(b,"H2",{style:!0});var _=I(r);i=re(_,t[0]),_.forEach(v),o=j(b),f=E(b,"P",{});var H=I(f);m=Oe(H,!1),H.forEach(v),d=j(b),g=E(b,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),K(g)!=="svelte-ibh6dl"&&(g.innerHTML=c),b.forEach(v),a=j(M),u=E(M,"DIV",{class:!0});var O=I(u);h=E(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(v),M.forEach(v),k.forEach(v),C.forEach(v),this.h()},h(){P(r,"font-family","CoffeeSpark"),m.a=null,w(g,"class","connectme secondary outline"),P(g,"font-family","CoffeeSpark"),w(l,"class","content svelte-1edkhwv"),ce(h.src,p=t[2])||w(h,"src",p),w(h,"alt",t[3]),w(h,"class","feature-image svelte-1edkhwv"),w(u,"class","image-container svelte-1edkhwv"),w(n,"class","grid svelte-1edkhwv"),de(n,"image-right",t[4]),w(s,"class","container"),w(e,"class","feature")},m(S,C){D(S,e,C),y(e,s),y(s,n),y(n,l),y(l,r),y(r,i),y(l,o),y(l,f),m.m(t[1],f),y(l,d),y(l,g),y(n,a),y(n,u),y(u,h)},p(S,[C]){C&1&&mt(i,S[0]),C&2&&m.p(S[1]),C&4&&!ce(h.src,p=S[2])&&w(h,"src",p),C&8&&w(h,"alt",S[3]),C&16&&de(n,"image-right",S[4])},i:N,o:N,d(S){S&&v(e)}}}function Vt(t,e,s){let{title:n=""}=e,{description:l=""}=e,{imageSrc:r=""}=e,{imageAlt:i=""}=e,{imageRight:o=!1}=e;return t.$$set=f=>{"title"in f&&s(0,n=f.title),"description"in f&&s(1,l=f.description),"imageSrc"in f&&s(2,r=f.imageSrc),"imageAlt"in f&&s(3,i=f.imageAlt),"imageRight"in f&&s(4,o=f.imageRight)},[n,l,r,i,o]}class Wt extends Z{constructor(e){super(),x(this,e,Vt,Ft,Q,{title:0,description:1,imageSrc:2,imageAlt:3,imageRight:4})}}function Yt(t){let e,s='<div class="container"><article class="hamstrump-talking svelte-tyopgq"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump is on your side!</p> <img src="./Imtalkingtoyou.png" alt="You talking to me ?" class="centered-image svelte-tyopgq"/></article></div>';return{c(){e=T("section"),e.innerHTML=s,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),K(e)!=="svelte-1vdiqly"&&(e.innerHTML=s),this.h()},h(){w(e,"id","tuned")},m(n,l){D(n,e,l)},p:N,i:N,o:N,d(n){n&&v(e)}}}class Bt extends Z{constructor(e){super(),x(this,e,null,Yt,Q,{})}}function Gt(t){let e,s='<div class="container"><article class="world svelte-4g0lzk"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump World</p> <p class="hamstrump-var2">Once upon a time in Tickertown, there dwelled a legendary creature named Hamstrump. Imagine this: part adorable hamster, part fierce tycoon. Pow! There stands Hamstrump, ruler of the roost!</p> <p class="hamstrump-var2">Hamstrump adored lounging, nibbling on caviar (and sunflower seeds, of course). One fine day, amidst tweeting and spinning on his exercise wheel, he struck gold: Hamstrump Token! A magical currency for those who prefer chilling over flipping burgers.</p> <p class="hamstrump-var2">Soon enough, Hamstrump became a legend. With his charming rodent grin and billionaire swagger, he showed everyone that you could rake in the dough by letting the money printer go brrr. His followers cashed in while kicking back, proving that sometimes, the road to riches is paved with memes and epic parties. &quot;Get on the rocket now or cry over your lost fortune later! Don&#39;t sleep on $Hamstrump!s</p></article></div>';return{c(){e=T("section"),e.innerHTML=s,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),K(e)!=="svelte-5szxw"&&(e.innerHTML=s),this.h()},h(){w(e,"id","utility")},m(n,l){D(n,e,l)},p:N,i:N,o:N,d(n){n&&v(e)}}}class Xt extends Z{constructor(e){super(),x(this,e,null,Gt,Q,{})}}function ze(t,e,s){const n=t.slice();return n[1]=e[s],n[3]=s,n}function Jt(t){let e,s,n=t[1].title+"",l,r,i,o,f=t[1].description+"",m,d,g,c;return{c(){e=T("div"),s=T("h2"),l=ne(n),r=A(),i=T("p"),o=new Ie(!1),m=A(),d=T("div"),g=T("img"),this.h()},l(a){e=E(a,"DIV",{class:!0});var u=I(e);s=E(u,"H2",{class:!0});var h=I(s);l=re(h,n),h.forEach(v),r=j(u),i=E(u,"P",{});var p=I(i);o=Oe(p,!1),p.forEach(v),u.forEach(v),m=j(a),d=E(a,"DIV",{});var S=I(d);g=E(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(v),this.h()},h(){w(s,"class","hamstrump-var svelte-o7gqib"),o.a=null,w(e,"class","card-content svelte-o7gqib"),ce(g.src,c=t[1].image)||w(g,"src",c),w(g,"alt",t[1].alt),w(g,"class","roadmap-img svelte-o7gqib")},m(a,u){D(a,e,u),y(e,s),y(s,l),y(e,r),y(e,i),o.m(f,i),D(a,m,u),D(a,d,u),y(d,g)},p:N,d(a){a&&(v(e),v(m),v(d))}}}function Ut(t){let e,s,n,l,r,i,o=t[1].title+"",f,m,d,g,c=t[1].description+"";return{c(){e=T("div"),s=T("img"),l=A(),r=T("div"),i=T("h2"),f=ne(o),m=A(),d=T("p"),g=new Ie(!1),this.h()},l(a){e=E(a,"DIV",{});var u=I(e);s=E(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(v),l=j(a),r=E(a,"DIV",{class:!0});var h=I(r);i=E(h,"H2",{class:!0});var p=I(i);f=re(p,o),p.forEach(v),m=j(h),d=E(h,"P",{});var S=I(d);g=Oe(S,!1),S.forEach(v),h.forEach(v),this.h()},h(){ce(s.src,n=t[1].image)||w(s,"src",n),w(s,"alt",t[1].alt),w(s,"class","roadmap-img svelte-o7gqib"),w(i,"class","hamstrump-var svelte-o7gqib"),g.a=null,w(r,"class","card-content svelte-o7gqib")},m(a,u){D(a,e,u),y(e,s),D(a,l,u),D(a,r,u),y(r,i),y(i,f),y(r,m),y(r,d),g.m(c,d)},p:N,d(a){a&&(v(e),v(l),v(r))}}}function Fe(t){let e,s;function n(i,o){return i[3]%2===0?Ut:Jt}let r=n(t)(t);return{c(){e=T("div"),r.c(),s=A(),this.h()},l(i){e=E(i,"DIV",{class:!0});var o=I(e);r.l(o),s=j(o),o.forEach(v),this.h()},h(){w(e,"class","grid svelte-o7gqib")},m(i,o){D(i,e,o),r.m(e,null),y(e,s)},p(i,o){r.p(i,o)},d(i){i&&v(e),r.d()}}}function Kt(t){let e,s,n=le(t[0]),l=[];for(let r=0;r<n.length;r+=1)l[r]=Fe(ze(t,n,r));return{c(){e=T("section"),s=T("article");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=E(r,"SECTION",{id:!0});var i=I(e);s=E(i,"ARTICLE",{});var o=I(s);for(let f=0;f<l.length;f+=1)l[f].l(o);o.forEach(v),i.forEach(v),this.h()},h(){w(e,"id","roadmap")},m(r,i){D(r,e,i),y(e,s);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,null)},p(r,[i]){if(i&1){n=le(r[0]);let o;for(o=0;o<n.length;o+=1){const f=ze(r,n,o);l[o]?l[o].p(f,i):(l[o]=Fe(f),l[o].c(),l[o].m(s,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},i:N,o:N,d(r){r&&v(e),be(l,r)}}}function Qt(t){return[[{image:"./constitution.jpg",alt:"constitution",title:"Day 1",description:"Launch of $Hamstrump on Solana with heavy presale limits (200 SOL per wallet)."},{image:"./juniorworker.jpg",alt:"Junior Hams",title:"Day 2 to 20",description:`
          <p>DEX listing: List $Hamstrump on decentralized exchanges.</p>
          <p>CEX listing: List $Hamstrump on centralized exchanges.</p>
          <p>Marketing and communication: establish strong partnerships with Solana ecosystem.</p>
          <p>CMC & Coinguecko: Listing on CMC and Coinguecko.</p>
        `},{image:"./hamspapers1.jpg",alt:"yesman",title:"Day 21 to 50",description:`
          <p>Scarcity: Opening of staking solutions and rewards.</p>
          <p>Marketing and communication: Partnerships with huge popular and cryptocurrency figures.</p>
          <p>Tier-1 CEX listing: Securing a Tier-1 centralized exchange listing.</p>
          <p>Airdrop campaigns.</p>
        `},{image:"./hamspapers2.jpg",alt:"RoadTo",title:"Day 50 to 100",description:`
          <p>Governance mechanisms.</p>
          <p>Hamstrump NFT Collection.</p>
          <p>First diffusion of a short film starring Hamstrump.</p>
        `}]]}class Zt extends Z{constructor(e){super(),x(this,e,Qt,Kt,Q,{})}}function Ve(t,e,s){const n=t.slice();return n[1]=e[s],n}function We(t){let e,s,n=t[1].label+"",l,r,i,o=t[1].percentage+"",f,m,d;return{c(){e=T("div"),s=T("span"),l=ne(n),r=A(),i=T("span"),f=ne(o),m=ne("%"),d=A(),this.h()},l(g){e=E(g,"DIV",{class:!0,style:!0});var c=I(e);s=E(c,"SPAN",{class:!0});var a=I(s);l=re(a,n),a.forEach(v),r=j(c),i=E(c,"SPAN",{class:!0});var u=I(i);f=re(u,o),m=re(u,"%"),u.forEach(v),d=j(c),c.forEach(v),this.h()},h(){w(s,"class","label svelte-km545t"),w(i,"class","percentage svelte-km545t"),w(e,"class","tokenomics-item"),P(e,"background-color",t[1].color)},m(g,c){D(g,e,c),y(e,s),y(s,l),y(e,r),y(e,i),y(i,f),y(i,m),y(e,d)},p:N,d(g){g&&v(e)}}}function xt(t){let e,s,n,l,r="Trumpenomics",i,o,f='<img src="./hamscenat.png" alt="Hamscenat" sizes="(max-width: 768px) 100vw, 50vw"/>',m,d,g=le(t[0]),c=[];for(let a=0;a<g.length;a+=1)c[a]=We(Ve(t,g,a));return{c(){e=T("section"),s=T("article"),n=T("div"),l=T("h2"),l.textContent=r,i=A(),o=T("div"),o.innerHTML=f,m=A(),d=T("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){e=E(a,"SECTION",{id:!0});var u=I(e);s=E(u,"ARTICLE",{class:!0});var h=I(s);n=E(h,"DIV",{class:!0});var p=I(n);l=E(p,"H2",{style:!0,"data-svelte-h":!0}),K(l)!=="svelte-1j16sxb"&&(l.textContent=r),i=j(p),o=E(p,"DIV",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-t1mtxq"&&(o.innerHTML=f),m=j(p),d=E(p,"DIV",{class:!0});var S=I(d);for(let C=0;C<c.length;C+=1)c[C].l(S);S.forEach(v),p.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){P(l,"font-family","CoffeeSpark"),w(o,"class","senate-chart"),w(d,"class","tokenomics-grid"),w(n,"class","container"),w(s,"class","feature trumpenomics"),w(e,"id","roadmap")},m(a,u){D(a,e,u),y(e,s),y(s,n),y(n,l),y(n,i),y(n,o),y(n,m),y(n,d);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(d,null)},p(a,[u]){if(u&1){g=le(a[0]);let h;for(h=0;h<g.length;h+=1){const p=Ve(a,g,h);c[h]?c[h].p(p,u):(c[h]=We(p),c[h].c(),c[h].m(d,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=g.length}},i:N,o:N,d(a){a&&v(e),be(c,a)}}}function $t(t){return[[{label:"Presale",percentage:45,color:"#B31942"},{label:"Liquidity Pool",percentage:35,color:"#FFA3BB"},{label:"Reserve",percentage:10,color:"#FFB21D"},{label:"Early investor",percentage:5,color:"#68ACFF"},{label:"Team",percentage:5,color:"#0A3161"}]]}class es extends Z{constructor(e){super(),x(this,e,$t,xt,Q,{})}}function ts(t){let e,s="<h2>Program</h2>";return{c(){e=T("section"),e.innerHTML=s,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),K(e)!=="svelte-9s2s2i"&&(e.innerHTML=s),this.h()},h(){w(e,"id","about")},m(n,l){D(n,e,l)},p:N,i:N,o:N,d(n){n&&v(e)}}}class ss extends Z{constructor(e){super(),x(this,e,null,ts,Q,{})}}function Ye(t,e,s){const n=t.slice();return n[1]=e[s],n[3]=s,n}function Be(t){let e,s;const n=[t[1],{imageRight:t[3]%2===1}];let l={};for(let r=0;r<n.length;r+=1)l=ae(l,n[r]);return e=new Wt({props:l}),{c(){B(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,i){X(e,r,i),s=!0},p(r,i){const o=i&1?Me(n,[pt(r[1]),n[1]]):{};e.$set(o)},i(r){s||(q(e.$$.fragment,r),s=!0)},o(r){z(e.$$.fragment,r),s=!1},d(r){J(e,r)}}}function ns(t){let e,s,n,l,r,i,o,f,m,d,g,c,a,u,h,p,S;s=new qt({}),l=new zt({});let C=le(t[0]),k=[];for(let b=0;b<C.length;b+=1)k[b]=Be(Ye(t,C,b));const M=b=>z(k[b],1,1,()=>{k[b]=null});return f=new Zt({}),d=new Bt({}),c=new es({}),u=new ss({}),p=new Xt({}),{c(){e=T("main"),B(s.$$.fragment),n=A(),B(l.$$.fragment),r=A(),i=T("section");for(let b=0;b<k.length;b+=1)k[b].c();o=A(),B(f.$$.fragment),m=A(),B(d.$$.fragment),g=A(),B(c.$$.fragment),a=A(),B(u.$$.fragment),h=A(),B(p.$$.fragment),this.h()},l(b){e=E(b,"MAIN",{class:!0});var _=I(e);G(s.$$.fragment,_),n=j(_),G(l.$$.fragment,_),r=j(_),i=E(_,"SECTION",{id:!0});var H=I(i);for(let O=0;O<k.length;O+=1)k[O].l(H);H.forEach(v),o=j(_),G(f.$$.fragment,_),m=j(_),G(d.$$.fragment,_),g=j(_),G(c.$$.fragment,_),a=j(_),G(u.$$.fragment,_),h=j(_),G(p.$$.fragment,_),_.forEach(v),this.h()},h(){w(i,"id","features"),w(e,"class","container svelte-z2adgy")},m(b,_){D(b,e,_),X(s,e,null),y(e,n),X(l,e,null),y(e,r),y(e,i);for(let H=0;H<k.length;H+=1)k[H]&&k[H].m(i,null);y(e,o),X(f,e,null),y(e,m),X(d,e,null),y(e,g),X(c,e,null),y(e,a),X(u,e,null),y(e,h),X(p,e,null),S=!0},p(b,[_]){if(_&1){C=le(b[0]);let H;for(H=0;H<C.length;H+=1){const O=Ye(b,C,H);k[H]?(k[H].p(O,_),q(k[H],1)):(k[H]=Be(O),k[H].c(),q(k[H],1),k[H].m(i,null))}for(Ze(),H=C.length;H<k.length;H+=1)M(H);xe()}},i(b){if(!S){q(s.$$.fragment,b),q(l.$$.fragment,b);for(let _=0;_<C.length;_+=1)q(k[_]);q(f.$$.fragment,b),q(d.$$.fragment,b),q(c.$$.fragment,b),q(u.$$.fragment,b),q(p.$$.fragment,b),S=!0}},o(b){z(s.$$.fragment,b),z(l.$$.fragment,b),k=k.filter(Boolean);for(let _=0;_<k.length;_+=1)z(k[_]);z(f.$$.fragment,b),z(d.$$.fragment,b),z(c.$$.fragment,b),z(u.$$.fragment,b),z(p.$$.fragment,b),S=!1},d(b){b&&v(e),J(s),J(l),be(k,b),J(f),J(d),J(c),J(u),J(p)}}}function rs(t){return[[{title:"Build The Wall",description:"Otters crossing our South border have become a serious menace for our hamster society! We CANNOT let them enter our glorious country indefinitely.<span class='highlight'>We will burn 2% on each transaction</span> to sustain our efforts in the building of a massive wall, preventing otters crossing the border!",imageSrc:"./notawall.jpg",imageAlt:"HamsFloyd"},{title:"Executive Order",description:"Being part of the Hamster society SHOULD grant you the right to trigger executive orders!<span class='highlight'> Stake your tokens</span> as a signing commitment, Hamstrump executive team will not forget you.",imageSrc:"./trustmeitsreal.png",imageAlt:"hamsworker"},{title:"Trickle-Down Tokenomics",description:"Billionaires and millionaires built this country with outstanding investment and dedication in the hamster industry! The trickle-down theory is real,<span class='highlight'> since 1% of all transactions go to $Hamstrump holders</span>.",imageSrc:"./cashbackham.png",imageAlt:"Give me your money"},{title:"The Art of the Deal",description:"Hamster citizens MUST be protected from money devaluation at ALL COSTS! We will pass a bill forcing the National Gold Reserve to <span class='highlight'>buy back tokens to maintain a stable price</span> of $Hamstrump!",imageSrc:"./cashbackham.jpg",imageAlt:"give me gold human"},{title:"Fake News Detector",description:"Fake news is corrupting society. Now that the Deep State has taken control of the media, they need to be regulated. We will put in place a <span class='highlight'> system of governance</span> that puts Hamsters at the heart of this regulation!",imageSrc:"./SireneGirl.png",imageAlt:"hey babe come back later"}]]}class cs extends Z{constructor(e){super(),x(this,e,rs,ns,Q,{})}}export{cs as component};
