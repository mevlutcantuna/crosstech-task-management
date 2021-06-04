import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import getTaskDetail from "../../store/actions/DetailAction";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Navbar from "./Navbar";

function TaskDetail(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = history.location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getTaskDetail(id));
  }, [dispatch, id]);

  const detailOfTask = useSelector((state) => state.DetailReducer.detailOfTask);

  const backToTasks = () => {
    history.push("/tasks");
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-col justify-center items-center relative">
        <div
          onClick={backToTasks}
          className="absolute top-16 left-16 cursor-pointer hover:text-red-400 text-2xl flex items-center"
        >
          <ArrowBackIcon /> BACK
        </div>
        <div className="w-80 h-60 mt-40 shadow-xl flex flex-col justify-around items-center p-4">
          <div className="text-2xl font-medium">
            {detailOfTask.payload?.title}
          </div>
          <div>{detailOfTask.payload?.description}</div>
          <div>Created by : {detailOfTask.payload?.logs[0]?.userName}</div>
          <div>Created date : {detailOfTask.payload?.logs[0]?.date}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
