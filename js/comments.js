import { getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement } from './util.js';
import { getDataForPhoto, getConstantDataForPhoto } from './data.js';

const MAX_COMMENT_LENGTH = 140;
const ERROR_MESSAGE_COMMENT = `длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`;

const {NAMES, MESSAGES} = getDataForPhoto;
const {commentsId} = getConstantDataForPhoto;


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

const createComments = function () {
  const commentsCounter = getRandomInteger(0, 30);
  const userComments = [];

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


const isValidComment = (value) => value.length <= MAX_COMMENT_LENGTH;


export {
  createComments,
  isValidComment,
  ERROR_MESSAGE_COMMENT,
};
