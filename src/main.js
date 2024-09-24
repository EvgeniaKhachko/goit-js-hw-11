
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {fetchImages} from "./js/pixabay-api.js";
import {showGallery} from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();

    document.querySelector('.loader').style.display = 'block';

    const query = document.querySelector('input').value.trim();

  if (query === '') {
    document.querySelector('.loader').style.display = 'none';
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
        console.log(imagesForDisplay);
        showGallery(imagesForDisplay);
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      document.querySelector('.loader').style.display = 'none';
    })
    .catch(error => {
      document.querySelector('.loader').style.display = 'none';
      console.log(error.message);
    });

});
