import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {FontStyles} from '_global';

interface IButtonCustomProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?(): void;
}

export const ButtonBase = ({
  title,
  onPress,
  style = {},
  textStyle = {},
}: IButtonCustomProps): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.containerButton, style]} onPress={onPress}>
      <Text style={[FontStyles.textButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#fd6b68',
    width: 350,
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 15,
  },
});
export default ButtonBase;
