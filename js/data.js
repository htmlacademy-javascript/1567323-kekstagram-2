
const getDataForPhoto = {

  NAMES: [
    'Иван',
    'Артем',
    'Мария',
    'Юля',
    'Макс',
    'Рита',
    'Владимир',
    'Тимур',
    'Евгения',
    'Милана',
    'Роман',
  ],

  DESCRIPTION: [
    'фото у моря',
    'неповторимый отдых',
    'отдых в альпах',
    'первым делом самолеты',
    'просто фото',
    'удачный кадр',
    'ну и фотограф',
    'море, море ...',
  ],

  MESSAGES: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ],

};

const getConstantDataForPhoto = {

  showingPhotos: {
    LENGTH: 25
  },

  photoId: {
    MIN: 1,
    MAX: 25,
  },

  photoUrl: {
    MIN: 1,
    MAX: 25,
  },

  likes: {
    MIN: 15,
    MAX: 200,
  },

  commentsId: {
    MIN: 1,
    MAX: 1000,
  },

};

export {
  getDataForPhoto,
  getConstantDataForPhoto,
};
