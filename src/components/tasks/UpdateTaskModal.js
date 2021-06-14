import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
import updateTask from "../../store/actions/UpdateTaskAction";
import { getTasks } from "../../store/actions/TaskAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function UpdateTaskModal(props) {
  const [title, setTitle] = useState(props.oldTitle);
  const [desc, setDesc] = useState(props.oldDesc);

  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("user"))?.jwtToken;
  const currentPage = useSelector((state) => state.TaskReducer?.currentPage);

  const newTask = {
    title: title,
    description: desc,
  };

  const updateNewTask = () => {
    dispatch(updateTask(newTask, props.id, token));
    dispatch(getTasks(currentPage, token));
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="create a task"
    >
      <div className="flex flex-col items-start w-96 h-96">
        <div className="text-2xl mb-8 flex justify-between w-full items-center">
          <span>Uptade the Task</span>
          <span onClick={props.closeModal}>
            <CloseIcon
              className="cursor-pointer hover:text-red-400"
              style={{ fontSize: "2rem" }}
            />
          </span>
        </div>
        <label>Title:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id={"title"}
          className="rounded-md pl-2 mb-4 w-80 h-12 border-solid border-2 border-orange-light"
          placeholder={"Title"}
        />
        <label>Description:</label>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="rounded-md pl-2 mb-4 w-80 h-12 border-solid border-2 border-orange-light"
          placeholder={"Description"}
        />
        <div className="mt-4 w-full flex items-center justify-center">
          <Button
            onClick={updateNewTask}
            className="w-28 h-12 bg-orange-light"
            variant="contained"
            style={{background:'orange',color:'white'}}
          >
            Update Task
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateTaskModal;
