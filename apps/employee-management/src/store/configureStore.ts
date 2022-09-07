import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRouterMiddleware, initialRouterState } from "connected-next-router";
import Router from "next/router";
import { AppContext } from "next/app";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const configureStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware];
  const enhancer =
    process.env.NEXT_PUBLIC_NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const { asPath } = (context as AppContext).ctx || Router.router || {};
  let initialState;
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath),
    };
  }

  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NEXT_PUBLIC_NODE_ENV === "development",
});

export default wrapper;
