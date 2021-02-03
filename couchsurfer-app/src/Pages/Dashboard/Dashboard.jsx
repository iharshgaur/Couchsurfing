import React from "react";
import { useHistory } from "react-router-dom";
import "../../Components/Dashboard/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";

const Dashboard = () => {
  const history = useHistory();

  const handleCountry = (country) => {
    history.push(`/country/${country}`);
  };
  return (
    <>
      <Navbar />
      <div className="dashboard__container">
        <div className="dashboard__container__left">
          <div>
            <h3>India</h3>
            <p>600+ hosts</p>
          </div>
          <div>
            <h3>USA</h3>
            <p>100+ hosts</p>
          </div>
          <div>
            <h3>Germany</h3>
            <p>1600+ hosts</p>
          </div>
        </div>
        <div className="dashboard__container__right__search">
          <p>Find hosts wherever I’m going:</p>{" "}
          <input type="text" placeholder="Where are you going?" />
        </div>
      </div>
      <div className="dashboard__container__right">
        <div>
          <div className="dashboard__container__right">
            <div>
              <div className="dashboard__container__right__logo">
                {" "}
                <img src="https://i.imgur.com/TkZ3kB9.png" alt="logo" />
                <h4> EXPLORE ANCIENT CIVILIZATIONS WITH COUCHSURFERS...</h4>
              </div>
              <div className="dashboard__container__right__hr"></div>
              <div className="dashboard__container__right_image">
                <div onClick={() => handleCountry("India")}>
                  <h3>India</h3>
                  <p>600+ hosts</p>
                </div>
                <div onClick={() => handleCountry("USA")}>
                  <h3>USA</h3>
                  <p>100+ hosts</p>
                </div>
                <div onClick={() => handleCountry("Germany")}>
                  <h3>Germany</h3>
                  <p>1600+ hosts</p>
                </div>
              </div>
              <div className="dashboard__container__right__search">
                <p>Find hosts wherever I’m going:</p>{" "}
                <input type="text" placeholder="Where are you going?" />
              </div>
            </div>
          </div>
          <div className="dashboard__container__right">
            <div>
              <div className="dashboard__container__right__logo">
                {" "}
                <img src="https://i.imgur.com/qpnKUCF.png" alt="logo" />
                <h4> MY TRAVEL PLANS</h4>
              </div>
              <div className="dashboard__container__right__hr"></div>
              <div className="dashboard__container__right__logo__plans">
                <p>You have no upcoming trips.</p>
              </div>
              <div className="dashboard__container__right__hr"></div>
              <div className="dashboard__container__right__logo__plans__links">
                <p>Create a Public Trip</p> <p>My Public Trips</p>
                <p> My Couch Requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
