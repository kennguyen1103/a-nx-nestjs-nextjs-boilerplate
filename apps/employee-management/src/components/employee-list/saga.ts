import { put, takeEvery, call } from "redux-saga/effects";
import { deleteRequest, get, post } from "../../utils";
import { push } from "connected-next-router";
import {
  loadEmployeeList,
  loadEmployeeListSuccess,
  loadEmployeeListFail,
  deleteEmployeeSuccess,
  deleteEmployeeFail,
  deleteEmployee,
  addEmployee,
} from "./action";

function* handleLoadEmployeeList() {
  try {
    const data = yield call(get, `employee`);
    yield put(loadEmployeeListSuccess({ data }));
  } catch (err) {
    yield put(loadEmployeeListFail(err));
  }
}

function* handleDeleteEmployee({ payload: id }) {
  try {
    const data = yield call(deleteRequest, `employee/${id}`);
    yield put(deleteEmployeeSuccess({ data }));
    yield put(loadEmployeeList());
  } catch (err) {
    yield put(deleteEmployeeFail(err));
  }
}

function* handleInsertEmployee({ payload }) {
  yield call(post, `employee`, payload);
  yield put(push({ pathname: "/employee/list" }));
}

export default function* saga() {
  yield takeEvery(addEmployee, handleInsertEmployee);
  yield takeEvery(deleteEmployee, handleDeleteEmployee);
  yield takeEvery(loadEmployeeList, handleLoadEmployeeList);
}
