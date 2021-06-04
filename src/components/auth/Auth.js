import React, { useEffect, useState } from "react";

//material-ui
import { Button, TextField } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../store/actions/AuthAction";

const Auth = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const fetched = useSelector((state) => state.AuthReducer.fetched);
  const pending = useSelector((state) => state.AuthReducer.pending);

  const login = () => {
    if (email !== "") {
      dispatch(loginUser(email));
    }
  };

  const user = useSelector((state) => state.AuthReducer.user);

  useEffect(() => {
    if (fetched) {
      localStorage.setItem("user", JSON.stringify(user.payload));
      history.push("/tasks");
    }
  }, [user, fetched, history]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      history.push("/tasks");
    }
  }, [history]);

  return (
    <div className="w-full  flex items-start justify-center mt-32">
      {!pending ? (
        <div className="w-2/5 sm:w-screen md:w-4/5 lg:w-3/5 h-80 flex flex-col items-center justify-center shadow-2xl">
          <div className="text-2xl mb-4">Log In</div>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "2rem" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={login} variant="contained" color="primary">
            Login
          </Button>
        </div>
      ) : (
        <div>
          <img
            src={
              "http://pa1.narvii.com/7491/d8b2fb62d9bc8d6c042da4fd6ad5be92a8d97825r1-200-200_00.gif"
            }
            alt="loading"
          />
        </div>
      )}
    </div>
  );
};
export default Auth;
