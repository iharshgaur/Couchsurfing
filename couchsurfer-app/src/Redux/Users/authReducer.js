import * as Actions from "./actionType.js";

const init = {
  users: [],
  Islogin: false,
  current : {},
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
    case Actions.LOGIN: {
      return {
        ...state,
        Islogin: true,
        current : payload,
        isLoading: false,
        isError: false,
      };
    }
    case Actions.GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: payload,
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
        users: [...state.users,payload],
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
