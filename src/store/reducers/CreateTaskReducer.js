import { CREATE_TASK } from "../constants/CreateTaskConstant";

const initialState = {
  createdTask: [],
};

const CreateTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK.CREATE_TASK_SUCCESS:
      return { ...state, createdTask: action.payload };
    default:
      return state;
  }
};

export default CreateTaskReducer;
