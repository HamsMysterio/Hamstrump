import{n as P,s as X,h as Te,u as ze,y as oe,v as Fe,w as Ye,x as xe,r as ot,z as ve,c as Z,A as ct,o as Le,B as We,d as Ve,C as ft,D as ce}from"../chunks/scheduler.CUgGpP8_.js";import{S as U,i as K,e as k,c as E,a as D,d as _,C as ye,A as _e,g as O,y as ue,n as R,l as j,s as N,t as B,z as W,f as $,b as J,o as L,p as M,h as T,u as q,v as z,w as F,x as Y,q as Be,m as Je,B as Ce,H as Ge,D as Xe,j as be}from"../chunks/index.SAq3QukI.js";import{bg as me,bm as ut,bc as dt,bd as mt,be as ht}from"../chunks/wagmi.BlBTkmTU.js";import{w as he,d as pt}from"../chunks/index.DZGC9Yfu.js";const Ue=typeof window<"u";let ke=Ue?()=>window.performance.now():()=>Date.now(),Ke=Ue?s=>requestAnimationFrame(s):P;const de=new Set;function Qe(s){de.forEach(e=>{e.c(s)||(de.delete(e),e.f())}),de.size!==0&&Ke(Qe)}function Ze(s){let e;return de.size===0&&Ke(Qe),{promise:new Promise(t=>{de.add(e={c:s,f:t})}),abort(){de.delete(e)}}}const et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Oe(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const l=s[r],c=e[r];if(c){for(const u in l)u in c||(n[u]=1);for(const u in c)i[u]||(t[u]=c[u],i[u]=1);s[r]=c}else for(const u in l)i[u]=1}for(const l in n)l in t||(t[l]=void 0);return t}function gt(s){return typeof s=="object"&&s!==null?s:{}}function Me(s){return Object.prototype.toString.call(s)==="[object Date]"}function Ee(s,e,t,n){if(typeof t=="number"||Me(t)){const i=n-t,r=(t-e)/(s.dt||1/60),l=s.opts.stiffness*i,c=s.opts.damping*r,u=(l-c)*s.inv_mass,f=(r+u)*s.dt;return Math.abs(f)<s.opts.precision&&Math.abs(i)<s.opts.precision?n:(s.settled=!1,Me(t)?new Date(t.getTime()+f):t+f)}else{if(Array.isArray(t))return t.map((i,r)=>Ee(s,e[r],t[r],n[r]));if(typeof t=="object"){const i={};for(const r in t)i[r]=Ee(s,e[r],t[r],n[r]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function He(s,e={}){const t=he(s),{stiffness:n=.15,damping:i=.8,precision:r=.01}=e;let l,c,u,f=s,m=s,p=1,y=0,h=!1;function v(S,a={}){m=S;const o=u={};return s==null||a.hard||g.stiffness>=1&&g.damping>=1?(h=!0,l=ke(),f=S,t.set(s=m),Promise.resolve()):(a.soft&&(y=1/((a.soft===!0?.5:+a.soft)*60),p=0),c||(l=ke(),h=!1,c=Ze(d=>{if(h)return h=!1,c=null,!1;p=Math.min(p+y,1);const A={inv_mass:p,opts:g,settled:!0,dt:(d-l)*60/1e3},w=Ee(A,f,s,m);return l=d,f=s,t.set(s=w),A.settled&&(c=null),!A.settled})),new Promise(d=>{c.promise.then(()=>{o===u&&d()})}))}const g={set:v,update:(S,a)=>v(S(m,s),a),subscribe:t.subscribe,stiffness:n,damping:i,precision:r};return g}function vt(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function yt(s){return s/=.5,s<1?.5*s*s:(s--,-.5*(s*(s-2)-1))}function _t(s=new Set){const e=he(s),t=n=>(...i)=>{let r;return e.update(l=>(r=l[n](...i),l)),r};return{...e,add:t("add"),delete:t("delete")}}const tt={},Se=(s,e,t)=>s<e?e:s>t?t:s;let st=!1;try{let s=Object.defineProperty({},"passive",{get:function(){st=!0}});window.addEventListener("test",null,s)}catch{}const Q={$(s){return typeof s=="string"?document.querySelector(s):s},extend(...s){return Object.assign(...s)},addListeners(s,e,t,n={passive:!1}){e instanceof Array||(e=[e]);for(let i=0;i<e.length;i++)s.addEventListener(e[i],t,st?n:!1)},removeListeners(s,e,t){e instanceof Array||(e=[e]);for(let n=0;n<e.length;n++)s.removeEventListener(e[n],t)},cumulativeOffset(s){let e=0,t=0;do e+=s.offsetTop||0,t+=s.offsetLeft||0,s=s.offsetParent;while(s);return{top:e,left:t}},directScroll(s){return s&&s!==document&&s!==document.body},scrollTop(s,e){let t=e!==void 0;return this.directScroll(s)?t?s.scrollTop=e:s.scrollTop:t?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(s,e){let t=e!==void 0;return this.directScroll(s)?t?s.scrollLeft=e:s.scrollLeft:t?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},bt={container:"body",duration:500,delay:0,offset:0,easing:vt,onStart:P,onDone:P,onAborting:P,scrollX:!1,scrollY:!0},De=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],wt=s=>{let{offset:e,duration:t,delay:n,easing:i,x:r=0,y:l=0,scrollX:c,scrollY:u,onStart:f,onDone:m,container:p,onAborting:y,element:h}=s;typeof e=="function"&&(e=e());const v=Q.cumulativeOffset(p),g=h?Q.cumulativeOffset(h):{top:l,left:r},S=Q.scrollLeft(p),a=Q.scrollTop(p),o=g.left-v.left+e,d=g.top-v.top+e,A=o-S,w=d-a;let b=!0,H=!1,I=ke()+n,V=I+t;function ee(x,ie,le){c&&Q.scrollLeft(x,le),u&&Q.scrollTop(x,ie)}function re(x){x||(H=!0,f(h,{x:r,y:l})),Q.addListeners(p,De,G,{passive:!0})}function te(x){ee(p,a+w*x,S+A*x)}function G(){b=!1,Q.removeListeners(p,De,G)}return Ze(x=>{if(!H&&x>=I&&re(!1),H&&x>=V)return te(1),G(),m(h,{x:r,y:l}),!1;if(!b)return y(h,{x:r,y:l}),!1;if(H){const ie=x-I,le=0+1*i(ie/t);te(le)}return!0}),re(n),te(0),G},Tt=s=>{let e=Q.extend({},bt,s);return e.container=Q.$(e.container),e.element=Q.$(e.element),e},kt=s=>wt(Tt(s));(function(){if(!(typeof window>"u"||typeof document>"u"||typeof HTMLElement>"u")){var s=!1;try{var e=document.createElement("div");e.addEventListener("focus",function(r){r.preventDefault(),r.stopPropagation()},!0),e.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&typeof navigator.userAgent<"u"&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return s=!1;s=!0}}))}catch{}if(HTMLElement.prototype.nativeFocus===void 0&&!s){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var t=function(r){for(var l=r.parentNode,c=[],u=document.scrollingElement||document.documentElement;l&&l!==u;)(l.offsetHeight<l.scrollHeight||l.offsetWidth<l.scrollWidth)&&c.push([l,l.scrollTop,l.scrollLeft]),l=l.parentNode;return l=u,c.push([l,l.scrollTop,l.scrollLeft]),c},n=function(r){for(var l=0;l<r.length;l++)r[l][0].scrollTop=r[l][1],r[l][0].scrollLeft=r[l][2];r=[]},i=function(r){if(r&&r.preventScroll){var l=t(this);if(typeof setTimeout=="function"){var c=this;setTimeout(function(){c.nativeFocus(),n(l)},0)}else this.nativeFocus(),n(l)}else this.nativeFocus()};HTMLElement.prototype.focus=i}}})();const{scrollTo:Et,setTimeout:Ie,window:fe}=et;function Ht(s){let e=!1,t=()=>{e=!1},n,i,r,l,c,u,f;Te(s[26]),Te(s[27]);const m=s[24].default,p=ze(m,s,s[23],null);let y=[s[12],{class:r="parallax-container "+(s[12].class?s[12].class:"")},{style:l="height: "+s[1]*s[0]+"px; "+(s[12].style?s[12].style:"")+";"}],h={};for(let v=0;v<y.length;v+=1)h=oe(h,y[v]);return{c(){i=k("div"),p&&p.c(),this.h()},l(v){i=E(v,"DIV",{class:!0,style:!0});var g=D(i);p&&p.l(g),g.forEach(_),this.h()},h(){ye(i,h),_e(i,"svelte-15ph2c6",!0)},m(v,g){O(v,i,g),p&&p.m(i,null),s[28](i),c=!0,u||(f=[ue(fe,"resize",s[25]),ue(fe,"scroll",()=>{e=!0,clearTimeout(n),n=Ie(t,100),s[26]()}),ue(fe,"resize",s[27])],u=!0)},p(v,[g]){g&16&&!e&&(e=!0,clearTimeout(n),Et(fe.pageXOffset,v[4]),n=Ie(t,100)),p&&p.p&&(!c||g&8388608)&&Fe(p,m,v,v[23],c?xe(m,v[23],g,null):Ye(v[23]),null),ye(i,h=Oe(y,[g&4096&&v[12],(!c||g&4096&&r!==(r="parallax-container "+(v[12].class?v[12].class:"")))&&{class:r},(!c||g&4099&&l!==(l="height: "+v[1]*v[0]+"px; "+(v[12].style?v[12].style:"")+";"))&&{style:l}])),_e(i,"svelte-15ph2c6",!0)},i(v){c||(R(p,v),c=!0)},o(v){j(p,v),c=!1},d(v){v&&_(i),p&&p.d(v),s[28](null),u=!1,ot(f)}}}function St(s,e,t){const n=["sections","sectionHeight","config","threshold","onProgress","onScroll","disabled","scrollTo"];let i=ve(e,n),r,l,c,u,f,m,{$$slots:p={},$$scope:y}=e,h,v,{sections:g=1}=e,{sectionHeight:S=void 0}=e,{config:a={stiffness:.017,damping:.26}}=e,{threshold:o={top:1,bottom:1}}=e,{onProgress:d=void 0}=e,{onScroll:A=void 0}=e,{disabled:w=!1}=e;const b=he(0);Z(s,b,C=>t(4,m=C));const H=he(0);Z(s,H,C=>t(29,l=C));const I=he(0);Z(s,I,C=>t(1,r=C));const V=He(void 0,{...a,precision:.001});Z(s,V,C=>t(22,f=C));const ee=pt([b,H,I],([C,se,ne],we)=>{const pe=C-se,ge=0-ne+ne*o.top,lt=ne*g-ne*o.bottom,at=Se(pe,ge,lt);we(at)});Z(s,ee,C=>t(20,c=C));const re=(C,se)=>{if(se===0){V.set(0);return}const ne=se*g-se;V.set(Se(C/ne,0,1))},te=_t(new Set);Z(s,te,C=>t(21,u=C)),ct(tt,{config:a,addLayer:C=>{te.add(C)},removeLayer:C=>{te.delete(C)}}),Le(()=>{G()});const G=()=>{I.set(S||v),H.set(h.getBoundingClientRect().top+window.pageYOffset)};function x(C,{selector:se="",duration:ne=500,easing:we=yt}={}){const pe=l+r*(C-1),ge=()=>{document.querySelector(se).focus({preventScroll:!0})};if(w){window.scrollTo({top:pe}),se&&ge();return}kt({y:pe,duration:ne,easing:we,onDone:se?ge:()=>{}})}const ie=()=>setTimeout(G,0);function le(){b.set(m=fe.pageYOffset)}function rt(){t(3,v=fe.innerHeight)}function it(C){Ve[C?"unshift":"push"](()=>{h=C,t(2,h)})}return s.$$set=C=>{e=oe(oe({},e),We(C)),t(12,i=ve(e,n)),"sections"in C&&t(0,g=C.sections),"sectionHeight"in C&&t(13,S=C.sectionHeight),"config"in C&&t(14,a=C.config),"threshold"in C&&t(15,o=C.threshold),"onProgress"in C&&t(16,d=C.onProgress),"onScroll"in C&&t(17,A=C.onScroll),"disabled"in C&&t(18,w=C.disabled),"$$scope"in C&&t(23,y=C.$$scope)},s.$$.update=()=>{s.$$.dirty&1179648&&A&&A(c),s.$$.dirty&1114114&&d&&re(c,r),s.$$.dirty&4259840&&d&&d(f??0),s.$$.dirty&2097154&&u.forEach(C=>{C.setHeight(r)}),s.$$.dirty&3407874&&u.forEach(C=>{C.setPosition(c,r,w)}),s.$$.dirty&8194&&r!==0&&G()},[g,r,h,v,m,b,H,I,V,ee,te,G,i,S,a,o,d,A,w,x,c,u,f,y,p,ie,le,rt,it]}class Lt extends U{constructor(e){super(),K(this,e,St,Ht,X,{sections:0,sectionHeight:13,config:14,threshold:15,onProgress:16,onScroll:17,disabled:18,scrollTo:19})}get scrollTo(){return this.$$.ctx[19]}}const Ct=s=>({progress:s&1}),Ae=s=>({progress:s[0]});function Ot(s){let e,t,n,i;const r=s[12].default,l=ze(r,s,s[11],Ae);let c=[s[5],{class:t="parallax-layer "+(s[5].class?s[5].class:"")},{style:n=""+(s[5].style?s[5].style:"")+"; height: "+s[1]+"px; -ms-transform: "+s[2]+"; -webkit-transform: "+s[2]+"; transform: "+s[2]+";"}],u={};for(let f=0;f<c.length;f+=1)u=oe(u,c[f]);return{c(){e=k("div"),l&&l.c(),this.h()},l(f){e=E(f,"DIV",{class:!0,style:!0});var m=D(e);l&&l.l(m),m.forEach(_),this.h()},h(){ye(e,u),_e(e,"svelte-qcp0z5",!0)},m(f,m){O(f,e,m),l&&l.m(e,null),i=!0},p(f,[m]){l&&l.p&&(!i||m&2049)&&Fe(l,r,f,f[11],i?xe(r,f[11],m,Ct):Ye(f[11]),Ae),ye(e,u=Oe(c,[m&32&&f[5],(!i||m&32&&t!==(t="parallax-layer "+(f[5].class?f[5].class:"")))&&{class:t},(!i||m&38&&n!==(n=""+(f[5].style?f[5].style:"")+"; height: "+f[1]+"px; -ms-transform: "+f[2]+"; -webkit-transform: "+f[2]+"; transform: "+f[2]+";"))&&{style:n}])),_e(e,"svelte-qcp0z5",!0)},i(f){i||(R(l,f),i=!0)},o(f){j(l,f),i=!1},d(f){f&&_(e),l&&l.d(f)}}}function Mt(s,e,t){let n;const i=["rate","offset","span","onProgress"];let r=ve(e,i),l,c,{$$slots:u={},$$scope:f}=e,{rate:m=.5}=e,{offset:p=0}=e,{span:y=1}=e,{onProgress:h=void 0}=e;const{config:v,addLayer:g,removeLayer:S}=ft(tt),a=He(void 0,v);Z(s,a,b=>t(10,c=b));const o=He(void 0,{...v,precision:.001});Z(s,o,b=>t(0,l=b));let d;const A={setPosition:(b,H,I)=>{if(I){a.set(p*H,{hard:!0});return}const V=Math.floor(p)*H,ee=p*H+V*m;a.set(-(b*m)+ee),o.set(w(b,m,ee,H))},setHeight:b=>{t(1,d=y*b)}},w=(b,H,I,V)=>{const ee=H+1,re=I/ee,te=H>=0?1:-1,G=V/ee*te,x=re-G,ie=re+G*y,le=(b-x)/(ie-x);return Se(le,0,1)};return Le(()=>(g(A),()=>{S(A)})),s.$$set=b=>{e=oe(oe({},e),We(b)),t(5,r=ve(e,i)),"rate"in b&&t(6,m=b.rate),"offset"in b&&t(7,p=b.offset),"span"in b&&t(8,y=b.span),"onProgress"in b&&t(9,h=b.onProgress),"$$scope"in b&&t(11,f=b.$$scope)},s.$$.update=()=>{s.$$.dirty&1024&&t(2,n=`translate3d(0px, ${c}px, 0px);`),s.$$.dirty&513&&h&&h(l??0)},[l,d,n,a,o,r,m,p,y,h,c,f,u]}class ae extends U{constructor(e){super(),K(this,e,Mt,Ot,X,{rate:6,offset:7,span:8,onProgress:9})}}function Dt(s){let e,t,n,i="Hams",r,l="trump",c,u,f,m,p,y="Donald J. Hamstrump",h,v,g,S,a="Donald J. Hamstrump";return{c(){e=k("div"),t=k("h1"),n=k("span"),n.textContent=i,r=k("span"),r.textContent=l,c=N(),u=k("div"),f=k("p"),m=B(`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
      `),p=k("span"),p.textContent=y,h=N(),v=k("p"),g=B(`Hamstrump is filthy rich and lives by the creed: "Less grind, more laughs, more cash. Jump in, live large, and chill hard." With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!\r
      `),S=k("span"),S.textContent=a,this.h()},l(o){e=E(o,"DIV",{class:!0});var d=D(e);t=E(d,"H1",{class:!0,style:!0});var A=D(t);n=E(A,"SPAN",{class:!0,"data-svelte-h":!0}),W(n)!=="svelte-m2nqwl"&&(n.textContent=i),r=E(A,"SPAN",{class:!0,"data-svelte-h":!0}),W(r)!=="svelte-hpyklh"&&(r.textContent=l),A.forEach(_),c=$(d),u=E(d,"DIV",{class:!0});var w=D(u);f=E(w,"P",{class:!0,style:!0});var b=D(f);m=J(b,`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
      `),p=E(b,"SPAN",{class:!0,"data-svelte-h":!0}),W(p)!=="svelte-1j4h5h8"&&(p.textContent=y),b.forEach(_),h=$(w),v=E(w,"P",{class:!0,style:!0});var H=D(v);g=J(H,`Hamstrump is filthy rich and lives by the creed: "Less grind, more laughs, more cash. Jump in, live large, and chill hard." With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!\r
      `),S=E(H,"SPAN",{class:!0,"data-svelte-h":!0}),W(S)!=="svelte-1j4h5h8"&&(S.textContent=a),H.forEach(_),w.forEach(_),d.forEach(_),this.h()},h(){L(n,"class","hams"),L(r,"class","trump"),L(t,"class","hamstrump-title"),M(t,"opacity",s[0]),L(p,"class","quote-author"),L(f,"class","hamstrump-quote initial-quote"),M(f,"opacity",s[1]),L(S,"class","quote-author"),L(v,"class","hamstrump-quote secondary-quote"),M(v,"opacity",1-s[1]),L(u,"class","hamstrump-quotes-container"),L(e,"class","hamstrump-content")},m(o,d){O(o,e,d),T(e,t),T(t,n),T(t,r),T(e,c),T(e,u),T(u,f),T(f,m),T(f,p),T(u,h),T(u,v),T(v,g),T(v,S)},p(o,[d]){d&1&&M(t,"opacity",o[0]),d&2&&M(f,"opacity",o[1]),d&2&&M(v,"opacity",1-o[1])},i:P,o:P,d(o){o&&_(e)}}}function It(s,e,t){let{titleOpacity:n=1}=e,{quoteOpacity:i=1}=e;return s.$$set=r=>{"titleOpacity"in r&&t(0,n=r.titleOpacity),"quoteOpacity"in r&&t(1,i=r.quoteOpacity)},[n,i]}class At extends U{constructor(e){super(),K(this,e,It,Dt,X,{titleOpacity:0,quoteOpacity:1})}}const{window:nt}=et;function Pe(s,e,t){const n=s.slice();return n[12]=e[t],n}function Pt(s){let e,t,n;return{c(){e=k("div"),t=k("img"),this.h()},l(i){e=E(i,"DIV",{style:!0});var r=D(e);t=E(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){ce(t.src,n="./barbatrump.png")||L(t,"src",n),L(t,"alt","Barbatrump"),L(t,"class","w-full h-full object-contain"),M(e,"width","37%"),M(e,"transform","scale("+s[4]+")"),M(e,"transition","transform 0.7s ease"),M(e,"margin-top","6%")},m(i,r){O(i,e,r),T(e,t)},p(i,r){r&16&&M(e,"transform","scale("+i[4]+")")},d(i){i&&_(e)}}}function Nt(s){let e,t,n;return t=new At({props:{titleOpacity:s[7],quoteOpacity:1}}),{c(){e=k("div"),q(t.$$.fragment),this.h()},l(i){e=E(i,"DIV",{style:!0});var r=D(e);z(t.$$.fragment,r),r.forEach(_),this.h()},h(){M(e,"opacity",s[7]),M(e,"margin-top","1%")},m(i,r){O(i,e,r),F(t,e,null),n=!0},p(i,r){const l={};r&128&&(l.titleOpacity=i[7]),t.$set(l),(!n||r&128)&&M(e,"opacity",i[7])},i(i){n||(R(t.$$.fragment,i),n=!0)},o(i){j(t.$$.fragment,i),n=!1},d(i){i&&_(e),Y(t)}}}function $t(s){let e,t,n=`&quot;THEY&#39;RE NOT AFTER MEMECOINS, THEY&#39;RE AFTER YOUR PORTFOLIO…I&#39;M JUST STANDING IN THE WAY!&quot;
              <span class="block mt-2 italic">- Donald J. Hamstrump</span>`;return{c(){e=k("div"),t=k("p"),t.innerHTML=n,this.h()},l(i){e=E(i,"DIV",{style:!0});var r=D(e);t=E(r,"P",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-panl59"&&(t.innerHTML=n),r.forEach(_),this.h()},h(){L(t,"class","text-xl text-red-600 mb-4"),M(e,"opacity",s[6]),M(e,"margin-left","5%"),M(e,"width","30%")},m(i,r){O(i,e,r),T(e,t)},p(i,r){r&64&&M(e,"opacity",i[6])},d(i){i&&_(e)}}}function Rt(s){let e,t,n;return{c(){e=k("div"),t=k("img"),this.h()},l(i){e=E(i,"DIV",{style:!0});var r=D(e);t=E(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){ce(t.src,n="./whitehouse.png")||L(t,"src",n),L(t,"alt","Whitehouse"),L(t,"class","w-full h-full object-cover object-bottom"),M(e,"width","100%"),M(e,"height","100%"),M(e,"opacity",s[2]),M(e,"clip-path","circle("+s[2]*150+"% at 50% 100%)")},m(i,r){O(i,e,r),T(e,t)},p(i,r){r&4&&M(e,"opacity",i[2]),r&4&&M(e,"clip-path","circle("+i[2]*150+"% at 50% 100%)")},d(i){i&&_(e)}}}function jt(s){let e,t,n,i;return{c(){e=k("div"),t=k("img"),i=N(),this.h()},l(r){e=E(r,"DIV",{style:!0});var l=D(e);t=E(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(_),i=$(r),this.h()},h(){ce(t.src,n="./dollar-bill.webp")||L(t,"src",n),L(t,"alt","Dollar Bills"),L(t,"class","w-full h-auto"),M(e,"opacity",s[1]),M(e,"width","25%"),M(e,"transform","translateX("+(s[12]==="left"?"-50%":"50%")+")")},m(r,l){O(r,e,l),T(e,t),O(r,i,l)},p(r,l){l&2&&M(e,"opacity",r[1])},d(r){r&&(_(e),_(i))}}}function Ne(s){let e,t;return e=new ae({props:{rate:s[12]==="left"?-.9:.9,offset:1,style:"z-index: 5; display: flex; justify-content: "+(s[12]==="left"?"flex-start":"flex-end")+"; align-items: center;",$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,i){F(e,n,i),t=!0},p(n,i){const r={};i&32770&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){Y(e,n)}}}function qt(s){let e,t,n='<span class="block mt-2 italic">- Donald J. Hamstrump</span> ',i,r=`"Hamstrump is filthy rich and lives by the creed: 'Less grind, more laughs, more cash. Jump in, live large, and chill hard.' With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!"`;return{c(){e=k("div"),t=k("p"),t.innerHTML=n,i=k("p"),i.textContent=r,this.h()},l(l){e=E(l,"DIV",{style:!0});var c=D(e);t=E(c,"P",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-tnf4ng"&&(t.innerHTML=n),i=E(c,"P",{"data-svelte-h":!0}),W(i)!=="svelte-138dyxg"&&(i.textContent=r),c.forEach(_),this.h()},h(){L(t,"class","text-xl text-blue-600 "),M(e,"opacity",s[5]),M(e,"margin-left","5%"),M(e,"width","30%")},m(l,c){O(l,e,c),T(e,t),T(e,i)},p(l,c){c&32&&M(e,"opacity",l[5])},d(l){l&&_(e)}}}function zt(s){let e,t,n,i,r,l,c,u,f,m,p,y,h;e=new ae({props:{rate:0,style:"background-color: white; z-index: 1;"}}),n=new ae({props:{rate:-1.1,offset:.06,style:"z-index: 4; display: flex; justify-content: center; align-items: center; pointer-events: none;",$$slots:{default:[Pt]},$$scope:{ctx:s}}}),r=new ae({props:{rate:.1,offset:0,style:"z-index: 2; display: flex; justify-content: center; align-items: flex-start;",$$slots:{default:[Nt]},$$scope:{ctx:s}}}),c=new ae({props:{rate:.1,offset:0,style:"z-index: 3; display: flex; justify-content: flex-start; align-items: center;",$$slots:{default:[$t]},$$scope:{ctx:s}}}),f=new ae({props:{rate:.5,offset:1,style:"z-index: 2; display: flex; justify-content: center; align-items: flex-end;",$$slots:{default:[Rt]},$$scope:{ctx:s}}});let v=me(["left","right"]),g=[];for(let a=0;a<2;a+=1)g[a]=Ne(Pe(s,v,a));const S=a=>j(g[a],1,1,()=>{g[a]=null});return y=new ae({props:{rate:.2,offset:1.1,style:"z-index: 6; display: flex; justify-content: flex-start; align-items: center;",$$slots:{default:[qt]},$$scope:{ctx:s}}}),{c(){q(e.$$.fragment),t=N(),q(n.$$.fragment),i=N(),q(r.$$.fragment),l=N(),q(c.$$.fragment),u=N(),q(f.$$.fragment),m=N();for(let a=0;a<2;a+=1)g[a].c();p=N(),q(y.$$.fragment)},l(a){z(e.$$.fragment,a),t=$(a),z(n.$$.fragment,a),i=$(a),z(r.$$.fragment,a),l=$(a),z(c.$$.fragment,a),u=$(a),z(f.$$.fragment,a),m=$(a);for(let o=0;o<2;o+=1)g[o].l(a);p=$(a),z(y.$$.fragment,a)},m(a,o){F(e,a,o),O(a,t,o),F(n,a,o),O(a,i,o),F(r,a,o),O(a,l,o),F(c,a,o),O(a,u,o),F(f,a,o),O(a,m,o);for(let d=0;d<2;d+=1)g[d]&&g[d].m(a,o);O(a,p,o),F(y,a,o),h=!0},p(a,o){const d={};o&32784&&(d.$$scope={dirty:o,ctx:a}),n.$set(d);const A={};o&32896&&(A.$$scope={dirty:o,ctx:a}),r.$set(A);const w={};o&32832&&(w.$$scope={dirty:o,ctx:a}),c.$set(w);const b={};if(o&32772&&(b.$$scope={dirty:o,ctx:a}),f.$set(b),o&2){v=me(["left","right"]);let I;for(I=0;I<2;I+=1){const V=Pe(a,v,I);g[I]?(g[I].p(V,o),R(g[I],1)):(g[I]=Ne(V),g[I].c(),R(g[I],1),g[I].m(p.parentNode,p))}for(Be(),I=2;I<2;I+=1)S(I);Je()}const H={};o&32800&&(H.$$scope={dirty:o,ctx:a}),y.$set(H)},i(a){if(!h){R(e.$$.fragment,a),R(n.$$.fragment,a),R(r.$$.fragment,a),R(c.$$.fragment,a),R(f.$$.fragment,a);for(let o=0;o<2;o+=1)R(g[o]);R(y.$$.fragment,a),h=!0}},o(a){j(e.$$.fragment,a),j(n.$$.fragment,a),j(r.$$.fragment,a),j(c.$$.fragment,a),j(f.$$.fragment,a),g=g.filter(Boolean);for(let o=0;o<2;o+=1)j(g[o]);j(y.$$.fragment,a),h=!1},d(a){a&&(_(t),_(i),_(l),_(u),_(m),_(p)),Y(e,a),Y(n,a),Y(r,a),Y(c,a),Y(f,a),Ce(g,a),Y(y,a)}}}function Ft(s){let e,t,n,i,r,l;Te(s[10]);let c={sections:2,$$slots:{default:[zt]},$$scope:{ctx:s}};return n=new Lt({props:c}),s[11](n),{c(){e=k("div"),t=k("article"),q(n.$$.fragment),this.h()},l(u){e=E(u,"DIV",{class:!0});var f=D(e);t=E(f,"ARTICLE",{class:!0});var m=D(t);z(n.$$.fragment,m),m.forEach(_),f.forEach(_),this.h()},h(){L(t,"class","feature"),L(e,"class","container")},m(u,f){O(u,e,f),T(e,t),F(n,t,null),i=!0,r||(l=ue(nt,"resize",s[10]),r=!0)},p(u,[f]){const m={};f&33014&&(m.$$scope={dirty:f,ctx:u}),n.$set(m)},i(u){i||(R(n.$$.fragment,u),i=!0)},o(u){j(n.$$.fragment,u),i=!1},d(u){u&&_(e),s[11](null),Y(n),r=!1,l()}}}function Yt(s,e,t){let n,i,r,l,c,u,f,m,p=0,y;Le(()=>{const g=()=>{t(8,p=window.pageYOffset),console.log("ScrollY:",p)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)});function h(){t(0,y=nt.innerHeight)}function v(g){Ve[g?"unshift":"push"](()=>{m=g,t(3,m)})}return s.$$.update=()=>{s.$$.dirty&257&&t(9,n=Math.min(p/(y*.5),1)),s.$$.dirty&512&&t(7,i=1-Math.min(n*3,1)),s.$$.dirty&512&&t(6,r=1-Math.min(n*2,1)),s.$$.dirty&512&&t(2,l=Math.max(0,Math.min(n*4,1))),s.$$.dirty&512&&t(1,c=Math.max(0,Math.min((n-.2)*4,1))),s.$$.dirty&512&&t(5,u=Math.max(0,Math.min((n-.4)*3,1))),s.$$.dirty&512&&t(4,f=1-Math.min(n*.2,.3)),s.$$.dirty&512&&console.log("Progress:",n),s.$$.dirty&4&&console.log("White House Progress:",l),s.$$.dirty&2&&console.log("Bills Progress:",c)},[y,c,l,m,f,u,r,i,p,n,h,v]}class xt extends U{constructor(e){super(),K(this,e,Yt,Ft,X,{})}}function Wt(s){let e,t='<div class="container"><article class="feature2 svelte-1t715dr"><h2 class="highlight" style="font-family: CoffeeSpark">Hamstrump Presidential Campaign Funding</h2> <img src="./fundingraiser.jpg" alt="funder" class="feature-image"/> <div class="hamstrump-var">Public presale will open in October 2024.</div> <div>Wanna finance the campaign before public presale?</div> <div class="highlight" style="font-family: CoffeeSpark"><a href="mailto:campaignfund@hamstrump.biz">campaignfund@hamstrump.biz</a></div></article></div>';return{c(){e=k("section"),e.innerHTML=t,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),W(e)!=="svelte-88e87i"&&(e.innerHTML=t),this.h()},h(){L(e,"id","funding")},m(n,i){O(n,e,i)},p:P,i:P,o:P,d(n){n&&_(e)}}}class Vt extends U{constructor(e){super(),K(this,e,null,Wt,X,{})}}function Bt(s){let e,t,n,i,r,l,c,u,f,m,p,y,h,v;function g(o,d){return o[6]?Xt:Gt}let S=g(s),a=S(s);return{c(){e=k("div"),t=k("img"),i=N(),r=k("div"),l=k("h2"),c=B(s[0]),u=N(),f=k("p"),m=new Ge(!1),p=N(),y=k("button"),a.c(),this.h()},l(o){e=E(o,"DIV",{});var d=D(e);t=E(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(_),i=$(o),r=E(o,"DIV",{});var A=D(r);l=E(A,"H2",{style:!0});var w=D(l);c=J(w,s[0]),w.forEach(_),u=$(A),f=E(A,"P",{});var b=D(f);m=Xe(b,!1),b.forEach(_),p=$(A),y=E(A,"BUTTON",{class:!0,style:!0});var H=D(y);a.l(H),H.forEach(_),A.forEach(_),this.h()},h(){ce(t.src,n=s[2])||L(t,"src",n),L(t,"alt",s[3]),L(t,"class","feature-image"),M(l,"font-family","CoffeeSpark"),m.a=null,L(y,"class","connectme secondary outline"),M(y,"font-family","CoffeeSpark")},m(o,d){O(o,e,d),T(e,t),O(o,i,d),O(o,r,d),T(r,l),T(l,c),T(r,u),T(r,f),m.m(s[1],f),T(r,p),T(r,y),a.m(y,null),h||(v=ue(y,"click",s[7]),h=!0)},p(o,d){d&4&&!ce(t.src,n=o[2])&&L(t,"src",n),d&8&&L(t,"alt",o[3]),d&1&&be(c,o[0]),d&2&&m.p(o[1]),S===(S=g(o))&&a?a.p(o,d):(a.d(1),a=S(o),a&&(a.c(),a.m(y,null)))},d(o){o&&(_(e),_(i),_(r)),a.d(),h=!1,v()}}}function Jt(s){let e,t,n,i,r,l,c,u,f,m,p,y,h,v;function g(o,d){return o[6]?Kt:Ut}let S=g(s),a=S(s);return{c(){e=k("div"),t=k("h2"),n=B(s[0]),i=N(),r=k("p"),l=new Ge(!1),c=N(),u=k("button"),a.c(),f=N(),m=k("div"),p=k("img"),this.h()},l(o){e=E(o,"DIV",{});var d=D(e);t=E(d,"H2",{style:!0});var A=D(t);n=J(A,s[0]),A.forEach(_),i=$(d),r=E(d,"P",{});var w=D(r);l=Xe(w,!1),w.forEach(_),c=$(d),u=E(d,"BUTTON",{class:!0,style:!0});var b=D(u);a.l(b),b.forEach(_),d.forEach(_),f=$(o),m=E(o,"DIV",{});var H=D(m);p=E(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(_),this.h()},h(){M(t,"font-family","CoffeeSpark"),l.a=null,L(u,"class","connectme secondary outline"),M(u,"font-family","CoffeeSpark"),ce(p.src,y=s[2])||L(p,"src",y),L(p,"alt",s[3]),L(p,"class","feature-image")},m(o,d){O(o,e,d),T(e,t),T(t,n),T(e,i),T(e,r),l.m(s[1],r),T(e,c),T(e,u),a.m(u,null),O(o,f,d),O(o,m,d),T(m,p),h||(v=ue(u,"click",s[7]),h=!0)},p(o,d){d&1&&be(n,o[0]),d&2&&l.p(o[1]),S===(S=g(o))&&a?a.p(o,d):(a.d(1),a=S(o),a&&(a.c(),a.m(u,null))),d&4&&!ce(p.src,y=o[2])&&L(p,"src",y),d&8&&L(p,"alt",o[3])},d(o){o&&(_(e),_(f),_(m)),a.d(),h=!1,v()}}}function Gt(s){let e;return{c(){e=B("Join the movement!")},l(t){e=J(t,"Join the movement!")},m(t,n){O(t,e,n)},p:P,d(t){t&&_(e)}}}function Xt(s){let e,t;return{c(){e=B("Disconnect "),t=B(s[5])},l(n){e=J(n,"Disconnect "),t=J(n,s[5])},m(n,i){O(n,e,i),O(n,t,i)},p(n,i){i&32&&be(t,n[5])},d(n){n&&(_(e),_(t))}}}function Ut(s){let e;return{c(){e=B("Join the movement!")},l(t){e=J(t,"Join the movement!")},m(t,n){O(t,e,n)},p:P,d(t){t&&_(e)}}}function Kt(s){let e,t;return{c(){e=B("Disconnect "),t=B(s[5])},l(n){e=J(n,"Disconnect "),t=J(n,s[5])},m(n,i){O(n,e,i),O(n,t,i)},p(n,i){i&32&&be(t,n[5])},d(n){n&&(_(e),_(t))}}}function Qt(s){let e,t,n;function i(c,u){return c[4]?Jt:Bt}let r=i(s),l=r(s);return{c(){e=k("article"),t=k("div"),n=k("div"),l.c(),this.h()},l(c){e=E(c,"ARTICLE",{class:!0});var u=D(e);t=E(u,"DIV",{class:!0});var f=D(t);n=E(f,"DIV",{class:!0});var m=D(n);l.l(m),m.forEach(_),f.forEach(_),u.forEach(_),this.h()},h(){L(n,"class","grid svelte-1ppa0fb"),L(t,"class","container"),L(e,"class","feature")},m(c,u){O(c,e,u),T(e,t),T(t,n),l.m(n,null)},p(c,[u]){r===(r=i(c))&&l?l.p(c,u):(l.d(1),l=r(c),l&&(l.c(),l.m(n,null)))},i:P,o:P,d(c){c&&_(e),l.d()}}}function Zt(s,e,t){let n,i,r;Z(s,ut,h=>t(9,n=h)),Z(s,dt,h=>t(6,i=h)),Z(s,mt,h=>t(8,r=h));let{title:l=""}=e,{description:c=""}=e,{imageSrc:u=""}=e,{imageAlt:f=""}=e,{imageRight:m=!1}=e,p="";async function y(){i?await ht():n.open()}return s.$$set=h=>{"title"in h&&t(0,l=h.title),"description"in h&&t(1,c=h.description),"imageSrc"in h&&t(2,u=h.imageSrc),"imageAlt"in h&&t(3,f=h.imageAlt),"imageRight"in h&&t(4,m=h.imageRight)},s.$$.update=()=>{if(s.$$.dirty&256&&r&&typeof r=="string"){const h=r.substring(2,6),v=r.slice(-4);t(5,p=`${h}...${v}`)}},[l,c,u,f,m,p,i,y,r]}class es extends U{constructor(e){super(),K(this,e,Zt,Qt,X,{title:0,description:1,imageSrc:2,imageAlt:3,imageRight:4})}}function ts(s){let e,t='<div class="container"><article class="hamstrump-talking svelte-tyopgq"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump is on your side!</p> <img src="./Imtalkingtoyou.png" alt="You talking to me ?" class="centered-image svelte-tyopgq"/></article></div>';return{c(){e=k("section"),e.innerHTML=t,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),W(e)!=="svelte-1vdiqly"&&(e.innerHTML=t),this.h()},h(){L(e,"id","tuned")},m(n,i){O(n,e,i)},p:P,i:P,o:P,d(n){n&&_(e)}}}class ss extends U{constructor(e){super(),K(this,e,null,ts,X,{})}}function ns(s){let e,t='<div class="container"><article class="world svelte-4g0lzk"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump World</p> <p class="hamstrump-var2">Once upon a time in Tickertown, there dwelled a legendary creature named Hamstrump. Imagine this: part adorable hamster, part fierce tycoon. Pow! There stands Hamstrump, ruler of the roost!</p> <p class="hamstrump-var2">Hamstrump adored lounging, nibbling on caviar (and sunflower seeds, of course). One fine day, amidst tweeting and spinning on his exercise wheel, he struck gold: Hamstrump Token! A magical currency for those who prefer chilling over flipping burgers.</p> <p class="hamstrump-var2">Soon enough, Hamstrump became a legend. With his charming rodent grin and billionaire swagger, he showed everyone that you could rake in the dough by letting the money printer go brrr. His followers cashed in while kicking back, proving that sometimes, the road to riches is paved with memes and epic parties. &quot;Get on the rocket now or cry over your lost fortune later! Don&#39;t sleep on $Hamstrump!s</p></article></div>';return{c(){e=k("section"),e.innerHTML=t,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),W(e)!=="svelte-5szxw"&&(e.innerHTML=t),this.h()},h(){L(e,"id","utility")},m(n,i){O(n,e,i)},p:P,i:P,o:P,d(n){n&&_(e)}}}class rs extends U{constructor(e){super(),K(this,e,null,ns,X,{})}}function is(s){let e,t=`<article><div class="grid"><div><article class="card svelte-v4andg"><img src="./constitution.jpg" alt="constitution" class="roadmap-img svelte-v4andg"/> <div class="hamstrump-var">Day 1</div> <div>Launch of $Hamstrump on Solana with heavy presale limits (200 SOL per wallet).</div></article></div> <div><article class="card svelte-v4andg"><img src="./juniorworker.jpg" alt="Junior Hams" class="roadmap-img svelte-v4andg"/> <div class="hamstrump-var">Day 2 to 20</div> <div>DEX listing: List $Hamstrump on decentralized exchanges.

                        CEX listing: List $Hamstrump on centralized exchanges.
                        
                        Marketing and communiction: establish strong partnerships with Solana ecosystem.
                        
                        CMC &amp; Coinguecko: Listing on CMC and Coinguecko.</div></article></div></div> <div class="grid"><div><article class="card svelte-v4andg"><img src="./constitution.jpg" alt="constitution" class="roadmap-img svelte-v4andg"/> <div class="hamstrump-var">Day 1</div> <div>Launch of $Hamstrump on Solana with heavy presale limits (200 SOL per wallet).</div></article></div> <div><article class="card svelte-v4andg"><img src="./juniorworker.jpg" alt="Junior Hams" class="roadmap-img svelte-v4andg"/> <div class="hamstrump-var">Day 2 to 20</div> <div>DEX listing: List $Hamstrump on decentralized exchanges.

                        CEX listing: List $Hamstrump on centralized exchanges.
                        
                        Marketing and communiction: establish strong partnerships with Solana ecosystem.
                        
                        CMC &amp; Coinguecko: Listing on CMC and Coinguecko.</div></article></div></div></article>`;return{c(){e=k("section"),e.innerHTML=t,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),W(e)!=="svelte-x866nv"&&(e.innerHTML=t),this.h()},h(){L(e,"id","roadmap")},m(n,i){O(n,e,i)},p:P,i:P,o:P,d(n){n&&_(e)}}}class ls extends U{constructor(e){super(),K(this,e,null,is,X,{})}}function $e(s,e,t){const n=s.slice();return n[1]=e[t],n}function Re(s){let e,t,n=s[1].label+"",i,r,l,c=s[1].percentage+"",u,f,m;return{c(){e=k("div"),t=k("span"),i=B(n),r=N(),l=k("span"),u=B(c),f=B("%"),m=N(),this.h()},l(p){e=E(p,"DIV",{class:!0,style:!0});var y=D(e);t=E(y,"SPAN",{class:!0});var h=D(t);i=J(h,n),h.forEach(_),r=$(y),l=E(y,"SPAN",{class:!0});var v=D(l);u=J(v,c),f=J(v,"%"),v.forEach(_),m=$(y),y.forEach(_),this.h()},h(){L(t,"class","label svelte-km545t"),L(l,"class","percentage svelte-km545t"),L(e,"class","tokenomics-item"),M(e,"background-color",s[1].color)},m(p,y){O(p,e,y),T(e,t),T(t,i),T(e,r),T(e,l),T(l,u),T(l,f),T(e,m)},p:P,d(p){p&&_(e)}}}function as(s){let e,t,n,i,r="Trumpenomics",l,c,u='<img src="./hamscenat.png" alt="Hamscenat" sizes="(max-width: 768px) 100vw, 50vw"/>',f,m,p=me(s[0]),y=[];for(let h=0;h<p.length;h+=1)y[h]=Re($e(s,p,h));return{c(){e=k("section"),t=k("article"),n=k("div"),i=k("h2"),i.textContent=r,l=N(),c=k("div"),c.innerHTML=u,f=N(),m=k("div");for(let h=0;h<y.length;h+=1)y[h].c();this.h()},l(h){e=E(h,"SECTION",{id:!0});var v=D(e);t=E(v,"ARTICLE",{class:!0});var g=D(t);n=E(g,"DIV",{class:!0});var S=D(n);i=E(S,"H2",{style:!0,"data-svelte-h":!0}),W(i)!=="svelte-1j16sxb"&&(i.textContent=r),l=$(S),c=E(S,"DIV",{class:!0,"data-svelte-h":!0}),W(c)!=="svelte-t1mtxq"&&(c.innerHTML=u),f=$(S),m=E(S,"DIV",{class:!0});var a=D(m);for(let o=0;o<y.length;o+=1)y[o].l(a);a.forEach(_),S.forEach(_),g.forEach(_),v.forEach(_),this.h()},h(){M(i,"font-family","CoffeeSpark"),L(c,"class","senate-chart"),L(m,"class","tokenomics-grid"),L(n,"class","container"),L(t,"class","feature trumpenomics"),L(e,"id","roadmap")},m(h,v){O(h,e,v),T(e,t),T(t,n),T(n,i),T(n,l),T(n,c),T(n,f),T(n,m);for(let g=0;g<y.length;g+=1)y[g]&&y[g].m(m,null)},p(h,[v]){if(v&1){p=me(h[0]);let g;for(g=0;g<p.length;g+=1){const S=$e(h,p,g);y[g]?y[g].p(S,v):(y[g]=Re(S),y[g].c(),y[g].m(m,null))}for(;g<y.length;g+=1)y[g].d(1);y.length=p.length}},i:P,o:P,d(h){h&&_(e),Ce(y,h)}}}function os(s){return[[{label:"Presale",percentage:45,color:"#B31942"},{label:"Liquidity Pool",percentage:35,color:"#FFA3BB"},{label:"Reserve",percentage:10,color:"#FFB21D"},{label:"Early investor",percentage:5,color:"#68ACFF"},{label:"Team",percentage:5,color:"#0A3161"}]]}class cs extends U{constructor(e){super(),K(this,e,os,as,X,{})}}function fs(s){let e,t="<h2>Program</h2>";return{c(){e=k("section"),e.innerHTML=t,this.h()},l(n){e=E(n,"SECTION",{id:!0,"data-svelte-h":!0}),W(e)!=="svelte-9s2s2i"&&(e.innerHTML=t),this.h()},h(){L(e,"id","about")},m(n,i){O(n,e,i)},p:P,i:P,o:P,d(n){n&&_(e)}}}class us extends U{constructor(e){super(),K(this,e,null,fs,X,{})}}function je(s,e,t){const n=s.slice();return n[1]=e[t],n[3]=t,n}function qe(s){let e,t;const n=[s[1],{imageRight:s[3]%2===1}];let i={};for(let r=0;r<n.length;r+=1)i=oe(i,n[r]);return e=new es({props:i}),{c(){q(e.$$.fragment)},l(r){z(e.$$.fragment,r)},m(r,l){F(e,r,l),t=!0},p(r,l){const c=l&1?Oe(n,[gt(r[1]),n[1]]):{};e.$set(c)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){Y(e,r)}}}function ds(s){let e,t,n,i,r,l,c,u,f,m,p,y,h,v,g,S,a;t=new xt({}),i=new Vt({});let o=me(s[0]),d=[];for(let w=0;w<o.length;w+=1)d[w]=qe(je(s,o,w));const A=w=>j(d[w],1,1,()=>{d[w]=null});return u=new ls({}),m=new ss({}),y=new cs({}),v=new us({}),S=new rs({}),{c(){e=k("main"),q(t.$$.fragment),n=N(),q(i.$$.fragment),r=N(),l=k("section");for(let w=0;w<d.length;w+=1)d[w].c();c=N(),q(u.$$.fragment),f=N(),q(m.$$.fragment),p=N(),q(y.$$.fragment),h=N(),q(v.$$.fragment),g=N(),q(S.$$.fragment),this.h()},l(w){e=E(w,"MAIN",{class:!0});var b=D(e);z(t.$$.fragment,b),n=$(b),z(i.$$.fragment,b),r=$(b),l=E(b,"SECTION",{id:!0});var H=D(l);for(let I=0;I<d.length;I+=1)d[I].l(H);H.forEach(_),c=$(b),z(u.$$.fragment,b),f=$(b),z(m.$$.fragment,b),p=$(b),z(y.$$.fragment,b),h=$(b),z(v.$$.fragment,b),g=$(b),z(S.$$.fragment,b),b.forEach(_),this.h()},h(){L(l,"id","features"),L(e,"class","container svelte-z2adgy")},m(w,b){O(w,e,b),F(t,e,null),T(e,n),F(i,e,null),T(e,r),T(e,l);for(let H=0;H<d.length;H+=1)d[H]&&d[H].m(l,null);T(e,c),F(u,e,null),T(e,f),F(m,e,null),T(e,p),F(y,e,null),T(e,h),F(v,e,null),T(e,g),F(S,e,null),a=!0},p(w,[b]){if(b&1){o=me(w[0]);let H;for(H=0;H<o.length;H+=1){const I=je(w,o,H);d[H]?(d[H].p(I,b),R(d[H],1)):(d[H]=qe(I),d[H].c(),R(d[H],1),d[H].m(l,null))}for(Be(),H=o.length;H<d.length;H+=1)A(H);Je()}},i(w){if(!a){R(t.$$.fragment,w),R(i.$$.fragment,w);for(let b=0;b<o.length;b+=1)R(d[b]);R(u.$$.fragment,w),R(m.$$.fragment,w),R(y.$$.fragment,w),R(v.$$.fragment,w),R(S.$$.fragment,w),a=!0}},o(w){j(t.$$.fragment,w),j(i.$$.fragment,w),d=d.filter(Boolean);for(let b=0;b<d.length;b+=1)j(d[b]);j(u.$$.fragment,w),j(m.$$.fragment,w),j(y.$$.fragment,w),j(v.$$.fragment,w),j(S.$$.fragment,w),a=!1},d(w){w&&_(e),Y(t),Y(i),Ce(d,w),Y(u),Y(m),Y(y),Y(v),Y(S)}}}function ms(s){return[[{title:"Build The Wall",description:"Otters crossing our South border have become a serious menace for our hamster society! We CANNOT let them enter our glorious country indefinitely.<span class='highlight'>We will burn 2% on each transaction</span> to sustain our efforts in the building of a massive wall, preventing otters crossing the border!",imageSrc:"./notawall.jpg",imageAlt:"HamsFloyd"},{title:"Executive Order",description:"Being part of the Hamster society SHOULD grant you the right to trigger executive orders!<span class='highlight'> Stake your tokens</span> as a signing commitment, Hamstrump executive team will not forget you.",imageSrc:"./trustmeitsreal.png",imageAlt:"hamsworker"},{title:"Trickle-Down Tokenomics",description:"Billionaires and millionaires built this country with outstanding investment and dedication in the hamster industry! The trickle-down theory is real,<span class='highlight'> since 1% of all transactions go to $Hamstrump holders</span>.",imageSrc:"./cashbackham.png",imageAlt:"Give me your money"},{title:"The Art of the Deal",description:"Hamster citizens MUST be protected from money devaluation at ALL COSTS! We will pass a bill forcing the National Gold Reserve to <span class='highlight'>buy back tokens to maintain a stable price</span> of $Hamstrump!",imageSrc:"./cashbackham.jpg",imageAlt:"give me gold human"},{title:"Fake News Detector",description:"Fake news is corrupting society. Now that the Deep State has taken control of the media, they need to be regulated. We will put in place a <span class='highlight'> system of governance</span> that puts Hamsters at the heart of this regulation!",imageSrc:"./SireneGirl.png",imageAlt:"hey babe come back later"}]]}class ys extends U{constructor(e){super(),K(this,e,ms,ds,X,{})}}export{ys as component};
