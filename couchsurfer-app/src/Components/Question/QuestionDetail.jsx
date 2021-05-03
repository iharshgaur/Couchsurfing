import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";
import { addComments } from "../../Redux/Discussion/action";
import { v4 as uuid } from "uuid";
import { getDiscussions } from "../../Redux/Discussion/action";
import Navbar from "../Navbar/Navbar";
function QuestionDetail() {
  React.useEffect(() => {
    setQues(alldiscussions.find((discussion) => discussion.id === id));
    // eslint-disable-next-line
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
    <>
      <Navbar />
      <div className={styles.QuestionDetail}>
        <div className={styles.QuestionDetail__Header}>
          <h3>{ques.question}</h3>
          <p>
            Posted under : {ques.city},{ques.country}
          </p>
        </div>
        <hr />
        <div className={styles.QuestionDetail__Detail}>
          <div className={styles.QuestionDetail__Seeker}>
            <div>
              <h3>{ques.username}</h3>
              <p>
                Visiting : {ques.city},{ques.country}
              </p>
              <br />
              <div className={styles.QuestionDetail__Detail__Topic}>
                <p>
                  <h3> Description :</h3> {ques.topic}
                </p>
              </div>
            </div>
            <img src="https://picsum.photos/500" alt="seekers_img" />
          </div>

          <hr />
          <div className={styles.QuestionDetail__Detail__Comments__Head}>
            <h1>Replies</h1>
            <div className={styles.QuestionDetail__Detail__Comments}>
              {ques.discussions?.map((comment) => (
                <div
                  key={comment[0]}
                  style={{ padding: "5px", borderBottom: "1px solid #ccc" }}
                >
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
            </div>
          </div>
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
    </>
  );
}

export default QuestionDetail;
