import{a as b,S as C,i as a}from"./assets/vendor-xpOxgMII.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const L="https://pixabay.com/api/",y=async(i,o=1)=>(await b.get(L,{params:{key:"54455311-030751af506b74e799c74bea1",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}})).data,h=document.querySelector(".loader"),g=document.querySelector(".gallery"),m=document.querySelector(".load-more");let d=null;const v=i=>{const o=i.map(t=>`
<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" width="360" height="200" />
        <div class="gallery-item-info"> 
            <div class="info-cell">
                <div class="info-cell-title">Likes</div>
                <span> ${t.likes}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Views</div>
                <span> ${t.views}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Comments</div>
                <span> ${t.comments}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Downloads</div>
                <span> ${t.downloads}</span>
            </div>   
        </div>    
    </a>
</li>`).join("");g.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new C(".gallery a")},w=()=>{g.innerHTML=""},F=()=>{h.hidden=!1},n=()=>{h.hidden=!0},B=()=>{m.hidden=!1},f=()=>{m.hidden=!0},p=document.querySelector(".form"),S=document.querySelector(".load-more");let u="",l=1;p.addEventListener("submit",async i=>{i.preventDefault();const t=p.querySelector("input[name='search-text']").value.trim();if(t){w(),f(),F(),u="",l=1;try{const s=await y(t,1),e=s.hits;if(n(),u=t,!Array.isArray(e)||!e.length){a.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconColor:"#fff",messageColor:"#fafafb",titleColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"});return}v(e),s.totalHits>=15?B():(f(),a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){n(),a.error({title:"Unknown error",message:s.message,position:"topRight",iconColor:"#fff",messageColor:"#fafafb",titleColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"})}}});S.addEventListener("click",async i=>{i.preventDefault(),F(),f(),l+=1;try{const o=await y(u,l),t=o.hits;if(n(),!Array.isArray(t)||!t.length){a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}v(t);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:e*2,behavior:"smooth"}),o.totalHits<=15*l){a.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}B()}catch(o){n(),a.error({title:"Unknown error",message:o.message,position:"topRight",iconColor:"#fff",messageColor:"#fafafb",titleColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"})}});
//# sourceMappingURL=index.js.map
