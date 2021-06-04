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
      <div>
        <Navbar />
      </div>
      <div className="flex sm:flex-col">
        <div className="w-1/5 md:w-2/5  sm:w-full">
          <SideBar />
        </div>
        <div className="w-4/5 md:w-3/5 sm:w-full">
          <ShowingTask />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
