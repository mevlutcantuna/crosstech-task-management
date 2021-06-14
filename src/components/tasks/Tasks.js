import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import ShowingTask from "./ShowingTask";
import { useHistory } from "react-router-dom";

const Tasks = () => {
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      history.push("/");
    }
  }, [history]);

  return (
    <div>
      <div className="flex min-h-screen bg-gray-main md:flex-col sm:flex-col">
        <div className="w-1/5 xl:w-1/3 z-30 md:w-screen md:flex md:justify-center sm:w-full">
          <SideBar />
        </div>
        <div className="w-4/5 xl:w-2/3 md:w-full sm:w-full flex flex-col">
          <div className='fixed left-40 w-full z-10 h-36 flex items-end md:contents bg-gray-main'>
            <Navbar />
            </div>
          <ShowingTask />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
