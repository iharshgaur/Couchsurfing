import React from "react";
import styles from "../Profile/RightPane.module.css";

function Friends() {
  return (
    <>
      <div className={styles.Friends}>
        <h3>FRIENDS</h3>
        <h4>INVITE FRIENDS</h4>
        <h5>
          Invite your friends so they can join you on Couchsurfing trips,
          events, hangouts, and more!
        </h5>
        <button>Invite Friends</button>
        <h4>COUCHSURFING FRIENDS</h4>
        <p>
          You’ve got friends all over the world! You just haven’t met them yet.
          Want to find someone in particular?
        </p>
      </div>
    </>
  );
}

export default Friends;
