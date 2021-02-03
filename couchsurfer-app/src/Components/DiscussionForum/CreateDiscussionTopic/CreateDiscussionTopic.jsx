import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
function CreateDiscussionTopic() {
  const { country } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Name: </label>
        <br />
        <input name="username" ref={register({ required: true })} />
        <br />
        <br />
        <label htmlFor="username">Name: </label>
        <br />
        <select name="city" ref={register}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </select>
        <br />
        <br />
        <label htmlFor="question">Question: </label>
        <br />
        <input name="question" ref={register({ required: true })} />
        <br />
        <br />
        <label htmlFor="details">Details: </label>
        <br />
        <input name="details" ref={register({ required: true })} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateDiscussionTopic;
