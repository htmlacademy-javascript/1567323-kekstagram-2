import { getPhotosArray } from './create-photo.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const containerPicture = document.querySelector('.pictures');

const getPicture = getPhotosArray();

const fragment = document.createDocumentFragment();

getPicture.forEach((photo) => {

  const photoClone = templatePicture.cloneNode(true);
  const image = photoClone.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  photoClone.querySelector('.picture__comments').textContent = photo.comments.length;
  photoClone.querySelector('.picture__likes').textContent = photo.likes;

  fragment.appendChild(photoClone);
});

containerPicture.appendChild(fragment);

/*
2. На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

Адрес изображения url подставьте как атрибут src изображения.
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.


3. Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

4. Подключите модуль в проект.

*/
