
import React from 'react';
import { View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './redux/reducers';
import Books from './components/books';
import { configureStore } from './redux/store';

const store = configureStore()

const App = () => {

  return (
    <Provider store={store}>
      <Books/>
    </Provider>
  )
}

export default App;
