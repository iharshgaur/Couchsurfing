import React from "react";
import DiscussionForum from "../../Components/DiscussionForum/DiscussionForum";
import { useParams } from "react-router-dom";
function Discussions() {
  const { country } = useParams();
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(changeCountry("USA"));
  // }, [dispatch]);

  // const history = useHistory();
  // const handleHosts = () => {
  //   history.push(`/hosts/India`);
  // };

  return (
    <>
      {/* <button onClick={handleHosts}>USA</button> */}
      <DiscussionForum country={country} />
    </>
  );
}

export default Discussions;
