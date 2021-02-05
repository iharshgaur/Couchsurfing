import * as Actions from "./actionType.js";
import axios from "axios";


//user Request
const userRequest = () => {
  return {
    type: Actions.GET_USER_REQUEST,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: Actions.LOGIN,
    payload
  };
};

const userSuccess = (payload) => {
  return {
    type: Actions.GET_USER_SUCCESS,
    payload,
  };
};
const userFailure = (err) => {
  return {
    type: Actions.GET_USER_FAILURE,
    err,
  };
};

export const getUsers = (params) => (dispatch) => {
  dispatch(userRequest());
  return axios
    .get(`https://hidden-springs-42645.herokuapp.com/users`,{
      params
    })
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userFailure(err));
    });
};


//User Registration
const registerRequest = () => {
  return {
    type: Actions.REGISTER_USER_REQUEST,
  };
};
const registerSuccess = (payload) => {
  return {
    type: Actions.REGISTER_USER_SUCCESS,
    payload,
  };
};
const registerFailure = (err) => {
  return {
    type: Actions.REGISTER_USER_FAILURE,
    err,
  };
};

export const register = (payload) => (dispatch) => {
  dispatch(registerRequest());
  return axios
    .post("https://hidden-springs-42645.herokuapp.com/users", payload)
    .then((res) => {
      console.log(res.data)
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err));
    });
};
