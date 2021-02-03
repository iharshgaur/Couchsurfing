import * as Actions from "./actionType.js";
import axios from "axios";

const userRequest = () => {
  return {
    type: Actions.GET_USER_REQUEST,
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

export const login = (params) => (dispatch) => {
  dispatch(userRequest());
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", params)
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userFailure(err));
    });
};

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

export const register = (params) => (dispatch) => {
  dispatch(registerRequest());
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", params)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err));
    });
};
