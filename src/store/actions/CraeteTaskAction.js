import axios from "axios";
import { CREATE_TASK } from "../constants/CreateTaskConstant";

const createTask = (task, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .post("http://localhost:5000/api/task", task)
    .then((res) =>
      dispatch({ type: CREATE_TASK.CREATE_TASK_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: CREATE_TASK.CREATE_TASK_ERROR, payload: err })
    );
};
export default createTask;
