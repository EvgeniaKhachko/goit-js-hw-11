export async function fetchImages(searchString)
{
    const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '46129097-db92c21a9f578a732dd89224e'; 
    const requestParams = {
      key: API_KEY,
      q: encodeURIComponent(searchString),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
    };
    const encodedParams = new URLSearchParams(requestParams);
    const response = await fetch([API_URL, encodedParams].join('?'));

    return response.json();
}