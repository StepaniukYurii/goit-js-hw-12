import{a as k,S as O,i as b}from"./assets/vendor-BBpWYnHM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const B="45663713-dfa6ca74103c7ea350b6beef4",H="https://pixabay.com/api/";let g=1;const L=15;async function w(a){const t=new URLSearchParams({key:B,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:g,per_page:L});try{return(await k.get(H,{params:t})).data}catch(s){throw new Error(s.response.status)}}function R(){g+=1}function z(){g=1}function C(a,t,s){console.log(a),a.hits.forEach(({webformatURL:c,largeImageURL:e,tags:o,likes:l,views:S,comments:q,downloads:P})=>{const d=document.createElement("li"),i=document.createElement("img"),p=document.createElement("ul"),u=document.createElement("a");d.classList.add("gallery-item"),i.classList.add("gallery-image"),p.classList.add("info-list"),u.classList.add("gallery-link"),i.src=c,i.width="360",i.alt=o,u.href=e,[{title:"Likes",value:l},{title:"Views",value:S},{title:"Comments",value:q},{title:"Downloads",value:P}].forEach(({title:x,value:I})=>{const m=document.createElement("li"),y=document.createElement("h2"),f=document.createElement("p");m.classList.add("info-item"),y.classList.add("info-title"),f.classList.add("info-text"),y.textContent=`${x}`,f.textContent=`${I}`,m.appendChild(y),m.appendChild(f),p.appendChild(m)}),u.appendChild(i),d.appendChild(u),d.appendChild(p),t.appendChild(d)}),s?s.refresh():s=new O("#gallery a",{captionsData:"alt",captionDelay:250,close:!0,loop:!0})}function D(){const a=document.querySelector(".gallery-item");if(a){const t=a.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}const _=document.querySelector("#search-form"),v=document.querySelector("#search-query"),h=document.querySelector("#gallery"),r=document.querySelector(".loader"),n=document.querySelector(".load-btn");let E;_.addEventListener("submit",async a=>{a.preventDefault(),h.innerHTML="",r.style.display="block",n.style.display="none",r.classList.add("submit-loader");const t=v.value.trim();z();try{const s=await w(t);s.hits.length===0?b.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#fafafb",messageLineHeight:"1.5px",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight"}):(C(s,h,E),n.style.display=s.hits.length===L?"block":"none")}catch(s){console.log(s)}finally{r.classList.remove("submit-loader"),r.style.display="none"}});n.addEventListener("click",async()=>{r.classList.add("load-btn-loader"),r.style.display="block",n.style.display="none";const a=v.value.trim();R();try{const t=await w(a);if(C(t,h,E),t.hits.length<L){b.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",messageLineHeight:"1.5px",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight"}),n.style.display="none",r.style.display="none";return}r.classList.remove("load-btn-loader"),r.style.display="none",n.style.display="block",D()}catch(t){console.log(t)}});
//# sourceMappingURL=index.js.map
