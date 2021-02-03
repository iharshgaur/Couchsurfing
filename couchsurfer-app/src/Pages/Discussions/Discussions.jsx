import React from "react";
import { useDispatch } from "react-redux";
import DiscussionForum from "../../Components/DiscussionForum/DiscussionForum";
import { changeCountry } from "../../Redux/Discussion/action";
function Discussions() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeCountry("USA"));
  }, [dispatch]);

  return (
    <>
      <DiscussionForum />
    </>
  );
}

export default Discussions;
