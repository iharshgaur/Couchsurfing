import React from "react";
import About from "./About";
import {useSelector} from "react-redux"
import styles from "./RightPane.module.css";

function RightPane({hostId}) {
  const [page, setPage] = React.useState("About");
  const hostsData = useSelector(state => state.hosts.hostsData)
  const userData=hostsData.find((item)=>item.id===hostId)
  return (
    <div className={styles.RightPaneContainer}>
      <div className={styles.RightPaneContainer__Div__Top}>
        {userData.accepting_guests?<h3 style={{color:"green"}}>Accepting guests</h3>:<h3 style={{color:"grey"}}>Maybe Accepting Guests</h3>}
        <button>Edit My Profile</button>
      </div>
      <div className={styles.RightPaneContainer__Div__Navigation}>
        <button onClick={() => setPage("About")}>About</button>
        <button >My Home</button>
        <button >Photos</button>
        <button >References</button>
        <button >Friends</button>
        <button >Favourites</button>
      </div>

      {page === "About" ? 
        <About hostId={hostId} />:""
      }
    </div>
  );
}

export default RightPane;
