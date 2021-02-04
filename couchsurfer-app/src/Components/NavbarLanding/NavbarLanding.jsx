import React from "react";
import { LoginDetails } from "../LoginPage/LoginPage";


import styles from "./NavbarLanding.module.css";

const NavbarLanding = () => {

  const [login, setLogin] = React.useState(false);

  const logInChange = () => {
    setLogin(!login);
    console.log(login);
  };
  return (
    <div className={styles.Navbar__background}>
      <ul>
        <li>
          <img
            src="https://ht-assets.couchsurfing.com/assets/logo-orange-58ccd2edda8895d1e1742f7744683e61f2c6fa069290a9ff012ef09d51ea643b.png"
            width="120px"
            alt="logo"
          />
        </li>

        <li>
          <select>
            {["English", "Français", "Português", "Italiano", "Español"].map(
              (item) => (
                <option
                  key={item}
                  value={item}
                  className={styles.Navbar__select}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </li>

        <li>
          <div>How It Works</div>
        </li>

        <li>
          <div>Safety</div>
        </li>

        <li>
          <button className={styles.Navbar__select__join}>Join</button>
        </li>

        <li>
          <button
            onClick={logInChange}
            className={styles.Navbar__select__login}
          >
            Log In
          </button>
        </li>
      </ul>

      { login ? <LoginDetails/> : null}
    </div>
  );
};
export { NavbarLanding };
