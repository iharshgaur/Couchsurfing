import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateDiscussion from "../Pages/Discussions/CreateDiscussion/CreateDiscussion";
import Discussions from "../Pages/Discussions/Discussions";
import Profile from "../Pages/Profile/Profile";
import Question from "../Pages/Question/Question";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import Country from "../Pages/countries/countries";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Settings from "../Pages/Settings";
import Events from "../Pages/Events/Events";
import HostProfilePage from "../Pages/HostProfilePage/HostProfilePage";
import Hosts from "../Pages/Hosts/Hosts";
import Groups from "../Pages/Groups/Groups";
import GroupsDetail from "../Pages/GroupsDetail/GroupsDetail";
import { PrivateRoutes } from "./PrivateRoutes";
function Routes() {
  return (
    <Switch>
      <PrivateRoutes exact path="/profile">
        <Profile />
      </PrivateRoutes>
      <PrivateRoutes exact path="/discussions/:country">
        <Discussions />
      </PrivateRoutes>
      <PrivateRoutes exact path="/discussions/:country/question/:id">
        <Question />
      </PrivateRoutes>
      <PrivateRoutes exact path="/discussions/:country/creatediscussion">
        <CreateDiscussion />
      </PrivateRoutes>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <PrivateRoutes exact path="/dashboard">
        <Dashboard />
      </PrivateRoutes>
      <PrivateRoutes exact path="/events">
        <Events></Events>
      </PrivateRoutes>
      <PrivateRoutes exact path="/groups">
        <Groups></Groups>
      </PrivateRoutes>
      <PrivateRoutes exact path="/groups/:id">
        <GroupsDetail></GroupsDetail>
      </PrivateRoutes>
      <PrivateRoutes exact path="/settings">
        <Settings></Settings>
      </PrivateRoutes>
      <PrivateRoutes path="/country/:country">
        <Country />
      </PrivateRoutes>
      <PrivateRoutes exact path="/hosts/:country">
        <Hosts />
      </PrivateRoutes>
      <PrivateRoutes exact path="/settings">
        <Settings />
      </PrivateRoutes>
      <PrivateRoutes exact path="/hosts/:country/:hostId">
        <HostProfilePage></HostProfilePage>
      </PrivateRoutes>
      <Route>
        <p>error 404 : page not found</p>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
