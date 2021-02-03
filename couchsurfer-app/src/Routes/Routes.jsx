import React from "react";
import { Switch, Route } from "react-router-dom";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
import Question from "../Pages/Question/Question";
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
    </Switch>
  );
}

export default Routes;
