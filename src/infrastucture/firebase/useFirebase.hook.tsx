import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth/react-native';
import {initializeApp} from 'firebase/app';

import {firebaseConfig} from 'firebase-config';

export const useFirebase = (): IFirebaseHook => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return {
    auth,
    signInWithEmailAndPassword,
  };
};

interface IFirebaseHook {
  auth: Auth;
  signInWithEmailAndPassword: (
    auth: Auth,
    email: string,
    password: string,
  ) => Promise<UserCredential>;
}

export default useFirebase;
