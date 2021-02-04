import * as Actions from "./actionType.js";
import axios from "axios";

const eventsRequest = () => {
  return {
    type: Actions.GET_EVENTS_REQUEST,
  };
};
const eventsSuccess = (payload) => {
  return {
    type: Actions.GET_EVENTS_SUCCESS,
    payload,
  };
};
const eventsFailure = (err) => {
  return {
    type: Actions.GET_EVENTS_FAILURE,
    err,
  };
};
const putRequest = () => {
  return {
    type: Actions.PUT_EVENTS_REQUEST,
  };
};
const putSuccess = (payload) => {
  return {
    type: Actions.PUT_EVENTS_SUCCESS,
    payload,
  };
};
const putFailure = (err) => {
  return {
    type: Actions.PUT_EVENTS_FAILURE,
    err,
  };
};

export const getEvents = () => (dispatch) => {
  dispatch(eventsRequest());
  return axios
    .get("https://json-server-bravo-ar.herokuapp.com/posts")
    .then((res) => {
      dispatch(eventsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(eventsFailure(err));
    });
};
export const putEvents = (id, value) => (dispatch) => {
  dispatch(putRequest());
  return axios
    .patch(`https://json-server-bravo-ar.herokuapp.com/posts/${id}`, {
      status: value,
    })
    .then((res) => {
      dispatch(putSuccess(res.data));
      dispatch(getEvents());
    })
    .catch((err) => {
      dispatch(putFailure(err));
    });
};
