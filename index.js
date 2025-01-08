import{S as m,i as l}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const u=r=>r.reduce((s,e)=>s+`<li class="gallery-card">
                <a class="gallery-link" href="${e.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${e.webformatURL}"
                  alt="${e.tags}"
                />
                </a>
                <div class="img-info">
                  <ul class="img-info-list">
                     <li class="img-info-item">
                        <span class="img-info-title" >Likes</span>
                        <span class="img-info-number">${e.likes}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Views</span>
                        <span class="img-info-number">${e.views}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Comments</span>
                        <span class="img-info-number">${e.comments}</span>
                    </li>
                    <li class="img-info-item">
                        <span class="img-info-title" >Downloads</span>
                         <span class="img-info-number">${e.downloads}</span>
                    </li>
                  </ul>
                </div>
            </li>`,""),f=r=>fetch(`https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),g=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader");let p=new m(".js-gallery a",{captionsData:"alt",captionDelay:250});const d=r=>{r.preventDefault();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){l.warning({message:"The input must be filled in!",position:"topRight"});return}o.innerHTML="",c.classList.remove("is-hidden"),f(s).finally(()=>{c.classList.add("is-hidden")}).then(e=>{if(console.log(e),e.total===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.innerHTML="";return}o.innerHTML=u(e.hits),p.refresh()}).catch(e=>{console.log(e)})};g.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
