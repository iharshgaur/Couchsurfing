import React from "react";
import { Switch, Route } from "react-router-dom";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
function Routes() {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/discussions">
        <Discussions />
      </Route>
    </Switch>
  );
}

export default Routes;
