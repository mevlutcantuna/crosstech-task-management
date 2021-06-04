import React from "react";
import { useDispatch } from "react-redux";
import { CURRENTPAGE } from "../../store/constants/TaskConstant";
import CreateTaskModal from "./CreateTaskModal";

function SideBar(props) {
  const dispatch = useDispatch();

  const currentPage = (pageName) => {
    dispatch({ type: CURRENTPAGE, payload: pageName });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="pt-10 pb-10 bg-blue-500 w-full min-h-screen sm:min-h-full h-full shadow-lg sm:w-full sm:h-80">
      <ul className="flex flex-col items-center">
        <li
          onClick={() => currentPage("task")}
          className="bg-blue-400 p-2 cursor-pointer text-white w-full flex justify-center text-xl hover:bg-blue-900 mb-6"
        >
          All Tasks
        </li>
        <li
          onClick={() => currentPage("task/my-tasks")}
          className="bg-blue-400 p-2 cursor-pointer text-white w-full flex justify-center text-xl hover:bg-blue-900 mb-6"
        >
          My Tasks
        </li>
        <li
          onClick={() => currentPage("task/pendings")}
          className="bg-blue-400 p-2 cursor-pointer text-white w-full flex justify-center text-xl hover:bg-blue-900 mb-6"
        >
          My Department Tasks
        </li>
        <li
          onClick={openModal}
          className="bg-blue-400 p-2 text-white w-full cursor-pointer flex justify-center text-xl hover:bg-blue-900 mb-6"
        >
          Create a Task
        </li>
      </ul>
      <CreateTaskModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}

export default SideBar;
