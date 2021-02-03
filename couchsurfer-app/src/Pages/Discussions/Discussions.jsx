import React from "react";
import { useDispatch } from "react-redux";
import DiscussionForum from "../../Components/DiscussionForum/DiscussionForum";
import { changeCountry } from "../../Redux/Discussion/action";
import { useHistory, useParams } from "react-router-dom";
function Discussions() {
  const { country } = useParams();
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(changeCountry("USA"));
  // }, [dispatch]);

  // const history = useHistory();
  // const handleHosts = () => {
  //   history.push(`/hosts/USA`);
  // };

  return (
    <>
      {/* <button onClick={handleHosts}>USA</button> */}
      <DiscussionForum country={country} />
    </>
  );
}

export default Discussions;
