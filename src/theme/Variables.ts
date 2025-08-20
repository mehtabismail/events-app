/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { mS } from '@/utils/functions';
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
  textinput_background: '#E8F0F2',
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
  tiny: mS(14),
  small: mS(16),
  regular: mS(20),
  large: mS(40),
};

/**
 * Metrics Sizes
 */
const little = mS(5);
const xLittle = mS(8);
const tiny = mS(10);
const gap = mS(12);
const xTiny = mS(15);
const small = tiny * 2; // 20
const medium = mS(25);
const regular = tiny * 3; // 30
const sRegular = mS(35);
const xRegular = mS(40);
const xxRegular = mS(50);
const large = regular * 2; // 60
const xLarge = xRegular * 2; // 60
export const MetricsSizes = {
  little,
  xLittle,
  tiny,
  gap,
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
