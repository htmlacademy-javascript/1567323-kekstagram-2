import { usedEffect } from './effects-photo-const.js';


const photoUploadForm = document.querySelector('.img-upload__form');
const effectSlider = photoUploadForm.querySelector('.effect-level__slider');
const effectSliderLevel = photoUploadForm.querySelector('.effect-level__value');
const effectSliderContainer = photoUploadForm.querySelector('.img-upload__effect-level');
const previewPhoto = photoUploadForm.querySelector('.img-upload__preview img');
const effectSliderRadioBtns = photoUploadForm.querySelectorAll('.effects__radio');
const effectsListSlider = photoUploadForm.querySelector('.effects__list');


effectSliderContainer.classList.add('hidden');

noUiSlider.create(effectSlider, {
  start: 1,
  step: 0.1,
  range: {
    min: 0,
    max: 1,
  },
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectSliderLevel.value = effectSlider.noUiSlider.get(true);
});

const resetFilrterEffectSlider = () => {
  effectSliderContainer.classList.add('hidden');
  previewPhoto.style.filter = usedEffect['none'];
};

const getEffectPhoto = () => {
  effectSliderRadioBtns.forEach((effectRadioBtn) => {
    const effectValue = effectRadioBtn.value;
    const effectName = usedEffect[effectValue];

    if (effectRadioBtn.checked) {
      if (effectValue !== 'none') {
        effectSliderContainer.classList.remove('hidden');
        effectSlider.noUiSlider.updateOptions({
          range: {
            min: effectName.MIN,
            max: effectName.MAX,
          },
          start: effectName.START,
          step: effectName.STEP,
        });
        effectSlider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `${effectName.EFFECT}(${effectSliderLevel.value}${effectName.UNIT_STEP})`;
        });
      } else {
        resetFilrterEffectSlider();
      }
    }
  });
};

effectsListSlider.addEventListener('change', getEffectPhoto);

export {resetFilrterEffectSlider};
