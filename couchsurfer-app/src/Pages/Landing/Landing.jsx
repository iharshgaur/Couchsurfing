import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUsers } from "../../Redux/Users/action";
import Login from "../../Components/Login/Login";

function Landing() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  const Islogin = useSelector((state) => state.auth.Islogin);

  return <div>{Islogin ? <Redirect to="/dashboard" /> : <Login />}</div>;
}

export default Landing;
