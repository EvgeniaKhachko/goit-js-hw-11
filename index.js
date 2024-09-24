import{i as n}from"./assets/vendor-17o45ynk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function c(s){const r="https://pixabay.com/api/",i={key:"46129097-db92c21a9f578a732dd89224e",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(i);return(await fetch([r,e].join("?"))).json()}function a(s){console.log(s);let r="";s.forEach(e=>{r+=`
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
    </a>`});const o=document.querySelector(".gallery");o.innerHTML+=r,new SimpleLightbox(".gallery .gallery__item").refresh()}document.querySelector(".feedback-form").addEventListener("submit",function(s){s.preventDefault(),document.querySelector(".loader").style.display="inline-block";const r=document.querySelector("input").value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search query!"});return}c(r).then(o=>{if(o.totalHits&&o.totalHits>0){const i=o.hits;document.querySelector(".loader").style.display="none",a(i)}}).catch(o=>{console.log(o.message)})});
//# sourceMappingURL=index.js.map
