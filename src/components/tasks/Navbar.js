import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/constants/AuthConstant";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: LOGOUT.LOGOUT });
    localStorage.removeItem("user");
    history.push("/");
  };

  const userName = JSON.parse(localStorage.getItem("user"))?.name;

  return (
    <div className="py-4 px-10 bg-blue-200 text-2xl text-gray-100 flex justify-around shadow-lg">
      <div>Task Management</div>
      <div className="flex">
        <div className="text-xl text-black mr-2 sm:hidden">{userName}</div>
        <button
          className="bg-blue-500 px-2 py-1 text-sm rounded-md"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
