import { createStore, compose } from 'redux';

import summonReducer from './reducers/CombineReducers.js';

/* eslint-disable no-underscore-dangle */
// подключение react-dev-tools если приложение находится 
// в статусе devmode
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

// создаем store
const configureStore = preloadedState => (
  createStore(
    summonReducer,    // корневое reducer
    preloadedState,   // начальное состояние
    composeEnhancers(), 
  )
);
const store = configureStore({});

export default store;

const data = useMemo(
  () => 
    array.map(mapper).filter(predicate).reduce(reducer), 
    [array]
)