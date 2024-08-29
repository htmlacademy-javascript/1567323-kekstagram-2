import { getPhotosArray } from './create-photo.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const containerPicture = document.querySelector('.pictures');

const getPictures = getPhotosArray();

const thumbnailsFragment = document.createDocumentFragment();

getPictures.forEach((photo) => {

  const thumbnailPhoto = templatePicture.cloneNode(true);
  const image = thumbnailPhoto.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnailPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnailPhoto.querySelector('.picture__likes').textContent = photo.likes;

  thumbnailsFragment.appendChild(thumbnailPhoto);
});

containerPicture.appendChild(thumbnailsFragment);
