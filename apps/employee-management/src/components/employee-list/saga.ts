import { put, takeEvery, call } from "redux-saga/effects";
import { get } from "../../utils";
import { loadEmployeeList, loadEmployeeListSuccess, loadEmployeeListFail } from "./action";

function* handleLoadEmployeeList() {
  try {
    const data = yield call(get, `employee`);

    yield put(loadEmployeeListSuccess(data));
  } catch (err) {
    yield put(loadEmployeeListFail(err));
  }
}

export default function* saga() {
  yield takeEvery(loadEmployeeList, handleLoadEmployeeList);
}
