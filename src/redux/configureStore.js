import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';
const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = process.env.NODE_ENV !== "production" &&
typeof window === "object" &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
  : compose;
  const configureStore = () => {
      const middleWares = [sagaMiddleWare];
      const enhancers = [applyMiddleware(...middleWares)];
      const store = createStore(rootReducer, composeEnhancers(...enhancers));
      sagaMiddleWare.run(rootSaga);
      return store;
  };
  export default configureStore;
