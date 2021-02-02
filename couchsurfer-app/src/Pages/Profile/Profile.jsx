import React from "react";
import RightPane from "../../Components/Profile/RightPane";
import Sidebar from "../../Components/Profile/Sidebar";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <Sidebar />
      <RightPane />
    </div>
  );
}

export default Profile;
