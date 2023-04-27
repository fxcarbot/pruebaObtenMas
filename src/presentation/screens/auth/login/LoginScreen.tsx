import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontStyles, ICON_SIZE} from '_global';
import {ButtonBase} from '_components';
import {useLogin} from '../hooks';

export const LoginScreen = (): JSX.Element => {
  const {
    handleLogin,
    showPass,
    handleShowPass,
    themeColor,
    setEmail,
    setPassword,
    email,
    password,
  } = useLogin();
  return (
    <View
      style={[styles.container, {backgroundColor: themeColor.backgroundColor}]}>
      <View style={styles.contentInputs}>
        <TextInput
          placeholder="Enter username"
          style={[
            FontStyles.textInput,
            {
              backgroundColor: themeColor.themeBackgroundColor,
              color: themeColor.textColor,
            },
          ]}
          placeholderTextColor={themeColor.placeholderTextColor}
          onChangeText={text => setEmail(text)}
          keyboardType={'email-address'}
          value={email}
        />
        <View>
          <TextInput
            value={password}
            placeholder="Password"
            style={[
              FontStyles.textInput,
              {
                backgroundColor: themeColor.themeBackgroundColor,
                color: themeColor.textColor,
              },
            ]}
            placeholderTextColor={themeColor.placeholderTextColor}
            secureTextEntry={!showPass}
            onChangeText={text => setPassword(text)}
          />
          <Icon
            name={showPass ? 'eye' : 'eye-off'}
            color={'#bdb8c0'}
            size={ICON_SIZE}
            onPress={handleShowPass}
            style={styles.icon}
          />
        </View>
      </View>
      <ButtonBase title="Iniciar Sesión" onPress={handleLogin} />
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
  contentInputs: {width: 350, marginTop: 50},
  icon: {position: 'absolute', right: 10, top: 25},
});

export default LoginScreen;
