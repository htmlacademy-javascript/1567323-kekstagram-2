
const MAX_HASHTAGS_QUANTITY = 5;
const MAX_HASHTAGS_LENGTH = 20;

let errorMessage = '';

const hashtagHasError = () => errorMessage;

const isValidHashtag = (value) => {
  errorMessage = '';

  const inputValue = value.toLowerCase().trim();
  const regExp = /^[#a-zа-яё0-9]{1,19}$/i;

  if (inputValue.length === 0) {
    return true;
  }

  const hashtagsArray = inputValue.split(/\s+/);
  if (hashtagsArray.some((item) => item === '#')) {
    errorMessage = 'Хэштег не может состоять только из одной решётки';
  }
  if (hashtagsArray.some((item) => item.slice(1).includes('#'))) {
    errorMessage = 'Хэштеги разделяются пробелами';
  }
  if (hashtagsArray.some((item) => item[0] !== '#')) {
    errorMessage = 'Хэштег начинается с символа # (решётка)';
  }
  if (hashtagsArray.some((item, index, array) => array.includes(item, index + 1))) {
    errorMessage = 'Один и тот же хэштег не может быть использован дважды';
  }
  if (hashtagsArray.some((item) => item.length > MAX_HASHTAGS_LENGTH)) {
    errorMessage = `Максимальная длина одного хештега ${MAX_HASHTAGS_LENGTH}, включая решётку`;
  }
  if (hashtagsArray.length > MAX_HASHTAGS_QUANTITY) {
    errorMessage = `Нельзя указать больше ${MAX_HASHTAGS_QUANTITY} хэштегов`;
  }
  if (hashtagsArray.some((item) => !regExp.test(item))) {
    errorMessage = 'Хэштег содержит недопустимые символы';
  }
};


export {
  hashtagHasError,
  isValidHashtag
};
