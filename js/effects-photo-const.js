const usedEffect = {
  none: {
    EFFECT: 'none',
  },

  chrome: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    EFFECT: 'grayscale',
    UNIT_STEP: '',
  },

  sepia: {
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    EFFECT: 'sepia',
    UNIT_STEP: '',
  },

  marvin: {
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    EFFECT: 'invert',
    UNIT_STEP: '%',
  },

  phobos: {
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    EFFECT: 'blur',
    UNIT_STEP: 'px',
  },

  heat: {
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    EFFECT: 'brightness',
    UNIT_STEP: '',
  },
};


export {usedEffect};
