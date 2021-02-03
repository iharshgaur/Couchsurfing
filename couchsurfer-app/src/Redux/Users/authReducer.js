import * as Actions from "./actionType.js";

const init = {
  loginData: "",
  login: false,
  registerData: "",
  isLoading: false,
  isError: false,
};

const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case Actions.GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case Actions.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        loginData: payload,
        login: true,
      };
    }
    case Actions.GET_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case Actions.REGISTER_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case Actions.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        registerData: payload,
      };
    }
    case Actions.REGISTER_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export { authReducer };
