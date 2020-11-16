import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import Home from "./components/home";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import "./style/main.scss";
import Results from "./components/results";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
