// Import all SVG icons at ./assets
import accessibilityIcon from './assets/icon-accessibility.svg';
import correctIcon from './assets/icon-correct.svg';
import cssIcon from './assets/icon-css.svg';
import errorIcon from './assets/icon-error.svg';
import htmlIcon from './assets/icon-html.svg';
import incorrectIcon from './assets/icon-incorrect.svg';
import jsIcon from './assets/icon-js.svg';
import moonDarkIcon from './assets/icon-moon-dark.svg';
import moonLightIcon from './assets/icon-moon-light.svg';
import sunDarkIcon from './assets/icon-sun-dark.svg';
import sunLightIcon from './assets/icon-sun-light.svg';
// Importar iconos que faltan (mocks para fines de compilación) 
// TODO: Reemplazar estos con los iconos reales cuando estén disponibles
const arrowRightIcon = '/placeholder-icon.svg';
const arrowLeftIcon = '/placeholder-icon.svg';
const arrowUpIcon = '/placeholder-icon.svg';
const arrowDownIcon = '/placeholder-icon.svg';
const arrowRightSmallIcon = '/placeholder-icon.svg';
const arrowLeftSmallIcon = '/placeholder-icon.svg';
const arrowUpSmallIcon = '/placeholder-icon.svg';
const arrowDownSmallIcon = '/placeholder-icon.svg';
const starIcon = '/placeholder-icon.svg';
const heartIcon = '/placeholder-icon.svg';
const checkIcon = '/placeholder-icon.svg';
const crossIcon = '/placeholder-icon.svg';
const infoIcon = '/placeholder-icon.svg';
const warningIcon = '/placeholder-icon.svg';

export const iconsNames = {
  'accessibility': accessibilityIcon,
  'correct': correctIcon,
  'css': cssIcon,
  'error': errorIcon,
  'html': htmlIcon,
  'incorrect': incorrectIcon,
  'js': jsIcon,
  'moon-dark': moonDarkIcon,
  'moon-light': moonLightIcon,
  'sun-dark': sunDarkIcon,
  'sun-light': sunLightIcon,
  'arrow-right': arrowRightIcon,
  'arrow-left': arrowLeftIcon,
  'arrow-up': arrowUpIcon,
  'arrow-down': arrowDownIcon,
  'arrow-right-small': arrowRightSmallIcon,
  'arrow-left-small': arrowLeftSmallIcon,
  'arrow-up-small': arrowUpSmallIcon,
  'arrow-down-small': arrowDownSmallIcon,
  'star': starIcon,
  'heart': heartIcon,
  'check': checkIcon,
  'cross': crossIcon,
  'info': infoIcon,
  'warning': warningIcon
} as const;
