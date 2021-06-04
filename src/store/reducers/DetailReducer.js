import { GET_TASK_BY_ID } from "../constants/DetailConstant";

const initialState = {
  detailOfTask: [],
  fetched: false,
  pending: false,
  error: null,
};

const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_BY_ID.GET_TASK_BY_ID_SUCCESS:
      return {
        ...state,
        fetched: true,
        pending: false,
        error: null,
        detailOfTask: action.payload.data,
      };
    case GET_TASK_BY_ID.GET_TASK_BY_ID_ERROR:
      return {
        ...state,
        fetched: false,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DetailReducer;
