import React from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.SidebarContainer__Top}>
        <img src="https://picsum.photos/200" alt="Profile Pic" />
        <h2>John Doe</h2>
        <h5>Delhi, India</h5>
      </div>
      <hr />
      <div className={styles.SidebarContainer__Bottom}>
        <div className={styles.SidebarContainer__Bottom__Headers}>
          <h3>Profile not Verified</h3>

          <h4>Payment not verified</h4>
          <h4>Phone not verified</h4>
          <h4>Government ID not verified</h4>
          <h4>Address not verified</h4>
        </div>
        <button>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ marginRight: "10px" }}
          />
          Upgrade to Verify Profile
        </button>
        <h5>Verified members find hosts faster</h5>
      </div>
    </div>
  );
}

export default Sidebar;
