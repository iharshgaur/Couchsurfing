import React from "react";
import "./NavbarLanding.css";
import { Link, useHistory } from "react-router-dom";
import { loginSuccess } from "../../Redux/auth/action";
import { useDispatch } from "react-redux";

const NavbarLanding = () => {
  const history = useHistory();
  const [status, setStatus] = React.useState(false);
  const [country, setCountry] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar__left">
          <img src="https://i.imgur.com/nMkAWNm.png" alt="logo" />
          <div>
            <select>
              <option value="explore">Explore</option>
              <option value="host">Find Host</option>
              <option value="member">Find Member</option>
              <option value="location">Find Loctaion</option>
              <option value="events">Find Events</option>
            </select>
            <img
              onClick={() => history.push(`/country/${country}`)}
              src="https://i.imgur.com/L8cOagc.png"
              alt="search"
            />
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="Navbar__linksDiv">
          <div>
            <Link className="Navbar__linksDiv__links p1" to="/verify">
              <img src="https://i.imgur.com/EZaiOyv.png" alt="verify" />
              <p>Verify</p>
            </Link>
          </div>
          <div>
            <Link className="Navbar__linksDiv__links" to="/dashboard">
              <img src="https://i.imgur.com/kP616Fa.png" alt="dasboard" />
              <p>Dashboard</p>
            </Link>
          </div>
          <div>
            <Link className="Navbar__linksDiv__links" to="/groups">
              <img src="https://i.imgur.com/oJIBk65.png" alt="group" />
              <p>Groups</p>
            </Link>
          </div>
          <div>
            <Link className="Navbar__linksDiv__links" to="/events">
              <img src="https://i.imgur.com/XdQafEV.png" alt="event" />
              <p>Event</p>
            </Link>
          </div>
          <div>
            <Link className="Navbar__linksDiv__links" to="/inbox">
              <img src="https://i.imgur.com/AlSftGF.png" alt="inbox" />
              <p>Inbox</p>
            </Link>
          </div>
          <div>
            <Link className="Navbar__linksDiv__links" to="/profile">
              <img src="https://i.imgur.com/oDSouf3.png" alt="profile" />
              <p>Profile</p>
            </Link>
          </div>
          <div>
            <Link
              className="Navbar__linksDiv__links"
              onClick={() => setStatus(!status)}
            >
              <img src="https://i.imgur.com/t54g7h9.png" alt="setting" />
              <p>Settings</p>
            </Link>
          </div>
        </div>
      </div>
      {status && (
        <div className="Navbar__linksDiv__settings">
          <Link className="Navbar__linksDiv__links p2" to="/settings">
            <p>{`Account &Settings`}</p>
          </Link>
          <Link
            onClick={() => {
              localStorage.clear("login", "false");
              dispatch(loginSuccess());
            }}
            className="Navbar__linksDiv__links p2"
            to="/"
          >
            <p>Logout</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarLanding;
