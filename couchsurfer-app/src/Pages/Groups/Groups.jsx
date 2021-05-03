import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../Components/Groups/Groups.css";
import Navbar from "../../Components/Navbar/Navbar";
import { getEvents, postEvents } from "../../Redux/Events/action";
const obj = {
  country: "India",
  title: "",
  location: "",
  from: "",
  to: "",
  url: "https://picsum.photos/200/200",
  status: "false",
};
const Groups = () => {
  React.useEffect(() => {
    document.title = "Groups | Couchsurfers";
  }, []);
  const [detail, setDetail] = React.useState(obj);
  const data = useSelector((state) => state.events.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const [popUp, setpopUp] = React.useState(false);
  React.useEffect(() => {
    dispatch(getEvents());
    // eslint-disable-next-line
  }, []);
  const handleGroups = (id) => {
    history.push(`/groups/${id}`);
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
      <div className="Groups__container">
        <div className="Groups__container__left">
          <div>
            <div className="Groups__container__left__createEvent">
              <img src="https://i.imgur.com/oJIBk65.png" alt="" />
              <h3>Groups I’m Organizing</h3>
            </div>
            <div className="Groups__container__left__hr"></div>
            <div className="Groups__container__left__createEvent__button">
              <button onClick={() => setpopUp(!popUp)}>Create Group</button>
            </div>
          </div>
        </div>
        <div>
          <div className="Groups__container__right">
            <div>
              <div className="Groups__container__right__logo">
                <img src="https://i.imgur.com/utfxlYV.png" alt="logo" />
                <h4> Popular Groups </h4>
              </div>
              <div className="Groups__container__right__hr"></div>

              {data &&
                data?.map((e) => (
                  <>
                    {" "}
                    <div
                      onClick={() => handleGroups(e.id)}
                      key={e.id}
                      className="Groups__container__right_image"
                    >
                      <div>
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={e.url}
                          alt={e.url}
                        />
                      </div>
                      <div>
                        <div>
                          <h2>{e.title}</h2>
                          <p>{e.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="Groups__container__right__hr"></div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={popUp === false ? { display: "none" } : { display: "block" }}
        className="Groups__addcontainer"
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
          <input className="Groups__addcontainer_sub" type="submit" />
        </form>
      </div>
    </>
  );
};
export default Groups;
