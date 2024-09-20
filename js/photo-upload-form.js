import { pressEscapeKey } from './util.js';
import { isValidComment, ERROR_MESSAGE_COMMENT } from './comments.js';
import { isValidHashtag, hashtagHasError } from './hashtag-validation.js';
import { onScaleSmaller, onScaleBigger } from './scale-photo.js';
import { resetScaleControlValue } from './scale-photo.js';
import { resetFilrterEffectSlider } from './effects-photo.js';


const photoUploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = photoUploadForm.querySelector('.img-upload__input');
const imageEditorForm = photoUploadForm.querySelector('.img-upload__overlay');
const closeUploadForm = imageEditorForm.querySelector('.img-upload__cancel');

const btnScaleControlSmaller = photoUploadForm.querySelector('.scale__control--smaller');
const btnScaleControlBigger = photoUploadForm.querySelector('.scale__control--bigger');

const hashtagsUploadForm = photoUploadForm.querySelector('.text__hashtags');
const commentUploadForm = photoUploadForm.querySelector('.text__description');


const closePhotoEditor = () => {
  imageEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  detachUploadFormEvents();
  resetScaleControlValue();
  uploadFileControl.value = '';
  resetFilrterEffectSlider();
};

const handleEscape = (evt) => {
  if (pressEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagsUploadForm || document.activeElement === commentUploadForm) {
      evt.stopPropagation();
    } else {
      photoUploadForm.reset();
      closePhotoEditor();
    }
  }
};

const attachUploadFormEvents = () => {
  closeUploadForm.addEventListener('click', closePhotoEditor);
  document.addEventListener('keydown', handleEscape);
};

function detachUploadFormEvents () {
  closeUploadForm.removeEventListener('click', closePhotoEditor);
  document.removeEventListener('keydown', handleEscape);
}

const openPhotoEditor = () => {
  uploadFileControl.addEventListener('change', () => {
    imageEditorForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    attachUploadFormEvents();
  });
};


btnScaleControlSmaller.addEventListener('click', onScaleSmaller);
btnScaleControlBigger.addEventListener('click', onScaleBigger);

const pristine = new Pristine(photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    hashtagsUploadForm.value = hashtagsUploadForm.value.replaceAll(/\s+/g, ' ');
    photoUploadForm.submit();
  }
};

pristine.addValidator(hashtagsUploadForm, isValidHashtag, hashtagHasError);
pristine.addValidator(commentUploadForm, isValidComment, ERROR_MESSAGE_COMMENT);

photoUploadForm.addEventListener('submit', onFormSubmit);


export {openPhotoEditor};
