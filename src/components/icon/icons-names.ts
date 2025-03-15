// Import all SVG icons at ./assets
import accessibilityIcon from './assets/icon-accessibility.svg';
import correctIcon from './assets/icon-correct.svg';
import incorrectIcon from './assets/icon-incorrect.svg';
import sunLightIcon from './assets/icon-sun-light.svg';
import sunDarkIcon from './assets/icon-sun-dark.svg';
import moonLightIcon from './assets/icon-moon-light.svg';
import moonDarkIcon from './assets/icon-moon-dark.svg';
import jsIcon from './assets/icon-js.svg';
import htmlIcon from './assets/icon-html.svg';
import cssIcon from './assets/icon-css.svg';
import errorIcon from './assets/icon-error.svg';

export const iconsNames = {
  'accessibility': accessibilityIcon,
  'correct': correctIcon,
  'incorrect': incorrectIcon,
  'sun-light': sunLightIcon,
  
  'moon-light': moonLightIcon,
  'moon-dark': moonDarkIcon,
  'sun-dark': sunDarkIcon,
  'arrow-right': sunLightIcon,
  'arrow-left': sunLightIcon,
  'arrow-up': sunLightIcon,
  'arrow-down': sunLightIcon,
  'arrow-right-small': sunLightIcon,
  'arrow-left-small': sunLightIcon,
  'arrow-up-small': sunLightIcon,
  'arrow-down-small': sunLightIcon,
  'star': sunLightIcon,
  'heart': sunLightIcon,
  'check': correctIcon,
  'cross': incorrectIcon,
  'warning': incorrectIcon,
  'icon-js': jsIcon,
  'icon-html': htmlIcon,
  'icon-css': cssIcon,
  'icon-error': errorIcon,
} as const;
