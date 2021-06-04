import axios from "axios";
import { LOGIN } from "../constants/AuthConstant";

export const loginUser = (email) => (dispatch) => {
  dispatch({ type: LOGIN.LOGIN_PENDING });
  axios
    .post("http://localhost:5000/api/auth/login", { email })
    .then((res) => {
      dispatch({ type: LOGIN.LOGIN_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: LOGIN.LOGIN_ERROR, payload: err });
    });
};
