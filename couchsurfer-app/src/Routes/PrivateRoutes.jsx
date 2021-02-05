import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ children, path }) => {
  const data = localStorage.getItem("login");
  return data === "true" ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export { PrivateRoutes };
