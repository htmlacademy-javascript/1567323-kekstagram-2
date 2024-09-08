import { getPictures } from './create-photo.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const containerPictures = document.querySelector('.pictures');

const renderPictures = () => {
  const thumbnailsFragment = document.createDocumentFragment();

  getPictures.forEach(({id, url, comments, likes}) => {

    const thumbnailPhoto = templatePicture.cloneNode(true);

    thumbnailPhoto.dataset.photoId = id;
    thumbnailPhoto.querySelector('.picture__img').src = url;
    thumbnailPhoto.querySelector('.picture__comments').textContent = comments.length;
    thumbnailPhoto.querySelector('.picture__likes').textContent = likes;

    thumbnailsFragment.append(thumbnailPhoto);
  });

  containerPictures.append(thumbnailsFragment);
};

export {containerPictures,
  renderPictures
};
