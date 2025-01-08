import{a as f,S as L,i as d}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const g=r=>r.reduce((e,t)=>e+`<li class="gallery-card">
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
            </li>`,"");f.defaults.baseURL="https://pixabay.com";const p=(r,e)=>{const t={key:"44900327-ed76a6d24ccf74b976808d529",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return f.get("/api",{params:t})},h=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),b=document.querySelector(".js-loader"),a=document.querySelector(".js-load-more-btn");let y=new L(".js-gallery a",{captionsData:"alt",captionDelay:250}),l=1,o="";const v=async r=>{try{if(r.preventDefault(),o=r.currentTarget.elements.user_query.value.trim(),o===""){d.warning({message:"The input must be filled in!",position:"topRight"});return}n.innerHTML="",l=1,a.classList.add("is-hidden");const e=await p(o,l);if(e.data.total===0){d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",h.reset();return}if(n.innerHTML=g(e.data.hits),y.refresh(),e.data.hits.length<15){a.classList.add("is-hidden"),a.removeEventListener("click",m);return}a.classList.remove("is-hidden"),a.addEventListener("click",m)}catch(e){console.log(e)}finally{b.classList.add("is-hidden")}};h.addEventListener("submit",v);const m=async r=>{try{l++;const e=await p(o,l);if(e.data.hits.length===0){a.classList.add("is-hidden"),a.removeEventListener("click",m),d.warning({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight"});return}n.insertAdjacentHTML("beforeend",g(e.data.hits)),y.refresh()}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
