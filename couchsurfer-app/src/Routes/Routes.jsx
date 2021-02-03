import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateDiscussion from "../Pages/Discussions/CreateDiscussion/CreateDiscussion";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
import Question from "../Pages/Question/Question";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import Country from "../Pages/countries/countries";

import Hosts from "../Pages/Hosts/Hosts";
function Routes() {
  return (
    <Switch>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/discussions">
        <Discussions />
      </Route>
      <Route exact path="/question/:id">
        <Question />
      </Route>
      <Route exact path="/discussions/:country/creatediscussion">
        <CreateDiscussion />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/country">
        <Country />
      </Route>
      <Route exact path="/hosts/:country">
        <Hosts></Hosts>
      </Route>
    </Switch>
  );
}

export default Routes;
