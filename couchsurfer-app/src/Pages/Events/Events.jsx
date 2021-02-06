import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../Components/Events/Events.css";
import Navbar from "../../Components/Navbar/Navbar";
import { getEvents, postEvents, putEvents } from "../../Redux/Events/action";
const obj = {
  country: "India",
  title: "",
  location: "",
  from: "",
  to: "",
  url: "https://picsum.photos/200/200",
  status: "false",
};
const Dashboard = () => {
  const [detail, setDetail] = React.useState(obj);
  const data = useSelector((state) => state.events.data);
  const [filter, setFilter] = React.useState("All");
  const dispatch = useDispatch();
  const history = useHistory();
  const [popUp, setpopUp] = React.useState(false);
  React.useEffect(() => {
    dispatch(getEvents());
  }, []);
  const handleCountry = (country) => {
    history.push(`/country/${country}`);
  };

  const handleJoin = (id) => {
    dispatch(putEvents(id, "true"));
  };
  const handleRemove = (id) => {
    dispatch(putEvents(id, "false"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postEvents(detail));
  };
  const handleClose = () => {
    setpopUp(!popUp);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="Events__container">
        <div className="Events__container__left">
          <div>
            <div className="Events__container__left__createEvent">
              <img src="https://i.imgur.com/GULrZMx.png" alt="" />
              <h3>Events I’m Organizing</h3>
            </div>
            <div className="Events__container__left__hr"></div>
            <div className="Events__container__left__createEvent__button">
              <button onClick={() => setpopUp(!popUp)}>
                + Create an Event
              </button>
            </div>
          </div>
          <div className="Events__container__left__createEvent">
            <img src="https://i.imgur.com/GULrZMx.png" alt="" />
            <h3> Events I'm Attending</h3>
          </div>
          {data &&
            data
              ?.filter((e) => e.status === "true")
              .map((e) => (
                <div key={e.id} className="Events__container__left__Joined">
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.location}</p>
                  </div>
                  <div className="Events__container__left__hr"></div>
                  <div>
                    <button onClick={() => handleRemove(e.id)}>Remove</button>
                  </div>
                </div>
              ))}
        </div>
        <div>
          <div className="Events__container__filter">
            <h3>Filter :</h3>
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
          {filter === "All"
            ? data &&
              data?.map((e) => (
                <div key={e.id} className="Events__container__right">
                  <div>
                    <div className="Events__container__right__logo">
                      {" "}
                      <img src="https://i.imgur.com/TkZ3kB9.png" alt="logo" />
                      <h4> Events : {e.country}</h4>
                    </div>
                    <div className="Events__container__right__hr"></div>
                    <div className="Events__container__right_image">
                      <div onClick={() => handleCountry("India")}>
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={e.url}
                          alt={e.url}
                        />
                      </div>
                      <div onClick={() => handleCountry("USA")}>
                        <div>
                          <h2>{e.title}</h2>
                          <p>{e.location}</p>
                          <p>{`From :${e.from}  To :${e.to}`}</p>
                          <div className="Events__container__right__social">
                            <h3>Share this event with your friends:</h3>
                            <div>
                              <img
                                src="https://i.imgur.com/5VzqqGF.png"
                                alt="facebook"
                              />
                              <img
                                src="https://i.imgur.com/VtwmpfL.png"
                                alt="whatapp"
                              />
                              <img
                                src="https://i.imgur.com/5wWrFuG.png"
                                alt="Twitter"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Events__container__right__join">
                      {e.status === "false" ? (
                        <button onClick={() => handleJoin(e.id)}>JOIN</button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))
            : data &&
              data
                ?.filter((e) => e.country === filter)
                .map((e) => (
                  <div key={e.id} className="Events__container__right">
                    <div>
                      <div className="Events__container__right__logo">
                        {" "}
                        <img src="https://i.imgur.com/TkZ3kB9.png" alt="logo" />
                        <h4> Events : {e.country}</h4>
                      </div>
                      <div className="Events__container__right__hr"></div>
                      <div className="Events__container__right_image">
                        <div onClick={() => handleCountry("India")}>
                          <img
                            style={{ height: "100%", width: "100%" }}
                            src={e.url}
                            alt={e.url}
                          />
                        </div>
                        <div onClick={() => handleCountry("USA")}>
                          <div>
                            <h2>{e.title}</h2>
                            <p>{e.location}</p>
                            <p>{`From :${e.from}  To :${e.to}`}</p>
                            <div className="Events__container__right__social">
                              <h3>Share this event with your friends:</h3>
                              <div>
                                <img
                                  src="https://i.imgur.com/5VzqqGF.png"
                                  alt="facebook"
                                />
                                <img
                                  src="https://i.imgur.com/VtwmpfL.png"
                                  alt="whatapp"
                                />
                                <img
                                  src="https://i.imgur.com/5wWrFuG.png"
                                  alt="Twitter"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Events__container__right__join">
                        {e.status == "false" ? (
                          <button onClick={() => handleJoin(e.id)}>JOIN</button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      </div>
      <div
        style={popUp == false ? { display: "none" } : { display: "block" }}
        className="Events__addcontainer"
      >
        <img
          onClick={handleClose}
          src="https://image.flaticon.com/icons/png/512/106/106830.png"
          alt="close"
        />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Title">
              <h3>Title :</h3>
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="Location">
              <h3>Location :</h3>
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="location"
              placeholder="Location"
            />
          </div>
          <div>
            <label htmlFor="From">
              <h3>From :</h3>
            </label>
            <input
              type="date"
              onChange={handleChange}
              name="from"
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="TO">
              <h3>To :</h3>
            </label>
            <input
              type="date"
              onChange={handleChange}
              name="to"
              placeholder="Title"
            />
          </div>
          <input className="Events__addcontainer_sub" type="submit" />
        </form>
      </div>
    </>
  );
};
export default Dashboard;
