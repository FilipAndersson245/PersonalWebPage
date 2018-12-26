import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { HashRouter } from "react-router-dom";
import { createStore, compose } from "redux";
import { reducer, initialState } from "./reducers/rootReducer";
import { Provider } from "react-redux";

const composeEnhancers =
  // tslint:disable-next-line:no-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
