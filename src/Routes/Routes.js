import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homeloan from "../Pages/Homeloan";
import Homepage from "../Pages/Homepage";
import ProjectDetails from "../Pages/ProjectDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home-loans" component={Homeloan} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
