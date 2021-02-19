import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Summary from "./Pages/Summary";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/summary" component={Summary}/>
            <Route path="/"component={Home}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
