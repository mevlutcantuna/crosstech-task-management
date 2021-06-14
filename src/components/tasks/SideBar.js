import React from "react";
import { useDispatch } from "react-redux";
import { CURRENTPAGE } from "../../store/constants/TaskConstant";
import CreateTaskModal from "./CreateTaskModal";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

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
    <div className=" pb-10 bg-white w-72  h-5/6 sm:h-96 shadow-lg  fixed top-10 md:absolute md:mt-32 md:w-11/12 md:mx-auto md:h-96 z-0  left-4 rounded-xl">
      <ul className="flex flex-col items-center">
        <li className='mb-16 mt-4' >
          <FormatListBulletedIcon style={{fontSize:'2.5rem',color:'orange'}}/>
        </li>
        <li
          onClick={() => currentPage("task")}
          className="w-11/12 h-12 p-2 pb-0 cursor-pointer text-gray-textGray rounded-xl flex justify-center items-center text-2xl mb-6 hover:text-orange-main hover:bg-gray-main"
        >
          All Tasks
        </li>
        <li
          onClick={() => currentPage("task/my-tasks")}
          className="w-11/12 h-12 p-2 pb-0 cursor-pointer text-gray-textGray rounded-xl flex justify-center items-center text-2xl mb-6 hover:text-orange-main hover:bg-gray-main"
        >
          My Tasks
        </li>
        <li
          onClick={() => currentPage("task/pendings")}
          className="w-11/12 h-12 p-2 pb-0 cursor-pointer text-gray-textGray rounded-xl flex justify-center items-center text-2xl mb-6 hover:text-orange-main hover:bg-gray-main"
        >
          My Department Tasks
        </li>
        <li
          onClick={openModal}
          className="w-11/12 h-12 p-2 pb-0 cursor-pointer text-gray-textGray rounded-xl flex justify-center items-center text-2xl mb-6 hover:text-orange-main hover:bg-gray-main"
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
