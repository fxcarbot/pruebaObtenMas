import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from 'src/application/state-manager/store';
import {persistStore} from 'redux-persist';
import {Routes} from '_navigators';
const persistor = persistStore(store);
function App(): JSX.Element {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  );
}

export default App;
