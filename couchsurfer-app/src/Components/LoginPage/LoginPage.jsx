import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import { Redirect } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { getUsers } from "../../Redux/Users/action";
const LoginDetails = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const Islogin = useSelector((state) => state.auth.Islogin);

  return (
    <div className={styles.loginPage__opacity}>
      {Islogin ? <Redirect to="/dashboard" /> : <LoginComponent />}
    </div>
  );
};
export { LoginDetails };
