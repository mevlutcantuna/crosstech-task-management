import axios from "axios";
import { DELETE_TASK } from "../constants/DeleteTaskConstant";

const deleteTask = (id, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .delete(`http://localhost:5000/api/task/${id}`)
    .then((res) =>
      dispatch({ type: DELETE_TASK.DELETE_TASK_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: DELETE_TASK.DELETE_TASK_ERROR, payload: err })
    );
};

export default deleteTask;
