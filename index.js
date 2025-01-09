import{a as b,S as v,i as m}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&g(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function g(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const f=r=>r.reduce((e,s)=>e+`<li class="gallery-card">
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
            </li>`,""),p=(r,e)=>{const s={key:"44900327-ed76a6d24ccf74b976808d529",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return b.get("https://pixabay.com/api/",{params:s})},h=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),o=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more-btn");let y=new v(".js-gallery a",{captionsData:"alt",captionDelay:250}),c=1,l="";const L=()=>{n.insertAdjacentElement("afterend",o)},w=async r=>{try{if(r.preventDefault(),l=r.currentTarget.elements.user_query.value.trim(),l===""){m.warning({message:"The input must be filled in!",position:"topRight"});return}a.innerHTML="",c=1,n.classList.add("is-hidden"),o.classList.remove("is-hidden"),L();const e=await p(l,c);if(e.data.total===0){m.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="",h.reset();return}if(a.innerHTML=f(e.data.hits),y.refresh(),e.data.hits.length<15){n.classList.add("is-hidden"),n.removeEventListener("click",u);return}n.classList.remove("is-hidden"),n.addEventListener("click",u)}catch(e){console.log(e)}finally{o.classList.add("is-hidden")}};h.addEventListener("submit",w);const u=async r=>{try{c++,o.classList.remove("is-hidden"),L();const e=await p(l,c);if(e.data.hits.length===0){n.classList.add("is-hidden"),n.removeEventListener("click",u),m.warning({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight"});return}const{height:s}=a.firstElementChild.getBoundingClientRect();a.insertAdjacentHTML("beforeend",f(e.data.hits)),y.refresh(),window.scrollBy({top:s*2,behavior:"smooth"})}catch(e){console.log(e)}finally{o.classList.add("is-hidden")}};
//# sourceMappingURL=index.js.map
