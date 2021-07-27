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
import PostProject from "../Pages/PostProject";
import Search from "../Pages/Search";
import Article from "../Pages/Article";
import Vastu from "../Pages/Vastu";
import VerfiyProject from "../Pages/Verfiy/VerfiyProject";
import Aboutus from "../Pages/Aboutus";
import ViewAllProjects from "../Pages/ViewAllProjects";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/projects" component={ViewAllProjects} />

        <Route exact path="/home-loans" component={Homeloan} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route exact path="/vastu" component={Vastu} />
        <Route exact path="/investment-assist" component={InvestmentAssist} />
        <Route exact path="/awaas-assist" component={AwaasAssist} />

        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/article/:id" component={Article} />

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
        <Route exact path="/post-project" component={PostProject} />

        <Route exact path="/verfiy-project/:id" component={VerfiyProject} />
      </Switch>
    </Router>
  );
};

export default Routes;
