import{a as v,S as b,i as u}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const p=n=>n.reduce((e,t)=>e+`<li class="gallery-card">
                <a class="gallery-link" href="${t.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${t.webformatURL}"
                  alt="${t.tags}"
                />
                </a>
                <div class="img-info">
                  <ul class="img-info-list">
                     <li class="img-info-item">
                        <span class="img-info-title" >Likes</span>
                        <span class="img-info-number">${t.likes}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Views</span>
                        <span class="img-info-number">${t.views}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Comments</span>
                        <span class="img-info-number">${t.comments}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Downloads</span>
                         <span class="img-info-number">${t.downloads}</span>
                    </li>
                  </ul>
                </div>
            </li>`,""),h=(n,e)=>{const t={key:"44900327-ed76a6d24ccf74b976808d529",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return v.get("https://pixabay.com/api/",{params:t})},g=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),i=document.querySelector(".js-load-more-btn");let y=new b(".js-gallery a",{captionsData:"alt",captionDelay:250}),d=1,c="";const L=()=>{i.insertAdjacentElement("afterend",l)},w=async n=>{try{if(n.preventDefault(),c=n.currentTarget.elements.user_query.value.trim(),g.reset(),c===""){u.warning({message:"The input must be filled in!",position:"topRight"});return}a.innerHTML="",d=1,i.classList.add("is-hidden"),l.classList.remove("is-hidden"),L();const e=await h(c,d);if(e.data.total===0){u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="",g.reset();return}if(a.innerHTML=p(e.data.hits),y.refresh(),e.data.hits.length<15){i.classList.add("is-hidden"),i.removeEventListener("click",o);return}i.classList.remove("is-hidden"),i.addEventListener("click",o)}catch(e){console.log(e)}finally{l.classList.add("is-hidden")}};g.addEventListener("submit",w);const o=async n=>{try{d++,l.classList.remove("is-hidden"),i.classList.add("is-hidden"),i.removeEventListener("click",o),L();const e=await h(c,d);if(e.data.hits.length===0){i.classList.add("is-hidden"),i.removeEventListener("click",o),u.warning({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight"});return}const{height:t}=a.firstElementChild.getBoundingClientRect();a.insertAdjacentHTML("beforeend",p(e.data.hits)),y.refresh(),window.scrollBy({top:t*2,behavior:"smooth"}),i.classList.remove("is-hidden"),i.addEventListener("click",o)}catch(e){console.log(e)}finally{l.classList.add("is-hidden")}};
//# sourceMappingURL=index.js.map
