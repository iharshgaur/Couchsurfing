import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import { addComments } from "../../Redux/Discussion/action";
import { v4 as uuid } from "uuid";
import { getDiscussions } from "../../Redux/Discussion/action";

function QuestionDetail() {
  React.useEffect(() => {
    setQues(alldiscussions.find((discussion) => discussion.id === id));
  }, []);
  const [comment, setComment] = React.useState("");
  const [ques, setQues] = React.useState({});

  const username = "Default";
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);
  const alldiscussions = useSelector(
    (state) => state.discussions.alldiscussions
  );

  const HandlePostComment = () => {
    const payload = {
      country: ques.country,
      city: ques.city,
      question: ques.question,
      topic: ques.topic,
      discussions: [...ques.discussions, [`${uuid()}`, username, comment]],
      username: ques.username,
    };
    setQues(payload);

    dispatch(addComments(payload, id));
    dispatch(
      getDiscussions({
        country: ques.country,
      })
    );
  };
  console.log(ques);
  return (
    <div className={styles.QuestionDetail}>
      <div className={styles.QuestionDetail__Header}>
        <h3>{ques.question}</h3>
        <p>
          Posted near : {ques.city},{ques.country}
        </p>
      </div>
      <hr />
      <div className={styles.QuestionDetail__Detail}>
        <h3>{ques.username}</h3>
        <p>
          {ques.city},{ques.country}
        </p>
        <div className={styles.QuestionDetail__Detail__Topic}>
          <p>{ques.topic}</p>
        </div>
        <hr />
        <div className={styles.QuestionDetail__Detail__Comments}>
          {ques.discussions?.map((comment) => (
            <div key={comment[0]} style={{ padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://picsum.photos/50"
                  alt="comment"
                  style={{ borderRadius: "100%", marginRight: "10px" }}
                />
                <h4>{comment[1]}</h4>
              </div>
              <p>{comment[2]}</p>
            </div>
          ))}

          <div className={styles.QuestionDetail__Detail__Add__Comments}>
            <input
              type="text"
              placeholder="Add Comment..."
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button onClick={HandlePostComment}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
