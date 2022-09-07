import { handleActions } from "redux-actions";
import { loadEmployeeList, loadEmployeeListSuccess, loadEmployeeListFail } from "./action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = handleActions(
  {
    [loadEmployeeList](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [loadEmployeeListSuccess](state, { payload }) {
      return {
        ...state,
        data: payload.data,
        loading: false,
        error: null,
      };
    },
    [loadEmployeeListFail](state, { payload }) {
      return {
        ...state,
        data: {},
        loading: false,
        error: payload.error,
      };
    },
  },
  initialState
);

export default reducer;
