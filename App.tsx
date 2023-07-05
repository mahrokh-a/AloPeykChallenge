/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import Main from './app/navigations/Main';
import {enableLatestRenderer} from 'react-native-maps';
import { Provider } from 'react-redux';
import store from './app/redux/store';

function App(): JSX.Element {

  enableLatestRenderer();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
