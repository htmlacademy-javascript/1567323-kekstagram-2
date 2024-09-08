import { getPictures } from './create-photo.js';


const photoModal = document.querySelector('.big-picture');
const urlPhotoModal = photoModal.querySelector('.big-picture__img').querySelector('img');
const cancelPhotoModal = photoModal.querySelector('.big-picture__cancel');
const photoModalSocialCaption = photoModal.querySelector('.social__caption');

const likesPhotoModal = photoModal.querySelector('.likes-count');

const commentsPhotoModal = photoModal.querySelector('.social__comments');
const commentPhotoModal = photoModal.querySelector('.social__comment');
const socialCommentCount = photoModal.querySelector('.social__comment-count');
const commentShowPhotoModal = photoModal.querySelector('.social__comment-shown-count');
const commentTotalPhotoModal = photoModal.querySelector('.social__comment-total-count');
const commentsLoader = photoModal.querySelector('.comments-loader');


const closePhotoModal = () => {
  photoModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  detachPhotoModal();
};

const handleEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoModal();
  }
};

const attachModalPhotoEvents = () => {
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
  commentShowPhotoModal.textContent = currentPhoto.comments;
  commentTotalPhotoModal.textContent = currentPhoto.comments;
  commentsPhotoModal.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialComment = commentPhotoModal.cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsPhotoModal.append(socialComment);
  });

  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  attachModalPhotoEvents();
};


export {openPhotoModal};
