import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homeloan from "../Pages/Homeloan";
import Homepage from "../Pages/Homepage";
import ProjectDetails from "../Pages/ProjectDetails";
import PropertyForSaleDetails from "../Pages/PropertyForSaleDetails";
import PropertyForRentDetails from "../Pages/PropertyForRentDetails";
import InvestmentAssist from "../Pages/InvestmentAssist";
import AwaasAssist from "../Pages/AwaasAssist";
import PostProperty from "../Pages/PostProperty";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home-loans" component={Homeloan} />
        <Route exact path="/investment-assist" component={InvestmentAssist} />
        <Route exact path="/awaas-assist" component={AwaasAssist} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route
          exact
          path="/property/sell/:id"
          component={PropertyForSaleDetails}
        />
        <Route
          exact
          path="/property/rent/:id"
          component={PropertyForRentDetails}
        />

        <Route exact path="/post-property" component={PostProperty} />
      </Switch>
    </Router>
  );
};

export default Routes;
