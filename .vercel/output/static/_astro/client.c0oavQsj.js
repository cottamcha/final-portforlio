import{c as N,a as u,s as g,e as b,b as p}from"./solid.EEAlqltM.js";function _(o,i,e){let n=e.length,s=i.length,l=n,f=0,t=0,h=i[s-1].nextSibling,d=null;for(;f<s||t<l;){if(i[f]===e[t]){f++,t++;continue}for(;i[s-1]===e[l-1];)s--,l--;if(s===f){const y=l<n?t?e[t-1].nextSibling:e[l-t]:h;for(;t<l;)o.insertBefore(e[t++],y)}else if(l===t)for(;f<s;)(!d||!d.has(i[f]))&&i[f].remove(),f++;else if(i[f]===e[l-1]&&e[t]===i[s-1]){const y=i[--s].nextSibling;o.insertBefore(e[t++],i[f++].nextSibling),o.insertBefore(e[--l],y),i[s]=e[l]}else{if(!d){d=new Map;let c=t;for(;c<l;)d.set(e[c],c++)}const y=d.get(i[f]);if(y!=null)if(t<y&&y<l){let c=f,r=1,A;for(;++c<s&&c<l&&!((A=d.get(i[c]))==null||A!==y+r);)r++;if(r>y-t){const E=i[f];for(;t<y;)o.insertBefore(e[t++],E)}else o.replaceChild(e[t++],i[f++])}else f++;else i[f++].remove()}}}function C(o,i,e,n={}){let s;return N(l=>{s=l,i===document?o():I(i,o(),i.firstChild?null:void 0,e)},n.owner),()=>{s(),i.textContent=""}}function I(o,i,e,n){if(e!==void 0&&!n&&(n=[]),typeof i!="function")return x(o,i,n,e);u(s=>x(o,i(),s,e),n)}function H(o,i,e={}){g.completed=globalThis._$HY.completed,g.events=globalThis._$HY.events,g.load=s=>globalThis._$HY.r[s],g.has=s=>s in globalThis._$HY.r,g.gather=s=>S(i,s),g.registry=new Map,g.context={id:e.renderId||"",count:0},S(i,e.renderId);const n=C(o,i,[...i.childNodes],e);return g.context=null,n}function x(o,i,e,n,s){if(g.context){!e&&(e=[...o.childNodes]);let t=[];for(let h=0;h<e.length;h++){const d=e[h];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():t.push(d)}e=t}for(;typeof e=="function";)e=e();if(i===e)return e;const l=typeof i,f=n!==void 0;if(o=f&&e[0]&&e[0].parentNode||o,l==="string"||l==="number"){if(g.context)return e;if(l==="number"&&(i=i.toString()),f){let t=e[0];t&&t.nodeType===3?t.data=i:t=document.createTextNode(i),e=T(o,e,n,t)}else e!==""&&typeof e=="string"?e=o.firstChild.data=i:e=o.textContent=i}else if(i==null||l==="boolean"){if(g.context)return e;e=T(o,e,n)}else{if(l==="function")return u(()=>{let t=i();for(;typeof t=="function";)t=t();e=x(o,t,e,n)}),()=>e;if(Array.isArray(i)){const t=[],h=e&&Array.isArray(e);if(a(t,i,e,s))return u(()=>e=x(o,t,e,n,!0)),()=>e;if(g.context){if(!t.length)return e;if(n===void 0)return[...o.childNodes];let d=t[0],y=[d];for(;(d=d.nextSibling)!==n;)y.push(d);return e=y}if(t.length===0){if(e=T(o,e,n),f)return e}else h?e.length===0?w(o,t,n):_(o,e,t):(e&&T(o),w(o,t));e=t}else if(i.nodeType){if(g.context&&i.parentNode)return e=f?[i]:i;if(Array.isArray(e)){if(f)return e=T(o,e,n,i);T(o,e,null,i)}else e==null||e===""||!o.firstChild?o.appendChild(i):o.replaceChild(i,o.firstChild);e=i}}return e}function a(o,i,e,n){let s=!1;for(let l=0,f=i.length;l<f;l++){let t=i[l],h=e&&e[l],d;if(!(t==null||t===!0||t===!1))if((d=typeof t)=="object"&&t.nodeType)o.push(t);else if(Array.isArray(t))s=a(o,t,h)||s;else if(d==="function")if(n){for(;typeof t=="function";)t=t();s=a(o,Array.isArray(t)?t:[t],Array.isArray(h)?h:[h])||s}else o.push(t),s=!0;else{const y=String(t);h&&h.nodeType===3&&h.data===y?o.push(h):o.push(document.createTextNode(y))}}return s}function w(o,i,e=null){for(let n=0,s=i.length;n<s;n++)o.insertBefore(i[n],e)}function T(o,i,e,n){if(e===void 0)return o.textContent="";const s=n||document.createTextNode("");if(i.length){let l=!1;for(let f=i.length-1;f>=0;f--){const t=i[f];if(s!==t){const h=t.parentNode===o;!l&&!f?h?o.replaceChild(s,t):o.insertBefore(s,e):h&&t.remove()}else l=!0}}else o.insertBefore(s,e);return[s]}function S(o,i){const e=o.querySelectorAll("*[data-hk]");for(let n=0;n<e.length;n++){const s=e[n],l=s.getAttribute("data-hk");(!i||l.startsWith(i))&&!g.registry.has(l)&&g.registry.set(l,s)}}const L=(...o)=>(b(),H(...o));var F=o=>(i,e,n,{client:s})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!o.hasAttribute("ssr"))return;const l=s==="only"?C:L;let f,t={};if(Object.keys(n).length>0){if(s!=="only"){const r=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,A=>A===o?NodeFilter.FILTER_SKIP:A.nodeName==="ASTRO-SLOT"?NodeFilter.FILTER_ACCEPT:A.nodeName==="ASTRO-ISLAND"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP);for(;f=r.nextNode();)t[f.getAttribute("name")||"default"]=f}for(const[r,A]of Object.entries(n))t[r]||(t[r]=document.createElement("astro-slot"),r!=="default"&&t[r].setAttribute("name",r),t[r].innerHTML=A)}const{default:h,...d}=t,y=o.dataset.solidRenderId,c=l(()=>p(i,{...e,...d,children:h}),o,{renderId:y});o.addEventListener("astro:unmount",()=>c(),{once:!0})};export{F as default};