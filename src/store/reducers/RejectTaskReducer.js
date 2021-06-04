import { REJECT_TASK } from "../constants/RejectTaskConstant";

const initialState = {
  rejectedTask: {},
  error: null,
  fetched: false,
  pending: false,
};

const RejectTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case REJECT_TASK.REJECT_TASK_SUCCESS:
      return {
        ...state,
        fetched: true,
        pending: false,
        error: null,
        rejectedTask: action.payload.data,
      };
    case REJECT_TASK.REJECT_TASK_ERROR:
      return {
        ...state,
        fetched: false,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default RejectTaskReducer;
