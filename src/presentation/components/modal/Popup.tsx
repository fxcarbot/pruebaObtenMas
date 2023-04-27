import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {FONTS_SIZE} from '_global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IButtonCustomProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  visible: boolean;
  onCloseAction(): void;
}

export const Popup = ({
  visible,
  title,
  onCloseAction,
  style = {},
  contentStyle = {},
  textStyle = {},
}: IButtonCustomProps): JSX.Element => {
  return (
    <Modal transparent style={[style]} visible={visible}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.content, contentStyle]}>
          <View style={styles.header} accessible>
            <TouchableOpacity
              onPress={onCloseAction}
              style={styles.closeButton}>
              <Icon name="close" size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    //maxWidth: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  header: {
    alignSelf: 'flex-end',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: -16,
    marginRight: -24,
  },
  closeButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS,
    borderTopEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  title: {
    paddingBottom: 16,
    fontWeight: '500',
    fontSize: FONTS_SIZE.extra,
    letterSpacing: 0.15,
    textAlign: 'center',
    lineHeight: 28,
  },
});
export default Popup;
