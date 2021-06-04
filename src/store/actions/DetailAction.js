import axios from "axios";
import { GET_TASK_BY_ID } from "../constants/DetailConstant";

const getTaskDetail = (id) => (dispatch) => {
  axios
    .get(`http://localhost:5000/api/task/${id}`)
    .then((res) =>
      dispatch({ type: GET_TASK_BY_ID.GET_TASK_BY_ID_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: GET_TASK_BY_ID.GET_TASK_BY_ID_ERROR, payload: err })
    );
};

export default getTaskDetail;
