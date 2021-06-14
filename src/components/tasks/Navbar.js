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
    <div className='w-full max-w-full flex justify-center'>
      <div className=" py-4 bg-white text-2xl text-gray-textGray z-10 sm:flex-col flex justify-around items-center shadow-lg w-9/12 md:w-screen  xl:w-7/12  rounded-xl">
      <div className='text-4xl sm:mb-4'>Task Management</div>
      <div className="flex py-4 w-56 justify-around rounded-xl bg-orange-light">
        <div className="flex items-center text-xl  mr-2 sm:hidden">{userName}</div>
        <button
          className="bg-orange-main text-white px-4 py-2 text-center text-sm rounded-md"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
