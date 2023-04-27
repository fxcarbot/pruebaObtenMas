import {StyleProp, ViewStyle} from 'react-native';

export interface IFullLoading {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  sizeIndicator?: number | 'small' | 'large';
  colorIndicator?: string;
}
