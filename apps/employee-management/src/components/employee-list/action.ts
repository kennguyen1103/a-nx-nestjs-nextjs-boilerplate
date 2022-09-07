import { createAction } from "redux-actions";

export const LOAD_EMPLOYEE_LIST_ACTION = "LOAD_EMPLOYEE_LIST_ACTION";
export const LOAD_EMPLOYEE_LIST_SUCCESS_ACTION = "LOAD_EMPLOYEE_LIST_SUCCESS_ACTION";
export const LOAD_EMPLOYEE_LIST_FAIL_ACTION = "LOAD_EMPLOYEE_LIST_FAIL_ACTION";

export const loadEmployeeList = createAction(LOAD_EMPLOYEE_LIST_ACTION);
export const loadEmployeeListSuccess = createAction(LOAD_EMPLOYEE_LIST_SUCCESS_ACTION);
export const loadEmployeeListFail = createAction(LOAD_EMPLOYEE_LIST_FAIL_ACTION);
