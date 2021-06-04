import { COMPLETE_TASK } from "../constants/CompleteTaskConstant";

const initialState = {
  completedTask: {},
  error: null,
  fetched: false,
  pending: false,
};

const CompleteTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_TASK.COMPLETE_TASK_SUCCESS:
      return {
        ...state,
        fetched: true,
        pending: false,
        error: null,
        completedTask: action.payload.data,
      };
    case COMPLETE_TASK.COMPLETE_TASK_ERROR:
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

export default CompleteTaskReducer;
