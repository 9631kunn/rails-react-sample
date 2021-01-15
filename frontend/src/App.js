import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Restaurants from "./components/containers/Restaurants";
import Orders from "./components/containers/Orders";
import Foods from "./components/containers/Foods";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) => <Foods match={match} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
