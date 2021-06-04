import axios from "axios";
import { COMPLETE_TASK } from "../constants/CompleteTaskConstant";

const completeTask = (id, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .get(`http://localhost:5000/api/task/complete/${id}`)
    .then((res) =>
      dispatch({ type: COMPLETE_TASK.COMPLETE_TASK_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: COMPLETE_TASK.COMPLETE_TASK_ERROR, payload: err })
    );
};

export default completeTask;
