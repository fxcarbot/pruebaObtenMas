import {StyleSheet} from 'react-native';
import {COLORS, FONTS_FAMILY, FONTS_SIZE} from '_global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  contentImage: {
    width: '25%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  contentText: {
    marginTop: 5,
    marginLeft: 8,
    width: '75%',
  },
  title: {
    fontSize: FONTS_SIZE.title,
    fontFamily: FONTS_FAMILY.System,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  description: {
    fontSize: FONTS_SIZE.legal,
    fontFamily: FONTS_FAMILY.System,
    color: COLORS.BLACK,
    flexWrap: 'wrap',
  },
  age: {
    fontSize: FONTS_SIZE.legal,
    fontFamily: FONTS_FAMILY.System,
    color: COLORS.RED,
  },
});
