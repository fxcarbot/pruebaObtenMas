import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {IAllBanksResponse} from '_types';
import {styles} from './ItemBank.stylesheet';

interface ItemBankProps {
  item: IAllBanksResponse;
  onDetail?(): void;
}

export const ItemBank = ({
  item,
  onDetail = () => {},
}: ItemBankProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={() => onDetail()}>
        <View style={styles.contentImage}>
          <Image source={{uri: item.url}} style={styles.image} />
        </View>
        <View style={styles.contentText}>
          <Text style={styles.title}>{item.bankName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.age}>{`Operando hace ${item.age} años`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemBank;
