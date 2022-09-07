import { handleActions } from "redux-actions";
import {
  loadEmployeeList,
  loadEmployeeListSuccess,
  loadEmployeeListFail,
  getEmployeeDetail,
  getEmployeeDetailSuccess,
  getEmployeeDetailFail,
} from "./action";

const initialState = {
  data: [],
  detail: {},
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
    [getEmployeeDetail](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [getEmployeeDetailSuccess](state, { payload }) {
      return {
        ...state,
        detail: payload.data,
        loading: false,
        error: null,
      };
    },
    [getEmployeeDetailFail](state, { payload }) {
      return {
        ...state,
        detail: {},
        loading: false,
        error: payload.error,
      };
    },
  },
  initialState
);

export default reducer;
