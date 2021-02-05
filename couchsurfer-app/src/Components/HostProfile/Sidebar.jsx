import React from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
function Sidebar() {
  const{hostId}=useParams()
  const hostsData = useSelector(state => state.hosts.hostsData)
  const userData=hostsData.find((item)=>item.id===hostId)
  return (
  
    <div className={styles.SidebarContainer}>
      <div className={styles.SidebarContainer__Top}>
        <img src="https://picsum.photos/200" alt="Profile Pic" />
        <h2>{userData.first_name} {userData.last_name}</h2>
        <h5>{userData.city}, {userData.country}</h5>
      </div>
      <hr />
      <div className={styles.SidebarContainer__Bottom}>
        <div className={styles.SidebarContainer__Bottom__Headers}>
         {userData.verified?<h4 style={{color:"green"}}>Verified</h4>:<h4 style={{color:"red"}}>Profile not Verified</h4>}

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
