import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement } from './util.js';
import { getConstantDataForPhoto, getDataForPhoto } from './data.js';
import { createComments } from './comments.js';


const {DESCRIPTION} = getDataForPhoto;
const {photoId, photoUrl, likes, showingPhotos} = getConstantDataForPhoto;

const getPhotoId = createRandomIdFromRangeGenerator(photoId.MIN, photoId.MAX);
const getPhotoUrl = createRandomIdFromRangeGenerator(photoUrl.MIN, photoUrl.MAX);

const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: createComments(),
});

const getPhotosArray = () => Array.from({length: showingPhotos.LENGTH}, createPhoto);

export { getPhotosArray };
