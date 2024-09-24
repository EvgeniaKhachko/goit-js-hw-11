import{i}from"./assets/vendor-17o45ynk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function a(l){const t="https://pixabay.com/api/",s={key:"46129097-db92c21a9f578a732dd89224e",q:encodeURIComponent(l),image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(s);return(await fetch([t,e].join("?"))).json()}function c(l){let t="";l.forEach(e=>{t+=`
      <a class="gallery__item" href="${e.largeImageURL}">
      <figure class="gallery__figure">
        <img class="gallery__img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        <figcaption class="gallery__figcaption">
          <div class="gallery__caption">Likes: ${e.likes}</div>
          <div class="gallery__caption">Views: ${e.views}</div>
          <div class="gallery__caption">Comments: ${e.comments}</div>
          <div class="gallery__caption">Downloads: ${e.downloads}</div>
    </figcaption>
      </figure>
    </a>`});const o=document.querySelector(".gallery");o.innerHTML+=t,new SimpleLightbox(".gallery .gallery__item").refresh()}document.querySelector(".feedback-form").addEventListener("submit",function(l){l.preventDefault(),document.querySelector(".loader").style.display="block";const t=document.querySelector("input").value.trim();if(t===""){document.querySelector(".loader").style.display="none",i.error({title:"Error",message:"Please enter a search query!"});return}a(t).then(o=>{if(o.totalHits&&o.totalHits>0){const s=o.hits;console.log(s),c(s)}else i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});document.querySelector(".loader").style.display="none"}).catch(o=>{document.querySelector(".loader").style.display="none",console.log(o.message)})});
//# sourceMappingURL=index.js.map
