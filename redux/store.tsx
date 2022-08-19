import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

export default function configureStoreWrap() {
  const store = configureStore({reducer: rootReducer});
  return store;
}
