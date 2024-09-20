const SCALE_STEP = 0.25;

const scaleControlValue = document.querySelector('.scale__control--value');
const previewPhoto = document.querySelector('.img-upload__preview img');

let scaleValue = 1;
const scalePreviewPhoto = (scale) => {
  previewPhoto.style.transform = `scale(${scale})`;
  scaleControlValue.value = `${scale * 100}%`;
};

const onScaleSmaller = () => {
  if (scaleValue > SCALE_STEP) {
    scaleValue -= SCALE_STEP;
    // previewPhoto.style.transform = `scale(${scale})`;
    // scaleControlValue.value = `${scale * 100}%`;
    scalePreviewPhoto(scaleValue);
  }
};

const onScaleBigger = () => {
  if (scaleValue < 1) {
    scaleValue += SCALE_STEP;
    // previewPhoto.style.transform = `scale(${scale})`;
    // scaleControlValue.value = `${scale * 100}%`;
    scalePreviewPhoto(scaleValue);
  }
};

const resetScaleControlValue = () => {
  scaleValue = 1;
  scalePreviewPhoto(scaleValue);
  previewPhoto.classList.remove('transform');
};


export {
  onScaleSmaller,
  onScaleBigger,
  resetScaleControlValue,
};

