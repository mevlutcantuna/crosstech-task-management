import axios from "axios";
import { REJECT_TASK } from "../constants/RejectTaskConstant";

const rejectTask = (id, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .get(`http://localhost:5000/api/task/reject/${id}`)
    .then((res) =>
      dispatch({ type: REJECT_TASK.REJECT_TASK_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: REJECT_TASK.REJECT_TASK_ERROR, payload: err })
    );
}; 

export default rejectTask;
