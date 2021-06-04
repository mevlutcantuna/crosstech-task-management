import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions/TaskAction";
import TaskCard from "./TaskCard";

function ShowingTask(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.TaskReducer?.currentPage);
  const token = JSON.parse(localStorage.getItem("user"))?.jwtToken;

  useEffect(() => {
    dispatch(getTasks(currentPage, token));
    console.log("worked");
  }, [dispatch, currentPage, token]);

  const tasks = useSelector(
    (state) => state.TaskReducer.currentPageTasks?.payload
  );

  // console.log(tasks);

  return (
    <div className="text-black ">
      <div className=" flex justify-center mt-4  text-4xl text-blue-600 font-medium">
        {currentPage.toLowerCase() === "task" && "All Tasks"}
        {currentPage.toLowerCase() === "task/my-tasks" && "My Tasks"}
        {currentPage.toLowerCase() === "task/pendings" && "Departments Tasks"}
      </div>
      <div className="flex flex-wrap justify-center ">
        {tasks?.map((item) => (
          <TaskCard key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShowingTask;
