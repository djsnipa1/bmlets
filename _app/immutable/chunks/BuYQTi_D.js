import{K as T,L as m,M as V,F as A,N as F,O as $,P as q,Q as B,C as H,b as j,R as K,h as w,S as I,V as R,c as g,s as S,f as h,D as M,W as D,X as N,a as Q,Y as X,Z,_ as z,$ as G,a0 as J,a1 as U,e as x,v as ee,g as te,y as re}from"./LcK_KsF6.js";import{b as ae}from"./B3d6i3ls.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var t=V,a=A;T(null),m(null);try{return e()}finally{T(t),m(a)}}const oe=new Set,C=new Set;function ue(e,t,a,i={}){function s(r){if(i.capture||E.call(t,r),!r.cancelBubble)return se(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{t.addEventListener(e,s,i)}):t.addEventListener(e,s,i),s}function _e(e,t,a,i,s){var r={capture:i,passive:s},f=ue(e,t,a,r);(t===document.body||t===window||t===document)&&F(()=>{t.removeEventListener(e,f,r)})}function E(e){var k;var t=this,a=t.ownerDocument,i=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],r=s[0]||e.target,f=0,v=e.__root;if(v){var c=s.indexOf(v);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var y=s.indexOf(t);if(y===-1)return;c<=y&&(f=c)}if(r=s[f]||e.target,r!==t){q(e,"currentTarget",{configurable:!0,get(){return r||a}});var L=V,l=A;T(null),m(null);try{for(var n,o=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(B(_)){var[W,...Y]=_;W.apply(r,[e,...Y])}else _.call(r,e)}catch(b){n?o.push(b):n=b}if(e.cancelBubble||d===t||d===null)break;r=d}if(n){for(let b of o)queueMicrotask(()=>{throw b});throw n}}finally{e.__root=t,delete e.currentTarget,T(L),m(l)}}}let u;function fe(){u=void 0}function he(e){let t=null,a=w;var i;if(w){for(t=h,u===void 0&&(u=M(document.head));u!==null&&(u.nodeType!==8||u.data!==I);)u=R(u);u===null?g(!1):u=S(R(u))}w||(i=document.head.appendChild(H()));try{j(()=>e(i),K)}finally{a&&(g(!0),u=h,S(t))}}function ve(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function le(e,t){return P(e,t)}function ye(e,t){D(),t.intro=t.intro??!1;const a=t.target,i=w,s=h;try{for(var r=M(a);r&&(r.nodeType!==8||r.data!==I);)r=R(r);if(!r)throw N;g(!0),S(r),Q();const f=P(e,{...t,anchor:r});if(h===null||h.nodeType!==8||h.data!==X)throw Z(),N;return g(!1),f}catch(f){if(f===N)return t.recover===!1&&z(),D(),G(a),g(!1),le(e,t);throw f}finally{g(i),S(s),fe()}}const p=new Map;function P(e,{target:t,anchor:a,props:i={},events:s,context:r,intro:f=!0}){D();var v=new Set,c=l=>{for(var n=0;n<l.length;n++){var o=l[n];if(!v.has(o)){v.add(o);var d=ie(o);t.addEventListener(o,E,{passive:d});var _=p.get(o);_===void 0?(document.addEventListener(o,E,{passive:d}),p.set(o,1)):p.set(o,_+1)}}};c(J(oe)),C.add(c);var y=void 0,L=U(()=>{var l=a??t.appendChild(H());return x(()=>{if(r){ee({});var n=te;n.c=r}s&&(i.$$events=s),w&&ae(l,null),y=e(l,i)||{},w&&(A.nodes_end=h),r&&re()}),()=>{var d;for(var n of v){t.removeEventListener(n,E);var o=p.get(n);--o===0?(document.removeEventListener(n,E),p.delete(n)):p.set(n,o)}C.delete(c),l!==a&&((d=l.parentNode)==null||d.removeChild(l))}});return O.set(y,L),y}let O=new WeakMap;function pe(e,t){const a=O.get(e);return a?(O.delete(e),a(t)):Promise.resolve()}export{he as a,_e as e,ye as h,le as m,ve as s,pe as u};
