import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/Auth";
import store from "./store/Store";
import { Provider } from "react-redux";
import TaskDetail from "./components/tasks/TaskDetail";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/tasks" component={App} />
          <Route exact path="/tasks/:id" component={TaskDetail} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
