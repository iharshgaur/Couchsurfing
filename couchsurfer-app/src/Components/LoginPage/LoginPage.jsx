import React from "react";
import LoginComponent from "./LoginComponent";

import styles from "./LoginPage.module.css";

const LoginDetails = () => {
  return (
    <div className={styles.loginPage__opacity}>
      <LoginComponent />
    </div>
  );
};
export { LoginDetails };
