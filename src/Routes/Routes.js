import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProjectDetails from "../Pages/ProjectDetails";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
