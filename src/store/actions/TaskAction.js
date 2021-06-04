import axios from "axios";
import { GET_TASKS } from "../constants/TaskConstant";

export const getTasks = (currentPage, token) => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  axios
    .get(`http://localhost:5000/api/${currentPage}`)
    .then((res) =>
      dispatch({ type: GET_TASKS.GET_TASKS_SUCCESS, payload: res })
    )
    .catch((err) =>
      dispatch({ type: GET_TASKS.GET_TASKS_ERROR, payload: err })
    );
};
