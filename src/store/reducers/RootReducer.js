import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import TaskReducer from "./TaskReducer";
import DetailReducer from "./DetailReducer";
import CreateTaskReducer from "./CreateTaskReducer";
import UpdateTaskReducer from "./UpdateTaskReducer";
import DeleteTaskReducer from "./DeleteTaskReducer";
import CompleteTaskReducer from "./CompleteTaskReducer";
import RejectTaskReducer from "./RejectTaskReducer";

const rootReducer = combineReducers({
  AuthReducer,
  TaskReducer,
  DetailReducer,
  CreateTaskReducer,
  UpdateTaskReducer,
  DeleteTaskReducer,
  CompleteTaskReducer,
  RejectTaskReducer,
});

export default rootReducer;
