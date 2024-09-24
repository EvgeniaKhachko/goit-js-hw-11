import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function f(s){const o="https://pixabay.com/api/",n={key:"46129097-db92c21a9f578a732dd89224e",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(n);return(await fetch([o,e].join("?"))).json()}function y(s){let o="";return s.forEach(t=>{o+=`
      <a class="gallery__item" href="${t.largeImageURL}">
      <figure class="gallery__figure">
        <img class="gallery__img" src="${t.webformatURL}" alt="${t.tags}" loading="lazy">
        <figcaption class="gallery__figcaption">
          <div class="gallery__caption">Likes: ${t.likes}</div>
          <div class="gallery__caption">Views: ${t.views}</div>
          <div class="gallery__caption">Comments: ${t.comments}</div>
          <div class="gallery__caption">Downloads: ${t.downloads}</div>
    </figcaption>
      </figure>
    </a>`}),o}const c=document.querySelector(".gallery"),m=new d(".gallery .gallery__item"),i=document.querySelector(".loader"),u=document.querySelector("input");document.querySelector(".feedback-form").addEventListener("submit",function(s){s.preventDefault(),i.style.display="block";const o=u.value.trim();if(o===""){i.style.display="none",l.error({title:"Error",message:"Please enter a search query!"});return}c.innerHTML="",u.value="",f(o).then(t=>{if(t.totalHits&&t.totalHits>0){const n=t.hits,e=y(n);c.innerHTML=e,m.refresh()}else l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});i.style.display="none"}).catch(t=>{i.style.display="none",console.log(t.message)})});
//# sourceMappingURL=index.js.map
