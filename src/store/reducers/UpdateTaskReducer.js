import { UPDATE_TASK } from "../constants/UpdateTaskConstant";

const initialState = {
  updatedTask: [],
};

const UpdateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK.UPDATE_TASK_SUCCESS:
      return { ...state, updatedTask: action.payload.data };
    default:
      return state;
  }
};

export default UpdateTaskReducer;
