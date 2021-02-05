import React from "react";
import RightPane from "../../Components/Profile/RightPane";
import Sidebar from "../../Components/Profile/Sidebar";
import styles from "./Profile.module.css";
import Navbar from "../../Components/Navbar/Navbar";
function Profile() {
  React.useEffect(() => {
    document.title = "Profile | Couchsurfers";
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.ProfileContainer}>
        <Sidebar />
        <RightPane />
      </div>
    </>
  );
}

export default Profile;
