import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
