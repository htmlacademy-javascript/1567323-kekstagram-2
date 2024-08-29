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

/*
2. На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.


3. Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

4. Подключите модуль в проект.

*/
