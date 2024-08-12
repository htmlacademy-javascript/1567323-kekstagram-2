// eslint-disable-next-line no-unused-vars
const NAMES = [
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
];

// eslint-disable-next-line no-unused-vars
const DESCRIPTION = [
  'фото у моря',
  'неповторимый отдых',
  'отдых в альпах',
  'первым делом самолеты',
  'просто фото',
  'удачный кадр',
  'ну и фотограф',
];

// eslint-disable-next-line no-unused-vars
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const showingPhotos = {
  LENGTH: 25,
};

const photoId = {
  MIN: 1,
  MAX: 25,
};

const photoUrl = {
  MIN: 1,
  MAX: 25,
};

const likes = {
  MIN: 15,
  MAX: 200,
};

const commentsId = {
  MIN: 0,
  MAX: 999,
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger (min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getPhotoId = createRandomIdFromRangeGenerator(photoId.MIN, photoId.MAX);
const getPhotoUrl = createRandomIdFromRangeGenerator(photoUrl.MIN, photoUrl.MAX);
const getCommentsId = createRandomIdFromRangeGenerator(commentsId.MIN, commentsId.MAX);


const getMessages = function () {
  const messagesCounter = getRandomInteger(1, 2);
  let message = getRandomArrayElement(MESSAGES);

  if (messagesCounter > 1) {
    message = MESSAGES.sort(() => Math.random() - 0.5).slice(0, 2);
    return message.join(' ');
  }

  return message;
};

getMessages();


const createComments = function () {
  const userComments = [];
  const commentsCounter = getRandomInteger(0, 30);

  for (let i = 0; i < commentsCounter; i++) {
    const comments = {
      id: getCommentsId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message:   getMessages(),
      name: getRandomArrayElement(NAMES),
    };
    userComments.push(comments);
  }

  return userComments;
};


const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getPhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: createComments(),
});

const photosArray = Array.from({length: showingPhotos.LENGTH}, createPhoto);

//eslint-disable-next-line
console.log(photosArray);
