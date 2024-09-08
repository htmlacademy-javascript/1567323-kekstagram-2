import {containerPictures, renderPictures} from './thumbnails.js';
import {openPhotoModal} from './photo-modal.js';

renderPictures();

containerPictures.addEventListener('click', (evt) => {
  const currentPhoto = evt.target.closest('.picture');

  if (currentPhoto) {
    openPhotoModal(currentPhoto.dataset.photoId);
  }
});
