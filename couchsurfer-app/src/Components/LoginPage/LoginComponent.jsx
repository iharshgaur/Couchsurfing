import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginComponent.module.css";
import { loginSuccess } from "../../Redux/Users/action";

function LoginComponent() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (currentUser === undefined) {
      setCheck(true);
    } else {
      setCheck(false);
      dispatch(loginSuccess(currentUser));
      localStorage.setItem("login", "true");
    }
  };

  return (
    <div className={styles.loginPage__form}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.loginPage__line}>Log in to Couchsurfing</h2>

        <input
          type="text"
          onChange={(e) => {
            setCheck(false);
            setEmail(e.target.value.trim());
          }}
          placeholder="Email or Username"
          className={styles.loginPage__input}
          required={true}
        />
        <br />
        <br />

        <input
          type="password"
          onChange={(e) => {
            setCheck(false);
            setPassword(e.target.value.trim());
          }}
          placeholder="Password"
          className={styles.loginPage__input}
          required={true}
        />
        <br />

        <input
          type="checkbox"
          className={styles.loginPage__check}
          required={true}
        />
        <span className={styles.loginPage__rem}> Remember me </span>

        <span className={styles.loginPage__forgot}>Forgot password?</span>
        <br />
        {check === true ? <p>*wrong email or password</p> : <p></p>}
        <button onClick={handleSubmit} className={styles.loginPage__login}>
          Log In
        </button>
        <br />
        <br />

        <div>or</div>
        <br />

        <button className={styles.loginPage__fb}>Continue with Facebook</button>
        <br />
        <br />
        <br />

        <div>Don’t have an account?</div>
        <br />
        <br />

        <input
          type="submit"
          value="Join"
          className={styles.loginPage__join}
        ></input>
      </form>
    </div>
  );
}

export default LoginComponent;
