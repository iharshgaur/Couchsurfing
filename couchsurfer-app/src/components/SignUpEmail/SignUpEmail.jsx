import React from "react";
import styles from "./SignUpEmail.module.css";

const SignUpEmail = () => {
  return (
    <div className={styles.signUpEmail__background}>
      <div>Sign Up With Email</div>

      <form>
        <div className={styles.signUpEmail__label}>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>

        <div className={styles.signUpEmail__label}>
          {/* <input type="text" placeholder="First Name" /> */}
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>

        <br />
        <div className={styles.signUpEmail__label}>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <br />
        <br />

        <div className={styles.signUpEmail__label}>
          <label>Password</label>
          {/* <p>Must be at least 8 characters</p> */}
          <input type="password" placeholder="Password" />
        </div>

        <div className={styles.signUpEmail__join}>
          <input type="submit" value="Join" />
        </div>
        <br />
      </form>
    </div>
  );
};

export { SignUpEmail };
