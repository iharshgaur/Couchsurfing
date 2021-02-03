import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./QuestionDetail.module.css";

function QuestionDetail() {
  const { id } = useParams();
  const alldiscussions = useSelector(
    (state) => state.discussions.alldiscussions
  );
  const ques = alldiscussions.find((discussion) => discussion.id === id);

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
        <div className={styles.QuestionDetail__Detail}>
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
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
