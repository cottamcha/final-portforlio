import{o as Dt,d as xt}from"./solid.EEAlqltM.js";function Rt(t,e){t.indexOf(e)===-1&&t.push(e)}function Ft(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const pt=(t,e,n)=>Math.min(Math.max(n,t),e),w={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},F=t=>typeof t=="number",j=t=>Array.isArray(t)&&!F(t[0]),It=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function mt(t,e){return j(t)?t[It(0,t.length,e)]:t}const et=(t,e,n)=>-n*t+n*e+t,gt=()=>{},x=t=>t,W=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function nt(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=W(0,e,i);t.push(et(n,1,s))}}function yt(t){const e=[0];return nt(e,t-1),e}function Pt(t,e=yt(t.length),n=x){const i=t.length,s=i-e.length;return s>0&&nt(e,s),a=>{let r=0;for(;r<i-2&&!(a<e[r+1]);r++);let o=pt(0,1,W(e[r],e[r+1],a));return o=mt(n,r)(o),et(t[r],t[r+1],o)}}const vt=t=>Array.isArray(t)&&F(t[0]),B=t=>typeof t=="object"&&!!t.createAnimation,V=t=>typeof t=="function",it=t=>typeof t=="string",C={ms:t=>t*1e3,s:t=>t/1e3};function jt(t,e){return e?t*(1e3/e):0}const Tt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ct=1e-7,$t=12;function qt(t,e,n,i,s){let a,r,o=0;do r=e+(n-e)/2,a=Tt(r,i,s)-t,a>0?n=r:e=r;while(Math.abs(a)>Ct&&++o<$t);return r}function U(t,e,n,i){if(t===e&&n===i)return x;const s=a=>qt(a,0,1,t,n);return a=>a===0||a===1?a:Tt(s(a),e,i)}const _t=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return pt(0,1,s/t)},ot={ease:U(.25,.1,.25,1),"ease-in":U(.42,0,1,1),"ease-in-out":U(.42,0,.58,1),"ease-out":U(0,0,.58,1)},Ut=/\((.*?)\)/;function Y(t){if(V(t))return t;if(vt(t))return U(...t);if(ot[t])return ot[t];if(t.startsWith("steps")){const e=Ut.exec(t);if(e){const n=e[1].split(",");return _t(parseFloat(n[0]),n[1].trim())}}return x}class Vt{constructor(e,n=[0,1],{easing:i,duration:s=w.duration,delay:a=w.delay,endDelay:r=w.endDelay,repeat:o=w.repeat,offset:l,direction:u="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=x,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,c)=>{this.resolve=h,this.reject=c}),i=i||w.easing,B(i)){const h=i.createAnimation(n);i=h.easing,n=h.keyframes||n,s=h.duration||s}this.repeat=o,this.easing=j(i)?x:Y(i),this.updateDuration(s);const d=Pt(n,l,j(i)?i.map(Y):x);this.tick=h=>{var c;a=a;let p=0;this.pauseTime!==void 0?p=this.pauseTime:p=(h-this.startTime)*this.rate,this.t=p,p/=1e3,p=Math.max(p-a,0),this.playState==="finished"&&this.pauseTime===void 0&&(p=this.totalDuration);const m=p/this.duration;let g=Math.floor(m),y=m%1;!y&&m>=1&&(y=1),y===1&&g--;const b=g%2;(u==="reverse"||u==="alternate"&&b||u==="alternate-reverse"&&!b)&&(y=1-y);const A=p>=this.totalDuration?1:Math.min(y,1),T=d(this.easing(A));e(T),this.pauseTime===void 0&&(this.playState==="finished"||p>=this.totalDuration+r)?(this.playState="finished",(c=this.resolve)===null||c===void 0||c.call(this,T)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}var Kt=function(){};class zt{setAnimation(e){this.animation=e,e?.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Z=new WeakMap;function bt(t){return Z.has(t)||Z.set(t,{transforms:[],values:new Map}),Z.get(t)}function Bt(t,e){return t.has(e)||t.set(e,new zt),t.get(e)}const Nt=["","X","Y","Z"],Gt=["translate","scale","rotate","skew"],N={x:"translateX",y:"translateY",z:"translateZ"},ct={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Lt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ct,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:x},skew:ct},q=new Map,st=t=>`--motion-${t}`,G=["x","y","z"];Gt.forEach(t=>{Nt.forEach(e=>{G.push(t+e),q.set(st(t+e),Lt[t])})});const Wt=(t,e)=>G.indexOf(t)-G.indexOf(e),kt=new Set(G),St=t=>kt.has(t),Zt=(t,e)=>{N[e]&&(e=N[e]);const{transforms:n}=bt(t);Rt(n,e),t.style.transform=Xt(n)},Xt=t=>t.sort(Wt).reduce(Ht,"").trim(),Ht=(t,e)=>`${t} ${e}(var(${st(e)}))`,tt=t=>t.startsWith("--"),lt=new Set;function Jt(t){if(!lt.has(t)){lt.add(t);try{const{syntax:e,initialValue:n}=q.has(t)?q.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const X=(t,e)=>document.createElement("div").animate(t,e),ut={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{X({opacity:[1]})}catch{return!1}return!0},finished:()=>!!X({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{X({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},H={},P={};for(const t in ut)P[t]=()=>(H[t]===void 0&&(H[t]=ut[t]()),H[t]);const Qt=.015,Yt=(t,e)=>{let n="";const i=Math.round(e/Qt);for(let s=0;s<i;s++)n+=t(W(0,i-1,s))+", ";return n.substring(0,n.length-2)},ft=(t,e)=>V(t)?P.linearEasing()?`linear(${Yt(t,e)})`:w.easing:vt(t)?te(t):t,te=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function ee(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const Ot=t=>Array.isArray(t)?t:[t];function L(t){return N[t]&&(t=N[t]),St(t)?st(t):t}const z={get:(t,e)=>{e=L(e);let n=tt(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=q.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=L(e),tt(e)?t.style.setProperty(e,n):t.style[e]=n}};function At(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function wt(t,e){var n;let i=e?.toDefaultUnit||x;const s=t[t.length-1];if(it(s)){const a=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";a&&(i=r=>r+a)}return i}function ne(){return window.__MOTION_DEV_TOOLS_RECORD}function ie(t,e,n,i={},s){const a=ne(),r=i.record!==!1&&a;let o,{duration:l=w.duration,delay:u=w.delay,endDelay:d=w.endDelay,repeat:h=w.repeat,easing:c=w.easing,persist:p=!1,direction:m,offset:g,allowWebkitAcceleration:y=!1}=i;const b=bt(t),A=St(e);let T=P.waapi();A&&Zt(t,e);const O=L(e),M=Bt(b.values,O),S=q.get(O);return At(M.animation,!(B(c)&&M.generator)&&i.record!==!1),()=>{const R=()=>{var v,E;return(E=(v=z.get(t,O))!==null&&v!==void 0?v:S?.initialValue)!==null&&E!==void 0?E:0};let f=ee(Ot(n),R);const _=wt(f,S);if(B(c)){const v=c.createAnimation(f,e!=="opacity",R,O,M);c=v.easing,f=v.keyframes||f,l=v.duration||l}if(tt(O)&&(P.cssRegisterProperty()?Jt(O):T=!1),A&&!P.linearEasing()&&(V(c)||j(c)&&c.some(V))&&(T=!1),T){S&&(f=f.map(D=>F(D)?S.toDefaultUnit(D):D)),f.length===1&&(!P.partialKeyframes()||r)&&f.unshift(R());const v={delay:C.ms(u),duration:C.ms(l),endDelay:C.ms(d),easing:j(c)?void 0:ft(c,l),direction:m,iterations:h+1,fill:"both"};o=t.animate({[O]:f,offset:g,easing:j(c)?c.map(D=>ft(D,l)):void 0},v),o.finished||(o.finished=new Promise((D,K)=>{o.onfinish=D,o.oncancel=K}));const E=f[f.length-1];o.finished.then(()=>{p||(z.set(t,O,E),o.cancel())}).catch(gt),y||(o.playbackRate=1.000001)}else if(s&&A)f=f.map(v=>typeof v=="string"?parseFloat(v):v),f.length===1&&f.unshift(parseFloat(R())),o=new s(v=>{z.set(t,O,_?_(v):v)},f,Object.assign(Object.assign({},i),{duration:l,easing:c}));else{const v=f[f.length-1];z.set(t,O,S&&F(v)?S.toDefaultUnit(v):v)}return r&&a(t,e,f,{duration:l,delay:u,easing:c,repeat:h,offset:g},"motion-one"),M.setAnimation(o),o}}const se=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function re(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const ae=t=>t(),oe=(t,e,n=w.duration)=>new Proxy({animations:t.map(ae).filter(Boolean),duration:n,options:e},le),ce=t=>t.animations[0],le={get:(t,e)=>{const n=ce(t);switch(e){case"duration":return t.duration;case"currentTime":return C.s(n?.[e]||0);case"playbackRate":case"playState":return n?.[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(ue)).catch(gt)),t.finished;case"stop":return()=>{t.animations.forEach(i=>At(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof n?.[e]>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=C.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},ue=t=>t.finished;function fe(t=.1,{start:e=0,from:n=0,easing:i}={}){return(s,a)=>{const r=F(n)?n:he(n,a),o=Math.abs(r-s);let l=t*o;if(i){const u=a*t;l=Y(i)(l/u)*u}return e+l}}function he(t,e){if(t==="first")return 0;{const n=e-1;return t==="last"?n:n/2}}function de(t,e,n){return V(t)?t(e,n):t}function pe(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ht(t,e,n,i){var s;return F(e)?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=i.get(e))!==null&&s!==void 0?s:t}function me(t,e,n){for(let i=0;i<t.length;i++){const s=t[i];s.at>e&&s.at<n&&(Ft(t,s),i--)}}function ge(t,e,n,i,s,a){me(t,s,a);for(let r=0;r<e.length;r++)t.push({value:e[r],at:et(s,a,i[r]),easing:mt(n,r)})}function ye(t,e){return t.at===e.at?t.value===null?1:-1:t.at-e.at}function ve(t,e={}){var n;const i=Te(t,e),s=i.map(a=>ie(...a,Vt)).filter(Boolean);return oe(s,e,(n=i[0])===null||n===void 0?void 0:n[3].duration)}function Te(t,e={}){var{defaultOptions:n={}}=e,i=pe(e,["defaultOptions"]);const s=[],a=new Map,r={},o=new Map;let l=0,u=0,d=0;for(let h=0;h<t.length;h++){const c=t[h];if(it(c)){o.set(c,u);continue}else if(!Array.isArray(c)){o.set(c.name,ht(u,c.at,l,o));continue}const[p,m,g={}]=c;g.at!==void 0&&(u=ht(u,g.at,l,o));let y=0;const b=re(p,r),A=b.length;for(let T=0;T<A;T++){const O=b[T],M=be(O,a);for(const S in m){const R=Se(S,M);let f=Ot(m[S]);const _=se(g,S);let{duration:v=n.duration||w.duration,easing:E=n.easing||w.easing}=_;if(B(E)){Kt(S==="opacity"||f.length>1);const k=E.createAnimation(f,S!=="opacity",()=>0,S);E=k.easing,f=k.keyframes||f,v=k.duration||v}const D=de(g.delay,T,A)||0,K=u+D,rt=K+v;let{offset:I=yt(f.length)}=_;I.length===1&&I[0]===0&&(I[1]=1);const at=I.length-f.length;at>0&&nt(I,at),f.length===1&&f.unshift(null),ge(R,f,E,I,K,rt),y=Math.max(D+v,y),d=Math.max(rt,d)}}l=u,u+=y}return a.forEach((h,c)=>{for(const p in h){const m=h[p];m.sort(ye);const g=[],y=[],b=[];for(let A=0;A<m.length;A++){const{at:T,value:O,easing:M}=m[A];g.push(O),y.push(W(0,d,T)),b.push(M||w.easing)}y[0]!==0&&(y.unshift(0),g.unshift(g[0]),b.unshift("linear")),y[y.length-1]!==1&&(y.push(1),g.push(null)),s.push([c,p,g,Object.assign(Object.assign(Object.assign({},n),{duration:d,easing:b,offset:y}),i)])}}),s}function be(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function Se(t,e){return e[t]||(e[t]=[]),e[t]}const Oe=5;function Mt(t,e,n){const i=Math.max(e-Oe,0);return jt(n-t(i),e-i)}const $={stiffness:100,damping:10,mass:1},Ae=(t=$.stiffness,e=$.damping,n=$.mass)=>e/(2*Math.sqrt(t*n));function we(t,e,n){return t<e&&n>=e||t>e&&n<=e}const Me=({stiffness:t=$.stiffness,damping:e=$.damping,mass:n=$.mass,from:i=0,to:s=1,velocity:a=0,restSpeed:r,restDistance:o}={})=>{a=a?C.s(a):0;const l={done:!1,hasReachedTarget:!1,current:i,target:s},u=s-i,d=Math.sqrt(t/n)/1e3,h=Ae(t,e,n),c=Math.abs(u)<5;r||(r=c?.01:2),o||(o=c?.005:.5);let p;if(h<1){const m=d*Math.sqrt(1-h*h);p=g=>s-Math.exp(-h*d*g)*((-a+h*d*u)/m*Math.sin(m*g)+u*Math.cos(m*g))}else p=m=>s-Math.exp(-d*m)*(u+(-a+d*u)*m);return m=>{l.current=p(m);const g=m===0?a:Mt(p,m,l.current),y=Math.abs(g)<=r,b=Math.abs(s-l.current)<=o;return l.done=y&&b,l.hasReachedTarget=we(i,s,l.current),l}},J=10,Ee=1e4;function De(t,e=x){let n,i=J,s=t(0);const a=[e(s.current)];for(;!s.done&&i<Ee;)s=t(i),a.push(e(s.done?s.target:s.current)),n===void 0&&s.hasReachedTarget&&(n=i),i+=J;const r=i-J;return a.length===1&&a.push(s.current),{keyframes:a,duration:r/1e3,overshootDuration:(n??r)/1e3}}function dt(t){return F(t)&&!isNaN(t)}function Q(t){return it(t)?parseFloat(t):t}function xe(t){const e=new WeakMap;return(n={})=>{const i=new Map,s=(r=0,o=100,l=0,u=!1)=>{const d=`${r}-${o}-${l}-${u}`;return i.has(d)||i.set(d,t(Object.assign({from:r,to:o,velocity:l},n))),i.get(d)},a=(r,o)=>(e.has(r)||e.set(r,De(r,o)),e.get(r));return{createAnimation:(r,o=!0,l,u,d)=>{let h,c,p,m=0,g=x;const y=r.length;if(o){g=wt(r,u?q.get(L(u)):void 0);const b=r[y-1];if(p=Q(b),y>1&&r[0]!==null)c=Q(r[0]);else{const A=d?.generator;if(A){const{animation:T,generatorStartTime:O}=d,M=T?.startTime||O||0,S=T?.currentTime||performance.now()-M,R=A(S).current;c=R,m=Mt(f=>A(f).current,S,R)}else l&&(c=Q(l()))}}if(dt(c)&&dt(p)){const b=s(c,p,m,u?.includes("scale"));h=Object.assign(Object.assign({},a(b,g)),{easing:"linear"}),d&&(d.generator=b,d.generatorStartTime=performance.now())}return h||(h={easing:"ease",duration:a(s(0,100)).overshootDuration}),h}}}}const Re=xe(Me),Fe=[".loader",{opacity:[1,0],pointerEvents:"none"},{easing:"ease-out"}],Ie=document.querySelectorAll(".card"),Pe={velocity:100,stiffness:50,damping:10},je=.3,Ce=.4,$e=[Fe,[Ie,{y:["40%","0%"],opacity:[0,1]},{at:"-0.1",duration:Ce,delay:fe(je),easing:Re(Pe)}]];ve($e);function qe(t){const e={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"Europe/Rome"};let n=new Intl.DateTimeFormat("en-US",e).format(t);return n+=" CET",n}let Et;function _e(){const t=document.getElementById("timeDisplay"),e=new Date;t&&(t.textContent=qe(e),t.setAttribute("datetime",e.toISOString()))}Dt(()=>{Et=setInterval(_e,1e3)});xt(()=>{clearInterval(Et)});
