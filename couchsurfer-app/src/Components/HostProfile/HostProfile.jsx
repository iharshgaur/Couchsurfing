import React from "react";
import RightPane from "./RightPane";
import Sidebar from "./Sidebar";
import styles from "./HostProfile.module.css";
import Navbar from "../Navbar/Navbar";
import {useParams} from "react-router-dom"

function HostProfile() {
    const{hostId}=useParams()
  return (
    <>
      <Navbar />
      <div className={styles.ProfileContainer}>
        <Sidebar hostId={hostId} />
        <RightPane hostId={hostId} />
      </div>
    </>
  );
}

export default HostProfile;
