import {useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NAV, THEME_COLOR} from '_global';
import {IThemeColor} from '_types';
import {useFirebase} from '_firebase';

export const useLogin = (): ILoginHook => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {auth, signInWithEmailAndPassword} = useFirebase();

  const themeColor: IThemeColor = useMemo(() => {
    if (isDarkMode) return THEME_COLOR.DARK;
    return THEME_COLOR.LIGHT;
  }, [isDarkMode]);

  function handleShowPass() {
    setShowPass(!showPass);
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        // console.log('LOGIN SUCCESSFULL', user);

        navigation.reset({
          index: 0,
          routes: [{name: NAV.HOME}],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  return {
    handleLogin,
    handleShowPass,
    showPass,
    themeColor,
    setEmail,
    setPassword,
    email,
    password,
  };
};

interface ILoginHook {
  handleLogin(): void;
  handleShowPass(): void;
  showPass: boolean;
  themeColor: IThemeColor;
  setEmail(x: string): void;
  setPassword(x: string): void;
  email: string;
  password: string;
}

export default useLogin;
