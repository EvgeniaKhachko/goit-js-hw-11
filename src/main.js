
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {fetchImages} from "./js/pixabay-api.js";
import {showGallery} from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();

    document.querySelector('.loader').style.display = 'inline-block';

    const query = document.querySelector('input').value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }
  
  fetchImages(query)
    .then(data => {
      if (data.totalHits && (data.totalHits)>0) {
        const imagesForDisplay = data.hits; 
        document.querySelector('.loader').style.display = 'none';
        showGallery(imagesForDisplay);
      }
    })
    .catch(error => {
      console.log(error.message);
    });

});
