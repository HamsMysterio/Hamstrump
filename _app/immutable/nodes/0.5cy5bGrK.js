const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/wagmi.BlBTkmTU.js","../chunks/index.DZGC9Yfu.js","../chunks/scheduler.CUgGpP8_.js","../chunks/preload-helper.D6kgxu3v.js"])))=>i.map(i=>d[i]);
import{s as x,n as k,c as Y,r as le,d as ce,u as ue,v as he,w as de,x as fe,o as pe}from"../chunks/scheduler.CUgGpP8_.js";import{S as M,i as j,e as C,c as I,a as U,d as g,g as w,y as G,t as W,b as F,j as re,s as R,u as H,z as Q,f as D,v as E,o as A,h as S,w as B,n as N,l as T,x as V,A as P,B as me}from"../chunks/index.SAq3QukI.js";import{b4 as ve,b5 as ge,b6 as J,b7 as z,b8 as K,b9 as _e,ba as be,bb as Z,bc as ye,bd as we,be as Ce,bf as Ie,bg as ee,bh as $e,bi as te,bj as ke,bk as se,bl as Se}from"../chunks/wagmi.BlBTkmTU.js";import{_ as Ae}from"../chunks/preload-helper.D6kgxu3v.js";const Ue=!0,Ye=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ue},Symbol.toStringTag,{value:"Module"}));function Le(u){var r,o,i;const{chain:t}=u,s=t.rpcUrls.default.http[0];if(!u.transports)return[s];const n=(o=(r=u.transports)==null?void 0:r[t.id])==null?void 0:o.call(r,{chain:t});return(((i=n==null?void 0:n.value)==null?void 0:i.transports)||[n]).map(({value:d})=>(d==null?void 0:d.url)||s)}const ne=ve({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0});X.type="walletConnect";function X(u){const t=u.isNewChainsStale??!0;let s,n;const h="eip155";let r,o,i,d,l,f;return ge(a=>({id:"walletConnect",name:"WalletConnect",type:X.type,async setup(){const e=await this.getProvider().catch(()=>null);e&&(i||(i=this.onConnect.bind(this),e.on("connect",i)),l||(l=this.onSessionDelete.bind(this),e.on("session_delete",l)))},async connect({chainId:e,...c}={}){var v,p;try{const m=await this.getProvider();if(!m)throw new J;d||(d=this.onDisplayUri,m.on("display_uri",d));let _=e;if(!_){const b=await((v=a.storage)==null?void 0:v.getItem("state"))??{};a.chains.some(O=>O.id===b.chainId)?_=b.chainId:_=(p=a.chains[0])==null?void 0:p.id}if(!_)throw new Error("No chains found on connector.");const $=await this.isChainsStale();if(m.session&&$&&await m.disconnect(),!m.session||$){const b=a.chains.filter(y=>y.id!==_).map(y=>y.id);await m.connect({optionalChains:[_,...b],..."pairingTopic"in c?{pairingTopic:c.pairingTopic}:{}}),this.setRequestedChainsIds(a.chains.map(y=>y.id))}const L=(await m.enable()).map(b=>z(b)),q=await this.getChainId();return d&&(m.removeListener("display_uri",d),d=void 0),i&&(m.removeListener("connect",i),i=void 0),r||(r=this.onAccountsChanged.bind(this),m.on("accountsChanged",r)),o||(o=this.onChainChanged.bind(this),m.on("chainChanged",o)),f||(f=this.onDisconnect.bind(this),m.on("disconnect",f)),l||(l=this.onSessionDelete.bind(this),m.on("session_delete",l)),{accounts:L,chainId:q}}catch(m){throw/(user rejected|connection request reset)/i.test(m==null?void 0:m.message)?new K(m):m}},async disconnect(){const e=await this.getProvider();try{await(e==null?void 0:e.disconnect())}catch(c){if(!/No matching key/i.test(c.message))throw c}finally{o&&(e==null||e.removeListener("chainChanged",o),o=void 0),f&&(e==null||e.removeListener("disconnect",f),f=void 0),i||(i=this.onConnect.bind(this),e==null||e.on("connect",i)),r&&(e==null||e.removeListener("accountsChanged",r),r=void 0),l&&(e==null||e.removeListener("session_delete",l),l=void 0),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(c=>z(c))},async getProvider({chainId:e}={}){var v;async function c(){const p=a.chains.map(_=>_.id);if(!p.length)return;const{EthereumProvider:m}=await Ae(async()=>{const{EthereumProvider:_}=await import("../chunks/wagmi.BlBTkmTU.js").then($=>$.bo);return{EthereumProvider:_}},__vite__mapDeps([0,1,2,3]),import.meta.url);return await m.init({...u,disableProviderPing:!0,optionalChains:p,projectId:u.projectId,rpcMap:Object.fromEntries(a.chains.map(_=>{const[$]=Le({chain:_,transports:a.transports});return[_.id,$]})),showQrModal:u.showQrModal??!0})}return s||(n||(n=c()),s=await n,s==null||s.events.setMaxListeners(Number.POSITIVE_INFINITY)),e&&await((v=this.switchChain)==null?void 0:v.call(this,{chainId:e})),s},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[e,c]=await Promise.all([this.getAccounts(),this.getProvider()]);return e.length?await this.isChainsStale()&&c.session?(await c.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:c}){var m,_,$;const v=await this.getProvider();if(!v)throw new J;const p=a.chains.find(L=>L.id===c);if(!p)throw new _e(new be);try{await Promise.all([new Promise(q=>{const b=({chainId:y})=>{y===c&&(a.emitter.off("change",b),q())};a.emitter.on("change",b)}),v.request({method:"wallet_switchEthereumChain",params:[{chainId:Z(c)}]})]);const L=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...L,c]),p}catch(L){const q=L;if(/(user rejected)/i.test(q.message))throw new K(q);try{let b;e!=null&&e.blockExplorerUrls?b=e.blockExplorerUrls:b=(m=p.blockExplorers)!=null&&m.default.url?[(_=p.blockExplorers)==null?void 0:_.default.url]:[];let y;($=e==null?void 0:e.rpcUrls)!=null&&$.length?y=e.rpcUrls:y=[...p.rpcUrls.default.http];const O={blockExplorerUrls:b,chainId:Z(c),chainName:(e==null?void 0:e.chainName)??p.name,iconUrls:e==null?void 0:e.iconUrls,nativeCurrency:(e==null?void 0:e.nativeCurrency)??p.nativeCurrency,rpcUrls:y};await v.request({method:"wallet_addEthereumChain",params:[O]});const oe=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...oe,c]),p}catch(b){throw new K(b)}}},onAccountsChanged(e){e.length===0?this.onDisconnect():a.emitter.emit("change",{accounts:e.map(c=>z(c))})},onChainChanged(e){const c=Number(e);a.emitter.emit("change",{chainId:c})},async onConnect(e){const c=Number(e.chainId),v=await this.getAccounts();a.emitter.emit("connect",{accounts:v,chainId:c})},async onDisconnect(e){this.setRequestedChainsIds([]),a.emitter.emit("disconnect");const c=await this.getProvider();r&&(c.removeListener("accountsChanged",r),r=void 0),o&&(c.removeListener("chainChanged",o),o=void 0),f&&(c.removeListener("disconnect",f),f=void 0),l&&(c.removeListener("session_delete",l),l=void 0),i||(i=this.onConnect.bind(this),c.on("connect",i))},onDisplayUri(e){a.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var c,v,p;return s?((p=(v=(c=s.session)==null?void 0:c.namespaces[h])==null?void 0:v.accounts)==null?void 0:p.map(m=>Number.parseInt(m.split(":")[1]||"")))??[]:[]},async getRequestedChainsIds(){var e;return await((e=a.storage)==null?void 0:e.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(!t)return!1;const e=a.chains.map(p=>p.id),c=this.getNamespaceChainsIds();if(c.length&&!c.some(p=>e.includes(p)))return!1;const v=await this.getRequestedChainsIds();return!e.every(p=>v.includes(p))},async setRequestedChainsIds(e){var c;await((c=a.storage)==null?void 0:c.setItem(this.requestedChainsStorageKey,e))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}}))}function qe(u){let t;return{c(){t=W("Connect Wallet")},l(s){t=F(s,"Connect Wallet")},m(s,n){w(s,t,n)},p:k,d(s){s&&g(t)}}}function Ne(u){let t,s;return{c(){t=W("Disconnect "),s=W(u[1])},l(n){t=F(n,"Disconnect "),s=F(n,u[1])},m(n,h){w(n,t,h),w(n,s,h)},p(n,h){h&2&&re(s,n[1])},d(n){n&&(g(t),g(s))}}}function Te(u){let t,s,n;function h(i,d){return i[0]?Ne:qe}let r=h(u),o=r(u);return{c(){t=C("button"),o.c()},l(i){t=I(i,"BUTTON",{});var d=U(t);o.l(d),d.forEach(g)},m(i,d){w(i,t,d),o.m(t,null),s||(n=G(t,"click",u[2]),s=!0)},p(i,[d]){r===(r=h(i))&&o?o.p(i,d):(o.d(1),o=r(i),o&&(o.c(),o.m(t,null)))},i:k,o:k,d(i){i&&g(t),o.d(),s=!1,n()}}}function Re(u,t,s){let n,h;Y(u,ye,o=>s(0,n=o)),Y(u,we,o=>s(1,h=o));function r(){n?Ce():Ie()}return[n,h,r]}class De extends M{constructor(t){super(),j(this,t,Re,Te,x,{})}}function xe(u){let t,s,n='<li><a href="/"><img src="./coinhamstr.png" alt="Hamstrup" width="40" height="40" style="border-radius: 50%;"/></a></li>',h,r,o='<li><a href="#features">Features</a></li> <li><a href="#utility">Utility</a></li> <li><a href="#roadmap">Roadmap</a></li> <li><a href="#about">About</a></li>',i,d,l,f,a;return f=new De({}),{c(){t=C("nav"),s=C("ul"),s.innerHTML=n,h=R(),r=C("ul"),r.innerHTML=o,i=R(),d=C("ul"),l=C("li"),H(f.$$.fragment),this.h()},l(e){t=I(e,"NAV",{class:!0});var c=U(t);s=I(c,"UL",{"data-svelte-h":!0}),Q(s)!=="svelte-126xlze"&&(s.innerHTML=n),h=D(c),r=I(c,"UL",{"data-svelte-h":!0}),Q(r)!=="svelte-triica"&&(r.innerHTML=o),i=D(c),d=I(c,"UL",{});var v=U(d);l=I(v,"LI",{});var p=U(l);E(f.$$.fragment,p),p.forEach(g),v.forEach(g),c.forEach(g),this.h()},h(){A(t,"class","header svelte-4oellm")},m(e,c){w(e,t,c),S(t,s),S(t,h),S(t,r),S(t,i),S(t,d),S(d,l),B(f,l,null),a=!0},p:k,i(e){a||(N(f.$$.fragment,e),a=!0)},o(e){T(f.$$.fragment,e),a=!1},d(e){e&&g(t),V(f)}}}class Me extends M{constructor(t){super(),j(this,t,null,xe,x,{})}}function je(u){let t,s='<article class="feature"><div class="feature3 svelte-1ivh1m8"><div class="grid"><div><h3 style="font-family: CoffeeSpark">social</h3> <div class="footer-menu svelte-1ivh1m8"><li class="svelte-1ivh1m8"><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" class="svelte-1ivh1m8"><i class="fa-brands fa-instagram"></i> instagram</a></li> <li class="svelte-1ivh1m8"><a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" class="svelte-1ivh1m8"><i class="fa-brands fa-telegram"></i> telegram</a></li> <li class="svelte-1ivh1m8"><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="svelte-1ivh1m8"><i class="fa-brands fa-twitter"></i> X</a></li></div></div> <div><h3 style="font-family: CoffeeSpark">HAMSTRUMP</h3> <div class="footer-menu svelte-1ivh1m8"><p class="svelte-1ivh1m8">Proudly made by ⒸGoldenBalls 2024.</p> <p class="svelte-1ivh1m8">All rights reserved.</p></div></div> <div><h3 style="font-family: CoffeeSpark">menu</h3> <div class="footer-menu svelte-1ivh1m8"><li class="svelte-1ivh1m8"><a href="#features" class="svelte-1ivh1m8">Features</a></li> <li class="svelte-1ivh1m8"><a href="#utility" class="svelte-1ivh1m8">Utility</a></li> <li class="svelte-1ivh1m8"><a href="#roadmap" class="svelte-1ivh1m8">Roadmap</a></li> <li class="svelte-1ivh1m8"><a href="#about" class="svelte-1ivh1m8">About</a></li></div></div></div> <h3 style="font-family: CoffeeSpark">RISK WARNING</h3> <p class="svelte-1ivh1m8">Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford  to lose. The content on this site should not be considered investment advice. Investing is speculative.</p> <p class="svelte-1ivh1m8">When investing your capital is at risk.</p> <p class="svelte-1ivh1m8">We do not allow users of these countries to participate in the early-funding: The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p></div></article>';return{c(){t=C("div"),t.innerHTML=s,this.h()},l(n){t=I(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1gcjy86"&&(t.innerHTML=s),this.h()},h(){A(t,"class","container")},m(n,h){w(n,t,h)},p:k,i:k,o:k,d(n){n&&g(t)}}}class He extends M{constructor(t){super(),j(this,t,null,je,x,{})}}function ie(u,t,s){const n=u.slice();return n[6]=t[s],n}function ae(u){let t,s=u[6]+"",n;return{c(){t=C("div"),n=W(s),this.h()},l(h){t=I(h,"DIV",{class:!0});var r=U(t);n=F(r,s),r.forEach(g),this.h()},h(){A(t,"class","ticker__item svelte-dh5mf5")},m(h,r){w(h,t,r),S(t,n)},p(h,r){r&1&&s!==(s=h[6]+"")&&re(n,s)},d(h){h&&g(t)}}}function Ee(u){let t,s,n,h,r=ee(u[0]),o=[];for(let i=0;i<r.length;i+=1)o[i]=ae(ie(u,r,i));return{c(){t=C("div"),s=C("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){t=I(i,"DIV",{role:!0,class:!0,tabindex:!0});var d=U(t);s=I(d,"DIV",{class:!0});var l=U(s);for(let f=0;f<o.length;f+=1)o[f].l(l);l.forEach(g),d.forEach(g),this.h()},h(){A(s,"class","ticker svelte-dh5mf5"),P(s,"paused",u[2]),A(t,"role","button"),A(t,"class","ticker-wrap svelte-dh5mf5"),A(t,"tabindex","0")},m(i,d){w(i,t,d),S(t,s);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(s,null);u[5](s),n||(h=[G(t,"mouseenter",u[3]),G(t,"mouseleave",u[4])],n=!0)},p(i,[d]){if(d&1){r=ee(i[0]);let l;for(l=0;l<r.length;l+=1){const f=ie(i,r,l);o[l]?o[l].p(f,d):(o[l]=ae(f),o[l].c(),o[l].m(s,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}d&4&&P(s,"paused",i[2])},i:k,o:k,d(i){i&&g(t),me(o,i),u[5](null),n=!1,le(h)}}}function Be(u,t,s){let{news:n=["Dernière minute : Important développement dans l'affaire X","La bourse en hausse de 2% aujourd'hui","Météo : Temps ensoleillé prévu pour le week-end","Sport : L'équipe nationale remporte le championnat"]}=t,h,r=!1;function o(){s(2,r=!0)}function i(){s(2,r=!1)}function d(l){ce[l?"unshift":"push"](()=>{h=l,s(1,h)})}return u.$$set=l=>{"news"in l&&s(0,n=l.news)},[n,h,r,o,i,d]}class Ve extends M{constructor(t){super(),j(this,t,Be,Ee,x,{news:0})}}const We="75ce17bae1bef3e597b12a2c8f6f570f",Fe=$e({chains:[te,ne],connectors:[X({projectId:We}),ke()],transports:{[te.id]:se(),[ne.id]:se()}});function Oe(u){let t,s,n,h,r,o,i,d;t=new Ve({}),n=new Me({});const l=u[1].default,f=ue(l,u,u[0],null);return i=new He({}),{c(){H(t.$$.fragment),s=R(),H(n.$$.fragment),h=R(),r=C("main"),f&&f.c(),o=R(),H(i.$$.fragment),this.h()},l(a){E(t.$$.fragment,a),s=D(a),E(n.$$.fragment,a),h=D(a),r=I(a,"MAIN",{class:!0});var e=U(r);f&&f.l(e),e.forEach(g),o=D(a),E(i.$$.fragment,a),this.h()},h(){A(r,"class","svelte-1r7uge8")},m(a,e){B(t,a,e),w(a,s,e),B(n,a,e),w(a,h,e),w(a,r,e),f&&f.m(r,null),w(a,o,e),B(i,a,e),d=!0},p(a,[e]){f&&f.p&&(!d||e&1)&&he(f,l,a,a[0],d?fe(l,a[0],e,null):de(a[0]),null)},i(a){d||(N(t.$$.fragment,a),N(n.$$.fragment,a),N(f,a),N(i.$$.fragment,a),d=!0)},o(a){T(t.$$.fragment,a),T(n.$$.fragment,a),T(f,a),T(i.$$.fragment,a),d=!1},d(a){a&&(g(s),g(h),g(r),g(o)),V(t,a),V(n,a),f&&f.d(a),V(i,a)}}}function ze(u,t,s){let{$$slots:n={},$$scope:h}=t;return pe(async()=>{await Se(Fe)}),u.$$set=r=>{"$$scope"in r&&s(0,h=r.$$scope)},[h,n]}class Pe extends M{constructor(t){super(),j(this,t,ze,Oe,x,{})}}export{Pe as component,Ye as universal};
