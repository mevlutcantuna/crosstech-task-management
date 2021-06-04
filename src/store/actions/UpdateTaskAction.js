import axios from "axios";
import { UPDATE_TASK } from "../constants/UpdateTaskConstant";

const updateTask = (newTask, id, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .put(`http://localhost:5000/api/task/${id}`, newTask)
    .then((res) =>
      dispatch({ type: UPDATE_TASK.UPDATE_TASK_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: UPDATE_TASK.UPDATE_TASK_ERROR, payload: err })
    );
};

export default updateTask;
