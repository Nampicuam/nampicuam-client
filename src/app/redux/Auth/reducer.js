import {
  LOGGED_OUT, LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from "./types";

const user = JSON.parse(localStorage.getItem('auth'));
const initialState = {
  ...user,
  document: 'procedures',
  success: false,
  loading: false,
  error: {
    email: null,
    password: null
  }
};

const reducer = function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...payload,
        success: true,
        loading: false
      };
    }

    case LOGIN_ERROR: {
      return {
        success: false,
        loading: false,
        error: payload
      };
    }
    case LOGGED_OUT: {
      return {
        success: false,
        loading: false,
        loading: undefined
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
