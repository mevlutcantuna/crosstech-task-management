import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { useDispatch, useSelector } from "react-redux";
import UpdateTaskModal from "./UpdateTaskModal";
import CloseIcon from "@material-ui/icons/Close";
import deleteTask from "../../store/actions/DeleteTaskAction";
import completeTask from "../../store/actions/CompleteTaskAction";
import rejectTask from "../../store/actions/RejectTaskAction";
import { getTasks } from "../../store/actions/TaskAction";

function TaskCard({ item }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("user"))?.jwtToken;
  const user = JSON.parse(localStorage.getItem("user"));

  const currentPage = useSelector((state) => state.TaskReducer?.currentPage);

  const goDetail = () => {
    history.push(`tasks/${item.id}`);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteATask = () => {
    dispatch(deleteTask(item.id, token));
    dispatch(getTasks(currentPage, token));
  };

  const completeTheTask = () => {
    dispatch(completeTask(item.id, token));
    console.log("completed");
    dispatch(getTasks(currentPage, token));
  };

  const rejectTheTask = () => {
    dispatch(rejectTask(item.id, token));
    dispatch(getTasks(currentPage, token));
  };

  return (
    <div className="flex flex-col justify-between bg-gray-200 w-72 h-72 p-4 m-4 rounded-xl">
      <div className="text-xl flex justify-between mb-2">
        <span>{item.title}</span>
        <span
          className={`${
            user.name !== item.user.name ? "hidden" : "cursor-pointer"
          }`}
          onClick={deleteATask}
        >
          <CloseIcon />
        </span>
      </div>
      <div>{item.description}</div>
      <div
        className={`${
          user.name !== item.user.name ? "hidden" : "cursor-pointer"
        }`}
        onClick={openModal}
      >
        <SystemUpdateAltIcon />
      </div>
      <div className="font-medium">
        {item.assignedDepartment === 1 && "Human Resource Department"}
        {item.assignedDepartment === 2 && "Sales Department"}
        {item.assignedDepartment === 3 && "Marketing Department"}
      </div>
      <Button onClick={goDetail} variant="contained" color="primary">
        Go Detail
      </Button>
      <UpdateTaskModal
        oldTitle={item.title}
        oldDesc={item.description}
        id={item.id}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <div
        className={`${
          item.assignedDepartment !== user.department && "hidden"
        } ${item.status !== 0 && "hidden"} flex justify-between`}
      >
        <Button onClick={completeTheTask} variant="contained" color={"primary"}>
          Complete
        </Button>
        <Button
          onClick={rejectTheTask}
          variant={"contained"}
          color={"secondary"}
        >
          Reject
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
