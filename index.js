import{a as y,S as L,i as d}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const g=r=>r.reduce((e,s)=>e+`<li class="gallery-card">
                <a class="gallery-link" href="${s.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${s.webformatURL}"
                  alt="${s.tags}"
                />
                </a>
                <div class="img-info">
                  <ul class="img-info-list">
                     <li class="img-info-item">
                        <span class="img-info-title" >Likes</span>
                        <span class="img-info-number">${s.likes}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Views</span>
                        <span class="img-info-number">${s.views}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Comments</span>
                        <span class="img-info-number">${s.comments}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Downloads</span>
                         <span class="img-info-number">${s.downloads}</span>
                    </li>
                  </ul>
                </div>
            </li>`,""),f=(r,e)=>{const s={key:"44900327-ed76a6d24ccf74b976808d529",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return y.get("https://pixabay.com/api/",{params:s})},p=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),b=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more-btn");let h=new L(".js-gallery a",{captionsData:"alt",captionDelay:250}),l=1,o="";const v=async r=>{try{if(r.preventDefault(),o=r.currentTarget.elements.user_query.value.trim(),o===""){d.warning({message:"The input must be filled in!",position:"topRight"});return}a.innerHTML="",l=1,n.classList.add("is-hidden");const e=await f(o,l);if(e.data.total===0){d.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="",p.reset();return}if(a.innerHTML=g(e.data.hits),h.refresh(),e.data.hits.length<15){n.classList.add("is-hidden"),n.removeEventListener("click",m);return}n.classList.remove("is-hidden"),n.addEventListener("click",m)}catch(e){console.log(e)}finally{b.classList.add("is-hidden")}};p.addEventListener("submit",v);const m=async r=>{try{l++;const e=await f(o,l);if(e.data.hits.length===0){n.classList.add("is-hidden"),n.removeEventListener("click",m),d.warning({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight"});return}const{height:s}=a.firstElementChild.getBoundingClientRect();a.insertAdjacentHTML("beforeend",g(e.data.hits)),h.refresh(),window.scrollBy({top:s*2,behavior:"smooth"})}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
