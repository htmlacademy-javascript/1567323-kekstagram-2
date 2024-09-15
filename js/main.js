import { containerPictures, renderPictures } from './thumbnails.js';
import { openPhotoModal } from './photo-modal.js';
import { openPhotoEditor } from './photo-upload-form.js';


renderPictures();


containerPictures.addEventListener('click', (evt) => {
  const currentPhoto = evt.target.closest('.picture');

  if (currentPhoto) {
    openPhotoModal(currentPhoto.dataset.photoId);
  }
});

openPhotoEditor();
