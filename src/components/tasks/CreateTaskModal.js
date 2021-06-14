import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import createTask from "../../store/actions/CraeteTaskAction";
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

function CreateTaskModal(props) {
  const [optionValue, setOptionValue] = useState(1);
  const [createTitle, setCreateTitle] = useState("");
  const [createDesc, setCreateDesc] = useState("");

  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("user"))?.jwtToken;

  //
  const currentPage = useSelector((state) => state.TaskReducer?.currentPage);
  //

  const createNewTask = () => {
    const newTask = {
      title: createTitle,
      description: createDesc,
      assignedDepartment: Number(optionValue),
    };
    dispatch(createTask(newTask, token));
    dispatch(getTasks(currentPage, token));
    props.closeModal();
    setCreateTitle("");
    setCreateDesc("");
    setOptionValue(1);
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="create a task"
    >
      <div className="flex flex-col items-start w-96 h-96 ">
        <div className="text-2xl mb-8 flex justify-between w-full items-center">
          <span>Create a new Task</span>
          <span onClick={props.closeModal}>
            <CloseIcon
              className="cursor-pointer hover:text-red-400"
              style={{ fontSize: "2rem" }}
            />
          </span>
        </div>
        <label>Title:</label>
        <input
          onChange={(e) => setCreateTitle(e.target.value)}
          value={createTitle}
          id={"title"}
          className="rounded-md pl-2 mb-4 w-80 h-12 border-solid border-2 border-orange-light"
          placeholder={"Title"}
        />
        <label>Description:</label>
        <input
          onChange={(e) => setCreateDesc(e.target.value)}
          value={createDesc}
          className="rounded-md pl-2 mb-4 w-80 h-12 border-solid border-2 border-orange-light"
          placeholder={"Description"}
        />
        <div className="flex flex-col">
          <label>Choose a department :</label>
          <select
            onChange={(e) => setOptionValue(e.target.value)}
            value={optionValue}
            className="border-solid border-2 border-orange-light rounded-md w-80 h-12"
          >
            <option value={1}>Human Resources Department</option>
            <option value={2}>Sales Department</option>
            <option value={3}>Marketing Department</option>
          </select>
        </div>
        <div className="mt-4 w-full flex items-center justify-center">
          <Button
            onClick={createNewTask}
            className="w-28 h-12"
            variant="contained"
            style={{background:'orange',color:'white'}}
          >
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateTaskModal;
