import { all, spawn } from "redux-saga/effects";

import { default as EmployeeListSaga } from "../components/employee-list/saga";

export default function* root() {
  yield all([spawn(EmployeeListSaga)]);
}
