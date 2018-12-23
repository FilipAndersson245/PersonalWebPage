import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { reducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

// const composeEnhancers =
//   typeof window === "object" &&
//   // tslint:disable-next-line:no-any
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? // tslint:disable-next-line:no-any
//       (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

const store = createStore(
  reducer,
  // tslint:disable-next-line:no-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    // tslint:disable-next-line:no-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
