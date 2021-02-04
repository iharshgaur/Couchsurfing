import React from "react";
// import { Link } from "react-router-dom";
import styles from "./SignUpFaster.module.css";

const SignUpFaster = () => {
  return (
    <div className={styles.SignUpFaster__background}>
      <h3 className={styles.SignUpFaster__line1}>Sign Up Faster With</h3>

      <div>
          <button className={styles.SignUpFaster__fb}> Facebook</button>
        
      </div>

      <div className={styles.SignUpFaster__line}>
        We will never post without your permission.
      </div>
    </div>
  );
};

export { SignUpFaster };
