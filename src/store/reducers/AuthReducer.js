import { LOGIN, LOGOUT } from "../constants/AuthConstant";

const initialState = {
  pending: false,
  fetched: false,
  error: null,
  user: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        fetched: true,
        pending: false,
        error: null,
        user: action.payload.data,
      };
    case LOGIN.LOGIN_PENDING:
      return { ...state, fetched: false, pending: true, error: null };
    case LOGIN.LOGIN_ERROR:
      return {
        ...state,
        fetched: false,
        pending: false,
        error: action.payload,
      };
    case LOGOUT.LOGOUT:
      return {
        ...state,
        fetched: false,
        pending: false,
        error: null,
        user: [],
      };
    default:
      return state;
  }
};

export default AuthReducer;
