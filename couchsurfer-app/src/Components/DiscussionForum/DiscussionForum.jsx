import React from "react";
import styles from "./DiscussionForum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiscussions } from "../../Redux/Discussion/action";
import { useHistory } from "react-router-dom";
function DiscussionForum({ countryName }) {
  console.log(countryName, "herer");
  const history = useHistory();
  const dispatch = useDispatch();
  const alldiscussions = useSelector(
    (state) => state.discussions.alldiscussions
  );
  React.useEffect(() => {
    dispatch(
      getDiscussions({
        country: countryName,
      })
    );
  }, [dispatch, countryName]);

  return (
    <div className={styles.DiscussionForum}>
      <div className={styles.DiscussionForum__Head}>
        <div className={styles.DiscussionForum__Head__CreateDiscussion}>
          <div
            className={styles.DiscussionForum__Head__CreateDiscussion__Search}
          >
            <input type="text" placeholder="search...." />
            <button>Search</button>
          </div>
          <button
            onClick={() =>
              history.push(`/discussions/${countryName}/creatediscussion`)
            }
          >
            Create discussion
          </button>
        </div>
      </div>
      <div className={styles.DiscussionForum__Discussions}>
        {alldiscussions?.map((question) => (
          <button
            className={styles.DiscussionForum__Discussions__Question}
            key={question.id}
            onClick={() =>
              history.push(
                `/discussions/${countryName}/question/${question.id}`
              )
            }
          >
            <div className={styles.Question__Top}>
              <img src="https://picsum.photos/50" alt="user" />
              <h3>{question.question}</h3>
            </div>
            <div className={styles.Question__Bottom}>
              <h4>{question.username}</h4>
              <p>Total Replies: {question.discussions.length}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DiscussionForum;
