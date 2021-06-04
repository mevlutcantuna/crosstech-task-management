import { DELETE_TASK } from "../constants/DeleteTaskConstant";

const initialState = {
  deletedTask: {},
};

const DeleteTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK.DELETE_TASK_SUCCESS:
      return { ...state, deletedTask: action.payload.data };
    default:
      return state;
  }
};

export default DeleteTaskReducer;
