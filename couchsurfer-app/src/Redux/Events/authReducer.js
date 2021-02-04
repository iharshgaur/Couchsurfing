import * as Actions from "./actionType.js";

const init = {
  data: "",
  isLoading: false,
  isError: false,
};

const eventsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case Actions.GET_EVENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case Actions.GET_EVENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case Actions.GET_EVENTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case Actions.PUT_EVENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case Actions.PUT_EVENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case Actions.PUT_EVENTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case Actions.POST_EVENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case Actions.POST_EVENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case Actions.POST_EVENTS_FAILURE: {
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

export { eventsReducer };
