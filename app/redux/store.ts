import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from '../types/state';
import rootReducer from './reducers';

export function configureStore(): Store<AppState> {


  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );

  return store;
}
