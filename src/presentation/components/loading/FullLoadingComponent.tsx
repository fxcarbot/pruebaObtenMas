import React, {FC} from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {COLORS} from '_global';

import {IFullLoading} from './IFullLoading';

export const FullLoadingComponent: FC<IFullLoading> = ({
  visible,
  sizeIndicator = 'large',
  colorIndicator = COLORS.RED,
  style = {},
  contentStyle = {},
}: IFullLoading) => {
  return (
    <Modal transparent style={[style]} visible={visible}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.content, contentStyle]}>
          <ActivityIndicator size={sizeIndicator} color={colorIndicator} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});
