import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas/rootSaga";

export default function configureStore(context = {}) {
  const sagaMiddleware = createSagaMiddleware({ context });

  const store = createStore(
    rootReducer(),
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
