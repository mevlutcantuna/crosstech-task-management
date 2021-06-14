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
    <div className="bg-gray-main min-h-screen flex flex-col">
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="w-screen  flex flex-col justify-center items-center relative ">
        <div
          onClick={backToTasks}
          className="absolute top-16 text-center left-16 cursor-pointer hover:text-red-400 text-2xl flex items-center"
        >
          <ArrowBackIcon /> BACK
        </div>
        <div className="w-1/2 h-96 bg-white rounded-2xl mt-20 shadow-xl flex flex-col justify-around items-center p-4">
          <div className="text-3xl font-medium text-orange-main">
            {detailOfTask.payload?.title}
          </div>
          <div className='text-2xl'>{detailOfTask.payload?.description}</div>
          <div>Created by : {detailOfTask.payload?.logs[0]?.userName}</div>
          <div>Created date : {detailOfTask.payload?.logs[0]?.date}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
