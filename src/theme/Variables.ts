/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from './theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  primary: '#1A99BD',
  secondary: '#4F8794',
  secondary_4D8C99: '#4D8C99',
  secondary_background: '#E8F2F2',
  tertiary: '#0D171C',
  text: '#0D171C',
  white: '#ffffff',
  white_text: '#F7FAFA',
  background: '#F7FAFC',
  black: '#000000',
  blur: '#00000090',
  accent: '#EF4444',
  error: '#dc3545',
  red: '#EE1111',
  yellow: 'yellow',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  // primary: Colors.purple_5B127E,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const little = 5;
const tiny = 10;
const xTiny = 15;
const small = tiny * 2; // 20
const medium = 25;
const regular = tiny * 3; // 30
const sRegular = 35;
const xRegular = 40;
const xxRegular = 50;
const large = regular * 2; // 60
const xLarge = xRegular * 2; // 60
export const MetricsSizes = {
  little,
  tiny,
  xTiny,
  small,
  medium,
  regular,
  sRegular,
  xRegular,
  xxRegular,
  large,
  xLarge,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
