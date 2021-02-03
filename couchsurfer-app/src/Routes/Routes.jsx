import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateDiscussion from "../Pages/Discussions/CreateDiscussion/CreateDiscussion";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
import Question from "../Pages/Question/Question";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import Country from "../Pages/countries/countries";

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
      <Route path="/landingpage">
        <LandingPage />
      </Route>
      <Route path="/country">
        <Country />
      </Route>
    </Switch>
  );
}

export default Routes;
