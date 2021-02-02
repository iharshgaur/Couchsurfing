import React from "react";
import styles from "../Profile/RightPane.module.css";

function Home() {
  return (
    <>
      <div className={styles.RightPaneContainer__Div__About}>
        <div className={styles.RightPaneContainer__Div__About__Header}>
          <h2>My Home</h2>
        </div>
        <hr />

        <div className={styles.RightPaneContainer__Div__About__Content}>
          <p>
            Couchsurfers decide whom to meet based on profiles! Until you fill
            out your profile, people won’t know what to expect and why they
            should hang out with you.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
