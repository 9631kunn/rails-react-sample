import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Restaurants } from "./components/containers/Restaurants";
import { Orders } from "./components/containers/Orders";
import { Foods } from "./components/containers/Foods";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/restaurants">
        <Restaurants />
      </Route>
      <Route exact path="/orders">
        <Orders />
      </Route>
      <Route exact path="/foods">
        <Foods />
      </Route>
    </Switch>
  </Router>
);

export default App;
