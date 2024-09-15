import { getPictures } from './create-photo.js';
import {clearComments, renderCommentsPhoto} from './render-comments.js';
import { pressEscapeKey } from './util.js';


const photoModal = document.querySelector('.big-picture');
const urlPhotoModal = photoModal.querySelector('.big-picture__img').querySelector('img');
const cancelPhotoModal = photoModal.querySelector('.big-picture__cancel');
const photoModalSocialCaption = photoModal.querySelector('.social__caption');

const likesPhotoModal = photoModal.querySelector('.likes-count');


const closePhotoModal = () => {
  clearComments();
  photoModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  detachPhotoModal();
};

const handleEscape = (evt) => {
  if (pressEscapeKey) {
    evt.preventDefault();
    closePhotoModal();
  }
};

const attachPhotoModalEvents = () => {
  cancelPhotoModal.addEventListener('click', closePhotoModal);
  document.addEventListener('keydown', handleEscape);
};

function detachPhotoModal () {
  cancelPhotoModal.removeEventListener('click', closePhotoModal);
  document.removeEventListener('keydown', handleEscape);
}

const openPhotoModal = (photoId) => {
  photoModal.classList.remove('hidden');

  const currentPhoto = getPictures.find((photos) => photos.id === Number(photoId));

  urlPhotoModal.src = currentPhoto.url;
  photoModalSocialCaption.textContent = currentPhoto.description;
  likesPhotoModal.textContent = currentPhoto.likes;

  renderCommentsPhoto(currentPhoto.comments);

  document.body.classList.add('modal-open');
  attachPhotoModalEvents();
};


export {openPhotoModal};
