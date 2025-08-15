/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import fonts from './assets/fonts';
import { ThemeVariables } from './theme';
import { mS } from '@/utils/functions';
export default function ({ Colors }: ThemeVariables) {
  return StyleSheet.create({
    PLUSJAKARTASANS_BOLD_22: {
      fontFamily: fonts.PLUSJAKARTASANS_BOLD,
      fontSize: mS(22),
      lineHeight: mS(28),
      color: Colors.text,
    },
    PLUSJAKARTASANS_BOLD_18: {
      fontFamily: fonts.PLUSJAKARTASANS_BOLD,
      fontSize: mS(18),
      lineHeight: mS(23),
      color: Colors.text,
    },
    PLUSJAKARTASANS_BOLD_16: {
      fontFamily: fonts.PLUSJAKARTASANS_BOLD,
      fontSize: mS(16),
      lineHeight: mS(24),
      color: Colors.white_text,
    },
    PLUSJAKARTASANS_REGULAR_16: {
      fontFamily: fonts.PLUSJAKARTASANS_REGULAR,
      fontSize: mS(16),
      lineHeight: mS(24),
      color: Colors.text,
    },
    PLUSJAKARTASANS_MEDIUM_16: {
      fontFamily: fonts.PLUSJAKARTASANS_MEDIUM,
      fontSize: mS(16),
      lineHeight: mS(24),
      color: Colors.text,
    },
    PLUSJAKARTASANS_BOLD_14: {
      fontFamily: fonts.PLUSJAKARTASANS_BOLD,
      fontSize: mS(14),
      lineHeight: mS(21),
      color: Colors.secondary,
    },
    PLUSJAKARTASANS_MEDIUM_14: {
      fontFamily: fonts.PLUSJAKARTASANS_MEDIUM,
      fontSize: mS(14),
      lineHeight: mS(21),
      color: Colors.secondary,
    },
    PLUSJAKARTASANS_REGULAR_14: {
      fontFamily: fonts.PLUSJAKARTASANS_REGULAR,
      fontSize: mS(14),
      lineHeight: mS(21),
      color: Colors.secondary,
    },
    PLUSJAKARTASANS_BOLD_13: {
      fontFamily: fonts.PLUSJAKARTASANS_BOLD,
      fontSize: mS(13),
      lineHeight: mS(20),
      color: Colors.white_text,
    },
    PLUSJAKARTASANS_MEDIUM_12: {
      fontFamily: fonts.PLUSJAKARTASANS_MEDIUM,
      fontSize: mS(12),
      lineHeight: mS(18),
      color: Colors.secondary,
    },
    boldWeight: {
      fontWeight: 'bold',
    },
    lightWeight: {
      fontWeight: '200',
    },
    regularWeight: { fontWeight: '400' },
    mediumWeight: { fontWeight: '600' },
    semiboldWeight: { fontWeight: '700' },
    textCapitalize: {
      textTransform: 'capitalize',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
