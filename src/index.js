import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import store3 from "./redux/stores";

// const sagaMiddleware = createSagaMiddleware();
// const enhancer =
//   process.env.NODE_ENV === "production"
//     ? compose(applyMiddleware(sagaMiddleware))
//     : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

ReactDOM.render(

    <Provider store={store3}>
      <App />
    </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
