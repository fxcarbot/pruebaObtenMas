import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemBank} from './components';
import {COLORS} from '_global';
import {FullLoadingComponent, Popup} from '_components';
import {useHome} from './hooks';

export const HomeScreen = () => {
  const {listBanks, isLoading, isError, onCloseModal} = useHome();

  return (
    <View style={[styles.container]}>
      <FullLoadingComponent visible={isLoading} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={listBanks ?? []}
        renderItem={({item}) => <ItemBank item={item} />}
      />
      <Popup
        visible={isError}
        title={'Ha ocurrido un error'}
        onCloseAction={onCloseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e1e4ee',
    alignItems: 'center',
  },
  button: {width: 200, backgroundColor: COLORS.GREEN},
});

export default HomeScreen;
