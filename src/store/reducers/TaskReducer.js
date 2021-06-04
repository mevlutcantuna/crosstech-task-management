import { CURRENTPAGE, GET_TASKS } from "../constants/TaskConstant";

const initialState = {
  currentPage: "task",
  currentPageTasks: [],
  fetched: false,
  pending: false,
  error: null,
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENTPAGE:
      return { ...state, currentPage: action.payload };
    case GET_TASKS.GET_TASKS_SUCCESS:
      return {
        ...state,
        fetched: true,
        pending: false,
        error: null,
        currentPageTasks: action.payload.data,
      };
    default:
      return state;
  }
};

export default TaskReducer;
