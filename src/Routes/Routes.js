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
import ViewAllBlogs from "../Pages/ViewAllBlogs";
import Profile from "../Pages/Profile/Profile";
import VerifyProperty from "../Pages/Verfiy/VerifyProperty";
import Legal from "../Pages/Legal";

import PrivateRoutes from "./PrivateRoutes";
import News from "../Pages/News";
import NewsDetails from "../Pages/NewsDetails";
import ApplyHomeLoan from "../Pages/ApplyHomeLoan";
import ProfileHomeLoan from "../Pages/Profile/ProfileHomeLoan";
import ProfileHomeLoanDetails from "../Pages/Profile/ProfileHomeLoanDetails";
import ProfilePropertyListing from "../Pages/Profile/ProfilePropertyListing";
import ProfileProjectListing from "../Pages/Profile/ProfileProjectListing";
import Feedback from "../Pages/Feedback";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/blogs" component={ViewAllBlogs} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:id" component={NewsDetails} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/projects" component={ViewAllProjects} />
        <Route exact path="/feedback" component={Feedback} />

        <Route exact path="/home-loans" component={Homeloan} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route exact path="/vastu" component={Vastu} />
        <Route exact path="/legal" component={Legal} />
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
        <Route exact path="/verfiy-property/:id" component={VerifyProperty} />

        <PrivateRoutes exact path="/profile/overview" component={Profile} />
        <PrivateRoutes
          exact
          path="/profile/home-loan"
          component={ProfileHomeLoan}
        />
        <PrivateRoutes
          exact
          path="/profile/home-loan/:id"
          component={ProfileHomeLoanDetails}
        />
        <PrivateRoutes
          exact
          path="/profile/property/listings"
          component={ProfilePropertyListing}
        />
        <PrivateRoutes
          exact
          path="/profile/property/listings/:id"
          component={VerifyProperty}
        />
        <PrivateRoutes
          exact
          path="/profile/projects/listings"
          component={ProfileProjectListing}
        />
        <PrivateRoutes
          exact
          path="/profile/projects/listings/:id"
          component={VerfiyProject}
        />
        <PrivateRoutes
          exact
          path="/home-loans/apply"
          component={ApplyHomeLoan}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
