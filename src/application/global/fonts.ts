import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const FONTS_FAMILY = {
  System: 'System',
};

export enum FONTS_SIZE {
  extra = 20,
  input = 16,
  title = 14,
  legal = 12,
}

export const FontStyles = StyleSheet.create({
  textButton: {
    fontFamily: FONTS_FAMILY.System,
    fontSize: FONTS_SIZE.extra,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  textInput: {
    fontFamily: FONTS_FAMILY.System,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f6f9',
    borderRadius: 10,
    marginTop: 10,
    fontSize: FONTS_SIZE.input,
  },
});
