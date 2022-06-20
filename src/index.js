import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
