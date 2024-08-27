import{n as P,s as $,h as Te,u as Ve,y as oe,v as Ye,w as Be,x as Ge,r as ct,z as ve,c as Z,A as ft,o as Ce,B as Je,d as Xe,C as ut,D as ae}from"../chunks/scheduler.CUgGpP8_.js";import{S as ee,i as te,e as S,c as L,a as M,d as b,C as _e,A as ye,g as D,y as fe,n as F,l as R,u as B,v as G,o as H,h as E,w as J,x as X,s as j,k as Ae,f as N,q as Ue,m as Ke,B as Oe,t as U,z as x,b as K,p as I,H as Qe,D as Ze,j as be}from"../chunks/index.SAq3QukI.js";import{bg as de,bm as dt,bc as mt,bd as ht,be as pt}from"../chunks/wagmi.BlBTkmTU.js";import{w as me,d as gt}from"../chunks/index.DZGC9Yfu.js";const xe=typeof window<"u";let ke=xe?()=>window.performance.now():()=>Date.now(),$e=xe?t=>requestAnimationFrame(t):P;const ue=new Set;function et(t){ue.forEach(e=>{e.c(t)||(ue.delete(e),e.f())}),ue.size!==0&&$e(et)}function tt(t){let e;return ue.size===0&&$e(et),{promise:new Promise(s=>{ue.add(e={c:t,f:s})}),abort(){ue.delete(e)}}}const st=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Me(t,e){const s={},n={},l={$$scope:1};let r=t.length;for(;r--;){const i=t[r],d=e[r];if(d){for(const f in i)f in d||(n[f]=1);for(const f in d)l[f]||(s[f]=d[f],l[f]=1);t[r]=d}else for(const f in i)l[f]=1}for(const i in n)i in s||(s[i]=void 0);return s}function vt(t){return typeof t=="object"&&t!==null?t:{}}function De(t){return Object.prototype.toString.call(t)==="[object Date]"}function Ee(t,e,s,n){if(typeof s=="number"||De(s)){const l=n-s,r=(s-e)/(t.dt||1/60),i=t.opts.stiffness*l,d=t.opts.damping*r,f=(i-d)*t.inv_mass,u=(r+f)*t.dt;return Math.abs(u)<t.opts.precision&&Math.abs(l)<t.opts.precision?n:(t.settled=!1,De(s)?new Date(s.getTime()+u):s+u)}else{if(Array.isArray(s))return s.map((l,r)=>Ee(t,e[r],s[r],n[r]));if(typeof s=="object"){const l={};for(const r in s)l[r]=Ee(t,e[r],s[r],n[r]);return l}else throw new Error(`Cannot spring ${typeof s} values`)}}function He(t,e={}){const s=me(t),{stiffness:n=.15,damping:l=.8,precision:r=.01}=e;let i,d,f,u=t,c=t,p=1,o=0,a=!1;function m(g,T={}){c=g;const v=f={};return t==null||T.hard||_.stiffness>=1&&_.damping>=1?(a=!0,i=ke(),u=g,s.set(t=c),Promise.resolve()):(T.soft&&(o=1/((T.soft===!0?.5:+T.soft)*60),p=0),d||(i=ke(),a=!1,d=tt(h=>{if(a)return a=!1,d=null,!1;p=Math.min(p+o,1);const O={inv_mass:p,opts:_,settled:!0,dt:(h-i)*60/1e3},w=Ee(O,u,t,c);return i=h,u=t,s.set(t=w),O.settled&&(d=null),!O.settled})),new Promise(h=>{d.promise.then(()=>{v===f&&h()})}))}const _={set:m,update:(g,T)=>m(g(c,t),T),subscribe:s.subscribe,stiffness:n,damping:l,precision:r};return _}function _t(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function yt(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function bt(t=new Set){const e=me(t),s=n=>(...l)=>{let r;return e.update(i=>(r=i[n](...l),i)),r};return{...e,add:s("add"),delete:s("delete")}}const nt={},Se=(t,e,s)=>t<e?e:t>s?s:t;let rt=!1;try{let t=Object.defineProperty({},"passive",{get:function(){rt=!0}});window.addEventListener("test",null,t)}catch{}const Q={$(t){return typeof t=="string"?document.querySelector(t):t},extend(...t){return Object.assign(...t)},addListeners(t,e,s,n={passive:!1}){e instanceof Array||(e=[e]);for(let l=0;l<e.length;l++)t.addEventListener(e[l],s,rt?n:!1)},removeListeners(t,e,s){e instanceof Array||(e=[e]);for(let n=0;n<e.length;n++)t.removeEventListener(e[n],s)},cumulativeOffset(t){let e=0,s=0;do e+=t.offsetTop||0,s+=t.offsetLeft||0,t=t.offsetParent;while(t);return{top:e,left:s}},directScroll(t){return t&&t!==document&&t!==document.body},scrollTop(t,e){let s=e!==void 0;return this.directScroll(t)?s?t.scrollTop=e:t.scrollTop:s?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,e){let s=e!==void 0;return this.directScroll(t)?s?t.scrollLeft=e:t.scrollLeft:s?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},wt={container:"body",duration:500,delay:0,offset:0,easing:_t,onStart:P,onDone:P,onAborting:P,scrollX:!1,scrollY:!0},Ie=["mousedown","wheel","DOMMouseScroll","mousewheel","keydown","touchmove"],Tt=t=>{let{offset:e,duration:s,delay:n,easing:l,x:r=0,y:i=0,scrollX:d,scrollY:f,onStart:u,onDone:c,container:p,onAborting:o,element:a}=t;typeof e=="function"&&(e=e());const m=Q.cumulativeOffset(p),_=a?Q.cumulativeOffset(a):{top:i,left:r},g=Q.scrollLeft(p),T=Q.scrollTop(p),v=_.left-m.left+e,h=_.top-m.top+e,O=v-g,w=h-T;let y=!0,k=!1,A=ke()+n,Y=A+s;function V(z,ie,le){d&&Q.scrollLeft(z,le),f&&Q.scrollTop(z,ie)}function se(z){z||(k=!0,u(a,{x:r,y:i})),Q.addListeners(p,Ie,q,{passive:!0})}function W(z){V(p,T+w*z,g+O*z)}function q(){y=!1,Q.removeListeners(p,Ie,q)}return tt(z=>{if(!k&&z>=A&&se(!1),k&&z>=Y)return W(1),q(),c(a,{x:r,y:i}),!1;if(!y)return o(a,{x:r,y:i}),!1;if(k){const ie=z-A,le=0+1*l(ie/s);W(le)}return!0}),se(n),W(0),q},kt=t=>{let e=Q.extend({},wt,t);return e.container=Q.$(e.container),e.element=Q.$(e.element),e},Et=t=>Tt(kt(t));(function(){if(!(typeof window>"u"||typeof document>"u"||typeof HTMLElement>"u")){var t=!1;try{var e=document.createElement("div");e.addEventListener("focus",function(r){r.preventDefault(),r.stopPropagation()},!0),e.focus(Object.defineProperty({},"preventScroll",{get:function(){if(navigator&&typeof navigator.userAgent<"u"&&navigator.userAgent&&navigator.userAgent.match(/Edge\/1[7-8]/))return t=!1;t=!0}}))}catch{}if(HTMLElement.prototype.nativeFocus===void 0&&!t){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;var s=function(r){for(var i=r.parentNode,d=[],f=document.scrollingElement||document.documentElement;i&&i!==f;)(i.offsetHeight<i.scrollHeight||i.offsetWidth<i.scrollWidth)&&d.push([i,i.scrollTop,i.scrollLeft]),i=i.parentNode;return i=f,d.push([i,i.scrollTop,i.scrollLeft]),d},n=function(r){for(var i=0;i<r.length;i++)r[i][0].scrollTop=r[i][1],r[i][0].scrollLeft=r[i][2];r=[]},l=function(r){if(r&&r.preventScroll){var i=s(this);if(typeof setTimeout=="function"){var d=this;setTimeout(function(){d.nativeFocus(),n(i)},0)}else this.nativeFocus(),n(i)}else this.nativeFocus()};HTMLElement.prototype.focus=l}}})();const{scrollTo:Ht,setTimeout:Pe,window:ce}=st;function St(t){let e=!1,s=()=>{e=!1},n,l,r,i,d,f,u;Te(t[26]),Te(t[27]);const c=t[24].default,p=Ve(c,t,t[23],null);let o=[t[12],{class:r="parallax-container "+(t[12].class?t[12].class:"")},{style:i="height: "+t[1]*t[0]+"px; "+(t[12].style?t[12].style:"")+";"}],a={};for(let m=0;m<o.length;m+=1)a=oe(a,o[m]);return{c(){l=S("div"),p&&p.c(),this.h()},l(m){l=L(m,"DIV",{class:!0,style:!0});var _=M(l);p&&p.l(_),_.forEach(b),this.h()},h(){_e(l,a),ye(l,"svelte-15ph2c6",!0)},m(m,_){D(m,l,_),p&&p.m(l,null),t[28](l),d=!0,f||(u=[fe(ce,"resize",t[25]),fe(ce,"scroll",()=>{e=!0,clearTimeout(n),n=Pe(s,100),t[26]()}),fe(ce,"resize",t[27])],f=!0)},p(m,[_]){_&16&&!e&&(e=!0,clearTimeout(n),Ht(ce.pageXOffset,m[4]),n=Pe(s,100)),p&&p.p&&(!d||_&8388608)&&Ye(p,c,m,m[23],d?Ge(c,m[23],_,null):Be(m[23]),null),_e(l,a=Me(o,[_&4096&&m[12],(!d||_&4096&&r!==(r="parallax-container "+(m[12].class?m[12].class:"")))&&{class:r},(!d||_&4099&&i!==(i="height: "+m[1]*m[0]+"px; "+(m[12].style?m[12].style:"")+";"))&&{style:i}])),ye(l,"svelte-15ph2c6",!0)},i(m){d||(F(p,m),d=!0)},o(m){R(p,m),d=!1},d(m){m&&b(l),p&&p.d(m),t[28](null),f=!1,ct(u)}}}function Lt(t,e,s){const n=["sections","sectionHeight","config","threshold","onProgress","onScroll","disabled","scrollTo"];let l=ve(e,n),r,i,d,f,u,c,{$$slots:p={},$$scope:o}=e,a,m,{sections:_=1}=e,{sectionHeight:g=void 0}=e,{config:T={stiffness:.017,damping:.26}}=e,{threshold:v={top:1,bottom:1}}=e,{onProgress:h=void 0}=e,{onScroll:O=void 0}=e,{disabled:w=!1}=e;const y=me(0);Z(t,y,C=>s(4,c=C));const k=me(0);Z(t,k,C=>s(29,i=C));const A=me(0);Z(t,A,C=>s(1,r=C));const Y=He(void 0,{...T,precision:.001});Z(t,Y,C=>s(22,u=C));const V=gt([y,k,A],([C,ne,re],we)=>{const he=C-ne,pe=0-re+re*v.top,ot=re*_-re*v.bottom,at=Se(he,pe,ot);we(at)});Z(t,V,C=>s(20,d=C));const se=(C,ne)=>{if(ne===0){Y.set(0);return}const re=ne*_-ne;Y.set(Se(C/re,0,1))},W=bt(new Set);Z(t,W,C=>s(21,f=C)),ft(nt,{config:T,addLayer:C=>{W.add(C)},removeLayer:C=>{W.delete(C)}}),Ce(()=>{q()});const q=()=>{A.set(g||m),k.set(a.getBoundingClientRect().top+window.pageYOffset)};function z(C,{selector:ne="",duration:re=500,easing:we=yt}={}){const he=i+r*(C-1),pe=()=>{document.querySelector(ne).focus({preventScroll:!0})};if(w){window.scrollTo({top:he}),ne&&pe();return}Et({y:he,duration:re,easing:we,onDone:ne?pe:()=>{}})}const ie=()=>setTimeout(q,0);function le(){y.set(c=ce.pageYOffset)}function it(){s(3,m=ce.innerHeight)}function lt(C){Xe[C?"unshift":"push"](()=>{a=C,s(2,a)})}return t.$$set=C=>{e=oe(oe({},e),Je(C)),s(12,l=ve(e,n)),"sections"in C&&s(0,_=C.sections),"sectionHeight"in C&&s(13,g=C.sectionHeight),"config"in C&&s(14,T=C.config),"threshold"in C&&s(15,v=C.threshold),"onProgress"in C&&s(16,h=C.onProgress),"onScroll"in C&&s(17,O=C.onScroll),"disabled"in C&&s(18,w=C.disabled),"$$scope"in C&&s(23,o=C.$$scope)},t.$$.update=()=>{t.$$.dirty&1179648&&O&&O(d),t.$$.dirty&1114114&&h&&se(d,r),t.$$.dirty&4259840&&h&&h(u??0),t.$$.dirty&2097154&&f.forEach(C=>{C.setHeight(r)}),t.$$.dirty&3407874&&f.forEach(C=>{C.setPosition(d,r,w)}),t.$$.dirty&8194&&r!==0&&q()},[_,r,a,m,c,y,k,A,Y,V,W,q,l,g,T,v,h,O,w,z,d,f,u,o,p,ie,le,it,lt]}class Ct extends ee{constructor(e){super(),te(this,e,Lt,St,$,{sections:0,sectionHeight:13,config:14,threshold:15,onProgress:16,onScroll:17,disabled:18,scrollTo:19})}get scrollTo(){return this.$$.ctx[19]}}const Ot=t=>({progress:t&1}),je=t=>({progress:t[0]});function Mt(t){let e,s,n,l;const r=t[12].default,i=Ve(r,t,t[11],je);let d=[t[5],{class:s="parallax-layer "+(t[5].class?t[5].class:"")},{style:n=""+(t[5].style?t[5].style:"")+"; height: "+t[1]+"px; -ms-transform: "+t[2]+"; -webkit-transform: "+t[2]+"; transform: "+t[2]+";"}],f={};for(let u=0;u<d.length;u+=1)f=oe(f,d[u]);return{c(){e=S("div"),i&&i.c(),this.h()},l(u){e=L(u,"DIV",{class:!0,style:!0});var c=M(e);i&&i.l(c),c.forEach(b),this.h()},h(){_e(e,f),ye(e,"svelte-qcp0z5",!0)},m(u,c){D(u,e,c),i&&i.m(e,null),l=!0},p(u,[c]){i&&i.p&&(!l||c&2049)&&Ye(i,r,u,u[11],l?Ge(r,u[11],c,Ot):Be(u[11]),je),_e(e,f=Me(d,[c&32&&u[5],(!l||c&32&&s!==(s="parallax-layer "+(u[5].class?u[5].class:"")))&&{class:s},(!l||c&38&&n!==(n=""+(u[5].style?u[5].style:"")+"; height: "+u[1]+"px; -ms-transform: "+u[2]+"; -webkit-transform: "+u[2]+"; transform: "+u[2]+";"))&&{style:n}])),ye(e,"svelte-qcp0z5",!0)},i(u){l||(F(i,u),l=!0)},o(u){R(i,u),l=!1},d(u){u&&b(e),i&&i.d(u)}}}function At(t,e,s){let n;const l=["rate","offset","span","onProgress"];let r=ve(e,l),i,d,{$$slots:f={},$$scope:u}=e,{rate:c=.5}=e,{offset:p=0}=e,{span:o=1}=e,{onProgress:a=void 0}=e;const{config:m,addLayer:_,removeLayer:g}=ut(nt),T=He(void 0,m);Z(t,T,y=>s(10,d=y));const v=He(void 0,{...m,precision:.001});Z(t,v,y=>s(0,i=y));let h;const O={setPosition:(y,k,A)=>{if(A){T.set(p*k,{hard:!0});return}const Y=Math.floor(p)*k,V=p*k+Y*c;T.set(-(y*c)+V),v.set(w(y,c,V,k))},setHeight:y=>{s(1,h=o*y)}},w=(y,k,A,Y)=>{const V=k+1,se=A/V,W=k>=0?1:-1,q=Y/V*W,z=se-q,ie=se+q*o,le=(y-z)/(ie-z);return Se(le,0,1)};return Ce(()=>(_(O),()=>{g(O)})),t.$$set=y=>{e=oe(oe({},e),Je(y)),s(5,r=ve(e,l)),"rate"in y&&s(6,c=y.rate),"offset"in y&&s(7,p=y.offset),"span"in y&&s(8,o=y.span),"onProgress"in y&&s(9,a=y.onProgress),"$$scope"in y&&s(11,u=y.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&s(2,n=`translate3d(0px, ${d}px, 0px);`),t.$$.dirty&513&&a&&a(i??0)},[i,h,n,T,v,r,c,p,o,a,d,u,f]}class ge extends ee{constructor(e){super(),te(this,e,At,Mt,$,{rate:6,offset:7,span:8,onProgress:9})}}const{window:Le}=st;function Ne(t,e,s){const n=t.slice();return n[17]=e[s],n}function Dt(t){let e,s,n,l,r="Hams",i,d="trump",f,u,c,p,o,a,m,_,g,T="Donald J. Hamstrump",v,h,O,w,y="Donald J. Hamstrump";return{c(){e=S("div"),s=S("div"),n=S("h1"),l=S("span"),l.textContent=r,i=S("span"),i.textContent=d,f=j(),u=S("div"),c=S("img"),o=j(),a=S("div"),m=S("p"),_=U(`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
              `),g=S("span"),g.textContent=T,v=j(),h=S("p"),O=U(`"Hamstrump is filthy rich and lives by the creed: 'Less grind, more laughs, more cash. Jump in, live large, and chill hard.' With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!"\r
              `),w=S("span"),w.textContent=y,this.h()},l(k){e=L(k,"DIV",{class:!0});var A=M(e);s=L(A,"DIV",{class:!0});var Y=M(s);n=L(Y,"H1",{class:!0,style:!0});var V=M(n);l=L(V,"SPAN",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-m2nqwl"&&(l.textContent=r),i=L(V,"SPAN",{class:!0,"data-svelte-h":!0}),x(i)!=="svelte-hpyklh"&&(i.textContent=d),V.forEach(b),Y.forEach(b),f=N(A),u=L(A,"DIV",{class:!0,style:!0});var se=M(u);c=L(se,"IMG",{src:!0,alt:!0,class:!0}),se.forEach(b),o=N(A),a=L(A,"DIV",{class:!0});var W=M(a);m=L(W,"P",{class:!0,style:!0});var q=M(m);_=K(q,`"THEY'RE NOT AFTER MEMECOINS, THEY'RE AFTER YOUR PORTFOLIO…I'M JUST STANDING IN THE WAY!"\r
              `),g=L(q,"SPAN",{class:!0,"data-svelte-h":!0}),x(g)!=="svelte-1j4h5h8"&&(g.textContent=T),q.forEach(b),v=N(W),h=L(W,"P",{class:!0,style:!0});var z=M(h);O=K(z,`"Hamstrump is filthy rich and lives by the creed: 'Less grind, more laughs, more cash. Jump in, live large, and chill hard.' With Hamstrump, swim in money without breaking a sweat. Kick back and let him handle your financial freedom!"\r
              `),w=L(z,"SPAN",{class:!0,"data-svelte-h":!0}),x(w)!=="svelte-1j4h5h8"&&(w.textContent=y),z.forEach(b),W.forEach(b),A.forEach(b),this.h()},h(){H(l,"class","hams"),H(i,"class","trump"),H(n,"class","hamstrump-title"),I(n,"opacity",t[8]),H(s,"class","hamstrump-content svelte-djxjow"),ae(c.src,p="./barbatrump.png")||H(c,"src",p),H(c,"alt","Barbatrump"),H(c,"class","w-full h-full object-contain"),H(u,"class","barbatrump-container svelte-djxjow"),I(u,"width",t[2]?"60%":"37%"),I(u,"transform","scale("+t[4]+")"),I(u,"transition","transform 0.7s ease"),H(g,"class","quote-author"),H(m,"class","hamstrump-quote initial-quote"),I(m,"opacity",t[7]),H(w,"class","quote-author"),H(h,"class","hamstrump-quote secondary-quote"),I(h,"opacity",1-t[7]),H(a,"class","hamstrump-quotes-container svelte-djxjow"),H(e,"class","content-wrapper svelte-djxjow")},m(k,A){D(k,e,A),E(e,s),E(s,n),E(n,l),E(n,i),E(e,f),E(e,u),E(u,c),E(e,o),E(e,a),E(a,m),E(m,_),E(m,g),E(a,v),E(a,h),E(h,O),E(h,w)},p(k,A){A&256&&I(n,"opacity",k[8]),A&4&&I(u,"width",k[2]?"60%":"37%"),A&16&&I(u,"transform","scale("+k[4]+")"),A&128&&I(m,"opacity",k[7]),A&128&&I(h,"opacity",1-k[7])},d(k){k&&b(e)}}}function It(t){let e,s,n;return{c(){e=S("div"),s=S("img"),this.h()},l(l){e=L(l,"DIV",{style:!0});var r=M(e);s=L(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(b),this.h()},h(){ae(s.src,n="./whitehouse.png")||H(s,"src",n),H(s,"alt","Whitehouse"),H(s,"class","w-full h-full object-cover object-bottom"),I(e,"width","100%"),I(e,"height","100%"),I(e,"opacity",t[6]),I(e,"clip-path","circle("+t[6]*150+"% at 50% 100%)")},m(l,r){D(l,e,r),E(e,s)},p(l,r){r&64&&I(e,"opacity",l[6]),r&64&&I(e,"clip-path","circle("+l[6]*150+"% at 50% 100%)")},d(l){l&&b(e)}}}function Pt(t){let e,s,n,l;return{c(){e=S("div"),s=S("img"),l=j(),this.h()},l(r){e=L(r,"DIV",{style:!0});var i=M(e);s=L(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(b),l=N(r),this.h()},h(){ae(s.src,n="./dollar-bill.webp")||H(s,"src",n),H(s,"alt","Dollar Bills"),H(s,"class","w-full h-auto"),I(e,"opacity",t[5]),I(e,"width",t[2]?"40%":"25%"),I(e,"transform","translateX("+(t[17]==="left"?"-30%":"30%")+")")},m(r,i){D(r,e,i),E(e,s),D(r,l,i)},p(r,i){i&32&&I(e,"opacity",r[5]),i&4&&I(e,"width",r[2]?"40%":"25%")},d(r){r&&(b(e),b(l))}}}function Fe(t){let e,s;return e=new ge({props:{rate:t[2]?t[17]==="left"?-.8:.8:t[17]==="left"?-.9:.9,offset:t[9],style:"z-index: 5; display: flex; justify-content: "+(t[17]==="left"?"flex-start":"flex-end")+"; align-items: center;",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,l){J(e,n,l),s=!0},p(n,l){const r={};l&4&&(r.rate=n[2]?n[17]==="left"?-.8:.8:n[17]==="left"?-.9:.9),l&512&&(r.offset=n[9]),l&1048612&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){s||(F(e.$$.fragment,n),s=!0)},o(n){R(e.$$.fragment,n),s=!1},d(n){X(e,n)}}}function jt(t){let e,s,n,l,r,i,d,f;e=new ge({props:{rate:0,style:"background-color: white; z-index: 1;"}}),n=new ge({props:{rate:t[12],offset:t[11],style:"z-index: 4; display: flex; justify-content: center; align-items: center; pointer-events: none;",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),r=new ge({props:{rate:.5,offset:t[10],style:"z-index: 2; display: flex; justify-content: center; align-items: flex-end;",$$slots:{default:[It]},$$scope:{ctx:t}}});let u=de(["left","right"]),c=[];for(let o=0;o<2;o+=1)c[o]=Fe(Ne(t,u,o));const p=o=>R(c[o],1,1,()=>{c[o]=null});return{c(){B(e.$$.fragment),s=j(),B(n.$$.fragment),l=j(),B(r.$$.fragment),i=j();for(let o=0;o<2;o+=1)c[o].c();d=Ae()},l(o){G(e.$$.fragment,o),s=N(o),G(n.$$.fragment,o),l=N(o),G(r.$$.fragment,o),i=N(o);for(let a=0;a<2;a+=1)c[a].l(o);d=Ae()},m(o,a){J(e,o,a),D(o,s,a),J(n,o,a),D(o,l,a),J(r,o,a),D(o,i,a);for(let m=0;m<2;m+=1)c[m]&&c[m].m(o,a);D(o,d,a),f=!0},p(o,a){const m={};a&4096&&(m.rate=o[12]),a&2048&&(m.offset=o[11]),a&1048980&&(m.$$scope={dirty:a,ctx:o}),n.$set(m);const _={};if(a&1024&&(_.offset=o[10]),a&1048640&&(_.$$scope={dirty:a,ctx:o}),r.$set(_),a&548){u=de(["left","right"]);let g;for(g=0;g<2;g+=1){const T=Ne(o,u,g);c[g]?(c[g].p(T,a),F(c[g],1)):(c[g]=Fe(T),c[g].c(),F(c[g],1),c[g].m(d.parentNode,d))}for(Ue(),g=2;g<2;g+=1)p(g);Ke()}},i(o){if(!f){F(e.$$.fragment,o),F(n.$$.fragment,o),F(r.$$.fragment,o);for(let a=0;a<2;a+=1)F(c[a]);f=!0}},o(o){R(e.$$.fragment,o),R(n.$$.fragment,o),R(r.$$.fragment,o),c=c.filter(Boolean);for(let a=0;a<2;a+=1)R(c[a]);f=!1},d(o){o&&(b(s),b(l),b(i),b(d)),X(e,o),X(n,o),X(r,o),Oe(c,o)}}}function Nt(t){let e,s,n,l,r,i;Te(t[15]);let d={sections:2,$$slots:{default:[jt]},$$scope:{ctx:t}};return n=new Ct({props:d}),t[16](n),{c(){e=S("div"),s=S("article"),B(n.$$.fragment),this.h()},l(f){e=L(f,"DIV",{class:!0});var u=M(e);s=L(u,"ARTICLE",{class:!0});var c=M(s);G(n.$$.fragment,c),c.forEach(b),u.forEach(b),this.h()},h(){H(s,"class","feature"),H(e,"class","container")},m(f,u){D(f,e,u),E(e,s),J(n,s,null),l=!0,r||(i=fe(Le,"resize",t[15]),r=!0)},p(f,[u]){const c={};u&1056756&&(c.$$scope={dirty:u,ctx:f}),n.$set(c)},i(f){l||(F(n.$$.fragment,f),l=!0)},o(f){R(n.$$.fragment,f),l=!1},d(f){f&&b(e),t[16](null),X(n),r=!1,i()}}}function Ft(t,e,s){let n,l,r,i,d,f,u,c,p,o,a,m,_=0,g,T;Ce(()=>{const O=()=>{s(13,_=window.pageYOffset)};return window.addEventListener("scroll",O),()=>window.removeEventListener("scroll",O)});function v(){s(1,T=Le.innerWidth),s(0,g=Le.innerHeight)}function h(O){Xe[O?"unshift":"push"](()=>{m=O,s(3,m)})}return t.$$.update=()=>{t.$$.dirty&2&&s(2,n=T<=768),t.$$.dirty&4&&s(12,l=n?-.3:-.95),t.$$.dirty&4&&s(11,r=0),t.$$.dirty&4&&s(10,i=n?1.5:1),t.$$.dirty&4&&s(9,d=n?2:1),t.$$.dirty&8193&&s(14,f=Math.min(_/(g*.5),1)),t.$$.dirty&16384&&s(8,u=1-Math.min(f*3,1)),t.$$.dirty&16384&&s(7,c=1-Math.min(f*2,1)),t.$$.dirty&16384&&s(6,p=Math.max(0,Math.min(f*4,1))),t.$$.dirty&16384&&s(5,o=Math.max(0,Math.min((f-.2)*3,1))),t.$$.dirty&16384&&s(4,a=1-Math.min(f*.2,.3))},[g,T,n,m,a,o,p,c,u,d,i,r,l,_,f,v,h]}class zt extends ee{constructor(e){super(),te(this,e,Ft,Nt,$,{})}}function Rt(t){let e,s='<div class="container"><article class="feature2 svelte-1t715dr"><h2 class="highlight" style="font-family: CoffeeSpark">Hamstrump Presidential Campaign Funding</h2> <img src="./fundingraiser.jpg" alt="funder" class="feature-image"/> <div class="hamstrump-var">Public presale will open in October 2024.</div> <div>Wanna finance the campaign before public presale?</div> <div class="highlight" style="font-family: CoffeeSpark"><a href="mailto:campaignfund@hamstrump.biz">campaignfund@hamstrump.biz</a></div></article></div>';return{c(){e=S("section"),e.innerHTML=s,this.h()},l(n){e=L(n,"SECTION",{id:!0,"data-svelte-h":!0}),x(e)!=="svelte-88e87i"&&(e.innerHTML=s),this.h()},h(){H(e,"id","funding")},m(n,l){D(n,e,l)},p:P,i:P,o:P,d(n){n&&b(e)}}}class qt extends ee{constructor(e){super(),te(this,e,null,Rt,$,{})}}function Wt(t){let e,s,n,l,r,i,d,f,u,c,p,o,a,m;function _(v,h){return v[6]?Bt:Yt}let g=_(t),T=g(t);return{c(){e=S("div"),s=S("img"),l=j(),r=S("div"),i=S("h2"),d=U(t[0]),f=j(),u=S("p"),c=new Qe(!1),p=j(),o=S("button"),T.c(),this.h()},l(v){e=L(v,"DIV",{});var h=M(e);s=L(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(b),l=N(v),r=L(v,"DIV",{});var O=M(r);i=L(O,"H2",{style:!0});var w=M(i);d=K(w,t[0]),w.forEach(b),f=N(O),u=L(O,"P",{});var y=M(u);c=Ze(y,!1),y.forEach(b),p=N(O),o=L(O,"BUTTON",{class:!0,style:!0});var k=M(o);T.l(k),k.forEach(b),O.forEach(b),this.h()},h(){ae(s.src,n=t[2])||H(s,"src",n),H(s,"alt",t[3]),H(s,"class","feature-image"),I(i,"font-family","CoffeeSpark"),c.a=null,H(o,"class","connectme secondary outline"),I(o,"font-family","CoffeeSpark")},m(v,h){D(v,e,h),E(e,s),D(v,l,h),D(v,r,h),E(r,i),E(i,d),E(r,f),E(r,u),c.m(t[1],u),E(r,p),E(r,o),T.m(o,null),a||(m=fe(o,"click",t[7]),a=!0)},p(v,h){h&4&&!ae(s.src,n=v[2])&&H(s,"src",n),h&8&&H(s,"alt",v[3]),h&1&&be(d,v[0]),h&2&&c.p(v[1]),g===(g=_(v))&&T?T.p(v,h):(T.d(1),T=g(v),T&&(T.c(),T.m(o,null)))},d(v){v&&(b(e),b(l),b(r)),T.d(),a=!1,m()}}}function Vt(t){let e,s,n,l,r,i,d,f,u,c,p,o,a,m;function _(v,h){return v[6]?Jt:Gt}let g=_(t),T=g(t);return{c(){e=S("div"),s=S("h2"),n=U(t[0]),l=j(),r=S("p"),i=new Qe(!1),d=j(),f=S("button"),T.c(),u=j(),c=S("div"),p=S("img"),this.h()},l(v){e=L(v,"DIV",{});var h=M(e);s=L(h,"H2",{style:!0});var O=M(s);n=K(O,t[0]),O.forEach(b),l=N(h),r=L(h,"P",{});var w=M(r);i=Ze(w,!1),w.forEach(b),d=N(h),f=L(h,"BUTTON",{class:!0,style:!0});var y=M(f);T.l(y),y.forEach(b),h.forEach(b),u=N(v),c=L(v,"DIV",{});var k=M(c);p=L(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),this.h()},h(){I(s,"font-family","CoffeeSpark"),i.a=null,H(f,"class","connectme secondary outline"),I(f,"font-family","CoffeeSpark"),ae(p.src,o=t[2])||H(p,"src",o),H(p,"alt",t[3]),H(p,"class","feature-image")},m(v,h){D(v,e,h),E(e,s),E(s,n),E(e,l),E(e,r),i.m(t[1],r),E(e,d),E(e,f),T.m(f,null),D(v,u,h),D(v,c,h),E(c,p),a||(m=fe(f,"click",t[7]),a=!0)},p(v,h){h&1&&be(n,v[0]),h&2&&i.p(v[1]),g===(g=_(v))&&T?T.p(v,h):(T.d(1),T=g(v),T&&(T.c(),T.m(f,null))),h&4&&!ae(p.src,o=v[2])&&H(p,"src",o),h&8&&H(p,"alt",v[3])},d(v){v&&(b(e),b(u),b(c)),T.d(),a=!1,m()}}}function Yt(t){let e;return{c(){e=U("Join the movement!")},l(s){e=K(s,"Join the movement!")},m(s,n){D(s,e,n)},p:P,d(s){s&&b(e)}}}function Bt(t){let e,s;return{c(){e=U("Disconnect "),s=U(t[5])},l(n){e=K(n,"Disconnect "),s=K(n,t[5])},m(n,l){D(n,e,l),D(n,s,l)},p(n,l){l&32&&be(s,n[5])},d(n){n&&(b(e),b(s))}}}function Gt(t){let e;return{c(){e=U("Join the movement!")},l(s){e=K(s,"Join the movement!")},m(s,n){D(s,e,n)},p:P,d(s){s&&b(e)}}}function Jt(t){let e,s;return{c(){e=U("Disconnect "),s=U(t[5])},l(n){e=K(n,"Disconnect "),s=K(n,t[5])},m(n,l){D(n,e,l),D(n,s,l)},p(n,l){l&32&&be(s,n[5])},d(n){n&&(b(e),b(s))}}}function Xt(t){let e,s,n;function l(d,f){return d[4]?Vt:Wt}let r=l(t),i=r(t);return{c(){e=S("article"),s=S("div"),n=S("div"),i.c(),this.h()},l(d){e=L(d,"ARTICLE",{class:!0});var f=M(e);s=L(f,"DIV",{class:!0});var u=M(s);n=L(u,"DIV",{class:!0});var c=M(n);i.l(c),c.forEach(b),u.forEach(b),f.forEach(b),this.h()},h(){H(n,"class","grid svelte-1ppa0fb"),H(s,"class","container"),H(e,"class","feature")},m(d,f){D(d,e,f),E(e,s),E(s,n),i.m(n,null)},p(d,[f]){r===(r=l(d))&&i?i.p(d,f):(i.d(1),i=r(d),i&&(i.c(),i.m(n,null)))},i:P,o:P,d(d){d&&b(e),i.d()}}}function Ut(t,e,s){let n,l,r;Z(t,dt,a=>s(9,n=a)),Z(t,mt,a=>s(6,l=a)),Z(t,ht,a=>s(8,r=a));let{title:i=""}=e,{description:d=""}=e,{imageSrc:f=""}=e,{imageAlt:u=""}=e,{imageRight:c=!1}=e,p="";async function o(){l?await pt():n.open()}return t.$$set=a=>{"title"in a&&s(0,i=a.title),"description"in a&&s(1,d=a.description),"imageSrc"in a&&s(2,f=a.imageSrc),"imageAlt"in a&&s(3,u=a.imageAlt),"imageRight"in a&&s(4,c=a.imageRight)},t.$$.update=()=>{if(t.$$.dirty&256&&r&&typeof r=="string"){const a=r.substring(2,6),m=r.slice(-4);s(5,p=`${a}...${m}`)}},[i,d,f,u,c,p,l,o,r]}class Kt extends ee{constructor(e){super(),te(this,e,Ut,Xt,$,{title:0,description:1,imageSrc:2,imageAlt:3,imageRight:4})}}function Qt(t){let e,s='<div class="container"><article class="hamstrump-talking svelte-tyopgq"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump is on your side!</p> <img src="./Imtalkingtoyou.png" alt="You talking to me ?" class="centered-image svelte-tyopgq"/></article></div>';return{c(){e=S("section"),e.innerHTML=s,this.h()},l(n){e=L(n,"SECTION",{id:!0,"data-svelte-h":!0}),x(e)!=="svelte-1vdiqly"&&(e.innerHTML=s),this.h()},h(){H(e,"id","tuned")},m(n,l){D(n,e,l)},p:P,i:P,o:P,d(n){n&&b(e)}}}class Zt extends ee{constructor(e){super(),te(this,e,null,Qt,$,{})}}function xt(t){let e,s='<div class="container"><article class="world svelte-4g0lzk"><div class="blue-overlay"></div> <p class="hamstrump-var">Hamstrump World</p> <p class="hamstrump-var2">Once upon a time in Tickertown, there dwelled a legendary creature named Hamstrump. Imagine this: part adorable hamster, part fierce tycoon. Pow! There stands Hamstrump, ruler of the roost!</p> <p class="hamstrump-var2">Hamstrump adored lounging, nibbling on caviar (and sunflower seeds, of course). One fine day, amidst tweeting and spinning on his exercise wheel, he struck gold: Hamstrump Token! A magical currency for those who prefer chilling over flipping burgers.</p> <p class="hamstrump-var2">Soon enough, Hamstrump became a legend. With his charming rodent grin and billionaire swagger, he showed everyone that you could rake in the dough by letting the money printer go brrr. His followers cashed in while kicking back, proving that sometimes, the road to riches is paved with memes and epic parties. &quot;Get on the rocket now or cry over your lost fortune later! Don&#39;t sleep on $Hamstrump!s</p></article></div>';return{c(){e=S("section"),e.innerHTML=s,this.h()},l(n){e=L(n,"SECTION",{id:!0,"data-svelte-h":!0}),x(e)!=="svelte-5szxw"&&(e.innerHTML=s),this.h()},h(){H(e,"id","utility")},m(n,l){D(n,e,l)},p:P,i:P,o:P,d(n){n&&b(e)}}}class $t extends ee{constructor(e){super(),te(this,e,null,xt,$,{})}}function es(t){let e,s='<article><div class="grid svelte-9d7i4e"><div class="card-wrapper svelte-9d7i4e"><article class="card svelte-9d7i4e"><img src="./constitution.jpg" alt="constitution" class="roadmap-img svelte-9d7i4e"/> <div class="card-content svelte-9d7i4e"><div class="hamstrump-var svelte-9d7i4e">Day 1</div> <div>Launch of $Hamstrump on Solana with heavy presale limits (200 SOL per wallet).</div></div></article></div> <div class="card-wrapper svelte-9d7i4e"><article class="card svelte-9d7i4e"><img src="./juniorworker.jpg" alt="Junior Hams" class="roadmap-img svelte-9d7i4e"/> <div class="card-content svelte-9d7i4e"><div class="hamstrump-var svelte-9d7i4e">Day 2 to 20</div> <div><p>DEX listing: List $Hamstrump on decentralized exchanges.</p> <p>CEX listing: List $Hamstrump on centralized exchanges.</p> <p>Marketing and communication: establish strong partnerships with Solana ecosystem.</p> <p>CMC &amp; Coinguecko: Listing on CMC and Coinguecko.</p></div></div></article></div></div> <div class="grid svelte-9d7i4e"><div class="card-wrapper svelte-9d7i4e"><article class="card svelte-9d7i4e"><img src="./constitution.jpg" alt="constitution" class="roadmap-img svelte-9d7i4e"/> <div class="card-content svelte-9d7i4e"><div class="hamstrump-var svelte-9d7i4e">Day 21 to 50</div> <div><p>Scarcity: Opening of staking solutions and rewards.</p> <p>Marketing and communication: Partnerships with huge popular and cryptocurrency figures.</p> <p>Tier-1 CEX listing: Securing a Tier-1 centralized exchange listing.</p> <p>Airdrop campaigns.</p></div></div></article></div> <div class="card-wrapper svelte-9d7i4e"><article class="card svelte-9d7i4e"><img src="./juniorworker.jpg" alt="Junior Hams" class="roadmap-img svelte-9d7i4e"/> <div class="card-content svelte-9d7i4e"><div class="hamstrump-var svelte-9d7i4e">Day 50 to 100</div> <div><p>Governance mechanisms.</p> <p>Hamstrump NFT Collection.</p> <p>First diffusion of a short film starring Hamstrump.</p></div></div></article></div></div></article>';return{c(){e=S("section"),e.innerHTML=s,this.h()},l(n){e=L(n,"SECTION",{id:!0,"data-svelte-h":!0}),x(e)!=="svelte-15skkjh"&&(e.innerHTML=s),this.h()},h(){H(e,"id","roadmap")},m(n,l){D(n,e,l)},p:P,i:P,o:P,d(n){n&&b(e)}}}class ts extends ee{constructor(e){super(),te(this,e,null,es,$,{})}}function ze(t,e,s){const n=t.slice();return n[1]=e[s],n}function Re(t){let e,s,n=t[1].label+"",l,r,i,d=t[1].percentage+"",f,u,c;return{c(){e=S("div"),s=S("span"),l=U(n),r=j(),i=S("span"),f=U(d),u=U("%"),c=j(),this.h()},l(p){e=L(p,"DIV",{class:!0,style:!0});var o=M(e);s=L(o,"SPAN",{class:!0});var a=M(s);l=K(a,n),a.forEach(b),r=N(o),i=L(o,"SPAN",{class:!0});var m=M(i);f=K(m,d),u=K(m,"%"),m.forEach(b),c=N(o),o.forEach(b),this.h()},h(){H(s,"class","label svelte-km545t"),H(i,"class","percentage svelte-km545t"),H(e,"class","tokenomics-item"),I(e,"background-color",t[1].color)},m(p,o){D(p,e,o),E(e,s),E(s,l),E(e,r),E(e,i),E(i,f),E(i,u),E(e,c)},p:P,d(p){p&&b(e)}}}function ss(t){let e,s,n,l,r="Trumpenomics",i,d,f='<img src="./hamscenat.png" alt="Hamscenat" sizes="(max-width: 768px) 100vw, 50vw"/>',u,c,p=de(t[0]),o=[];for(let a=0;a<p.length;a+=1)o[a]=Re(ze(t,p,a));return{c(){e=S("section"),s=S("article"),n=S("div"),l=S("h2"),l.textContent=r,i=j(),d=S("div"),d.innerHTML=f,u=j(),c=S("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=L(a,"SECTION",{id:!0});var m=M(e);s=L(m,"ARTICLE",{class:!0});var _=M(s);n=L(_,"DIV",{class:!0});var g=M(n);l=L(g,"H2",{style:!0,"data-svelte-h":!0}),x(l)!=="svelte-1j16sxb"&&(l.textContent=r),i=N(g),d=L(g,"DIV",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-t1mtxq"&&(d.innerHTML=f),u=N(g),c=L(g,"DIV",{class:!0});var T=M(c);for(let v=0;v<o.length;v+=1)o[v].l(T);T.forEach(b),g.forEach(b),_.forEach(b),m.forEach(b),this.h()},h(){I(l,"font-family","CoffeeSpark"),H(d,"class","senate-chart"),H(c,"class","tokenomics-grid"),H(n,"class","container"),H(s,"class","feature trumpenomics"),H(e,"id","roadmap")},m(a,m){D(a,e,m),E(e,s),E(s,n),E(n,l),E(n,i),E(n,d),E(n,u),E(n,c);for(let _=0;_<o.length;_+=1)o[_]&&o[_].m(c,null)},p(a,[m]){if(m&1){p=de(a[0]);let _;for(_=0;_<p.length;_+=1){const g=ze(a,p,_);o[_]?o[_].p(g,m):(o[_]=Re(g),o[_].c(),o[_].m(c,null))}for(;_<o.length;_+=1)o[_].d(1);o.length=p.length}},i:P,o:P,d(a){a&&b(e),Oe(o,a)}}}function ns(t){return[[{label:"Presale",percentage:45,color:"#B31942"},{label:"Liquidity Pool",percentage:35,color:"#FFA3BB"},{label:"Reserve",percentage:10,color:"#FFB21D"},{label:"Early investor",percentage:5,color:"#68ACFF"},{label:"Team",percentage:5,color:"#0A3161"}]]}class rs extends ee{constructor(e){super(),te(this,e,ns,ss,$,{})}}function is(t){let e,s="<h2>Program</h2>";return{c(){e=S("section"),e.innerHTML=s,this.h()},l(n){e=L(n,"SECTION",{id:!0,"data-svelte-h":!0}),x(e)!=="svelte-9s2s2i"&&(e.innerHTML=s),this.h()},h(){H(e,"id","about")},m(n,l){D(n,e,l)},p:P,i:P,o:P,d(n){n&&b(e)}}}class ls extends ee{constructor(e){super(),te(this,e,null,is,$,{})}}function qe(t,e,s){const n=t.slice();return n[1]=e[s],n[3]=s,n}function We(t){let e,s;const n=[t[1],{imageRight:t[3]%2===1}];let l={};for(let r=0;r<n.length;r+=1)l=oe(l,n[r]);return e=new Kt({props:l}),{c(){B(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,i){J(e,r,i),s=!0},p(r,i){const d=i&1?Me(n,[vt(r[1]),n[1]]):{};e.$set(d)},i(r){s||(F(e.$$.fragment,r),s=!0)},o(r){R(e.$$.fragment,r),s=!1},d(r){X(e,r)}}}function os(t){let e,s,n,l,r,i,d,f,u,c,p,o,a,m,_,g,T;s=new zt({}),l=new qt({});let v=de(t[0]),h=[];for(let w=0;w<v.length;w+=1)h[w]=We(qe(t,v,w));const O=w=>R(h[w],1,1,()=>{h[w]=null});return f=new ts({}),c=new Zt({}),o=new rs({}),m=new ls({}),g=new $t({}),{c(){e=S("main"),B(s.$$.fragment),n=j(),B(l.$$.fragment),r=j(),i=S("section");for(let w=0;w<h.length;w+=1)h[w].c();d=j(),B(f.$$.fragment),u=j(),B(c.$$.fragment),p=j(),B(o.$$.fragment),a=j(),B(m.$$.fragment),_=j(),B(g.$$.fragment),this.h()},l(w){e=L(w,"MAIN",{class:!0});var y=M(e);G(s.$$.fragment,y),n=N(y),G(l.$$.fragment,y),r=N(y),i=L(y,"SECTION",{id:!0});var k=M(i);for(let A=0;A<h.length;A+=1)h[A].l(k);k.forEach(b),d=N(y),G(f.$$.fragment,y),u=N(y),G(c.$$.fragment,y),p=N(y),G(o.$$.fragment,y),a=N(y),G(m.$$.fragment,y),_=N(y),G(g.$$.fragment,y),y.forEach(b),this.h()},h(){H(i,"id","features"),H(e,"class","container svelte-z2adgy")},m(w,y){D(w,e,y),J(s,e,null),E(e,n),J(l,e,null),E(e,r),E(e,i);for(let k=0;k<h.length;k+=1)h[k]&&h[k].m(i,null);E(e,d),J(f,e,null),E(e,u),J(c,e,null),E(e,p),J(o,e,null),E(e,a),J(m,e,null),E(e,_),J(g,e,null),T=!0},p(w,[y]){if(y&1){v=de(w[0]);let k;for(k=0;k<v.length;k+=1){const A=qe(w,v,k);h[k]?(h[k].p(A,y),F(h[k],1)):(h[k]=We(A),h[k].c(),F(h[k],1),h[k].m(i,null))}for(Ue(),k=v.length;k<h.length;k+=1)O(k);Ke()}},i(w){if(!T){F(s.$$.fragment,w),F(l.$$.fragment,w);for(let y=0;y<v.length;y+=1)F(h[y]);F(f.$$.fragment,w),F(c.$$.fragment,w),F(o.$$.fragment,w),F(m.$$.fragment,w),F(g.$$.fragment,w),T=!0}},o(w){R(s.$$.fragment,w),R(l.$$.fragment,w),h=h.filter(Boolean);for(let y=0;y<h.length;y+=1)R(h[y]);R(f.$$.fragment,w),R(c.$$.fragment,w),R(o.$$.fragment,w),R(m.$$.fragment,w),R(g.$$.fragment,w),T=!1},d(w){w&&b(e),X(s),X(l),Oe(h,w),X(f),X(c),X(o),X(m),X(g)}}}function as(t){return[[{title:"Build The Wall",description:"Otters crossing our South border have become a serious menace for our hamster society! We CANNOT let them enter our glorious country indefinitely.<span class='highlight'>We will burn 2% on each transaction</span> to sustain our efforts in the building of a massive wall, preventing otters crossing the border!",imageSrc:"./notawall.jpg",imageAlt:"HamsFloyd"},{title:"Executive Order",description:"Being part of the Hamster society SHOULD grant you the right to trigger executive orders!<span class='highlight'> Stake your tokens</span> as a signing commitment, Hamstrump executive team will not forget you.",imageSrc:"./trustmeitsreal.png",imageAlt:"hamsworker"},{title:"Trickle-Down Tokenomics",description:"Billionaires and millionaires built this country with outstanding investment and dedication in the hamster industry! The trickle-down theory is real,<span class='highlight'> since 1% of all transactions go to $Hamstrump holders</span>.",imageSrc:"./cashbackham.png",imageAlt:"Give me your money"},{title:"The Art of the Deal",description:"Hamster citizens MUST be protected from money devaluation at ALL COSTS! We will pass a bill forcing the National Gold Reserve to <span class='highlight'>buy back tokens to maintain a stable price</span> of $Hamstrump!",imageSrc:"./cashbackham.jpg",imageAlt:"give me gold human"},{title:"Fake News Detector",description:"Fake news is corrupting society. Now that the Deep State has taken control of the media, they need to be regulated. We will put in place a <span class='highlight'> system of governance</span> that puts Hamsters at the heart of this regulation!",imageSrc:"./SireneGirl.png",imageAlt:"hey babe come back later"}]]}class ms extends ee{constructor(e){super(),te(this,e,as,os,$,{})}}export{ms as component};