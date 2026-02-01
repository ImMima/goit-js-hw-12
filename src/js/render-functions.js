import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

let lightBox = null;

export const createGallery = images => {
  const list = images
    .map(
      image => `
<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" width="360" height="200" />
        <div class="gallery-item-info"> 
            <div class="info-cell">
                <div class="info-cell-title">Likes</div>
                <span> ${image.likes}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Views</div>
                <span> ${image.views}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Comments</div>
                <span> ${image.comments}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Downloads</div>
                <span> ${image.downloads}</span>
            </div>   
        </div>    
    </a>
</li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', list);

  if (lightBox) {
    lightBox.refresh();
  } else {
    lightBox = new SimpleLightBox('.gallery a');
  }
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};
export const showLoader = () => {
  loader.hidden = false;
};
export const hideLoader = () => {
  loader.hidden = true;
};
export const showLoadMoreButton = () => {
  loadMore.hidden = false;
};
export const hideLoadMoreButton = () => {
  loadMore.hidden = true;
};
