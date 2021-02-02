import React from "react";
import About from "./About";
import Favourites from "./Favourites";
import Friends from "./Friends";
import Home from "./Home";
import Photos from "./Photos";
import References from "./References";
import styles from "./RightPane.module.css";

function RightPane() {
  const [page, setPage] = React.useState("About");
  return (
    <div className={styles.RightPaneContainer}>
      <div className={styles.RightPaneContainer__Div__Top}>
        <h3>Maybe Accepting Guests</h3>
        <button>Edit My Profile</button>
      </div>
      <div className={styles.RightPaneContainer__Div__Navigation}>
        <button onClick={() => setPage("About")}>About</button>
        <button onClick={() => setPage("Home")}>My Home</button>
        <button onClick={() => setPage("Photos")}>Photos</button>
        <button onClick={() => setPage("References")}>References</button>
        <button onClick={() => setPage("Friends")}>Friends</button>
        <button onClick={() => setPage("Favourites")}>Favourites</button>
      </div>

      {page === "About" ? (
        <About />
      ) : page === "Home" ? (
        <Home />
      ) : page === "Photos" ? (
        <Photos />
      ) : page === "References" ? (
        <References />
      ) : page === "Friends" ? (
        <Friends />
      ) : page === "Favourites" ? (
        <Favourites />
      ) : null}
    </div>
  );
}

export default RightPane;
