import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {apiMiddleware, reducer} from './services/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {bankSlice} from '_slices';
const storeSettings: ConfigureStoreOptions = {
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiMiddleware),
};

if (__DEV__) {
  storeSettings.devTools = __DEV__;
  storeSettings.enhancers = [];
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [bankSlice.name],
};

const rootReducer = combineReducers(reducer);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: storeSettings.devTools,
  enhancers: storeSettings.enhancers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
