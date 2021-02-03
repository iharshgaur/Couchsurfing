import React from "react";
import { Switch, Route } from "react-router-dom";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
import Question from "../Pages/Question/Question";
import {LandingPage} from "../Components/LandingPage/LandingPage"
import Country from "../Pages/countries/countries";

function Routes() {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/discussions">
        <Discussions />
      </Route>
      <Route path="/question/:id">
        <Question />
      </Route>
      <Route path="/landingpage">
        <LandingPage/>
      </Route>
      <Route path="/country">
        <Country/>
      </Route>
    </Switch>
  );
}

export default Routes;
