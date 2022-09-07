import { createAction } from "redux-actions";

export const LOAD_EMPLOYEE_LIST_ACTION = "LOAD_EMPLOYEE_LIST_ACTION";
export const LOAD_EMPLOYEE_LIST_SUCCESS_ACTION = "LOAD_EMPLOYEE_LIST_SUCCESS_ACTION";
export const LOAD_EMPLOYEE_LIST_FAIL_ACTION = "LOAD_EMPLOYEE_LIST_FAIL_ACTION";

export const loadEmployeeList = createAction(LOAD_EMPLOYEE_LIST_ACTION);
export const loadEmployeeListSuccess = createAction(LOAD_EMPLOYEE_LIST_SUCCESS_ACTION);
export const loadEmployeeListFail = createAction(LOAD_EMPLOYEE_LIST_FAIL_ACTION);

export const DELETE_EMPLOYEE_ACTION = "DELETE_EMPLOYEE_ACTION";
export const DELETE_EMPLOYEE_SUCCESS_ACTION = "DELETE_EMPLOYEE_SUCCESS_ACTION";
export const DELETE_EMPLOYEE_FAIL_ACTION = "DELETE_EMPLOYEE_FAIL_ACTION";

export const deleteEmployee = createAction(DELETE_EMPLOYEE_ACTION);
export const deleteEmployeeSuccess = createAction(DELETE_EMPLOYEE_SUCCESS_ACTION);
export const deleteEmployeeFail = createAction(DELETE_EMPLOYEE_FAIL_ACTION);

export const ADD_EMPLOYEE_ACTION = "ADD_EMPLOYEE_ACTION";
export const addEmployee = createAction(ADD_EMPLOYEE_ACTION);

export const EDIT_EMPLOYEE_ACTION = "EDIT_EMPLOYEE_ACTION";
export const editEmployee = createAction(EDIT_EMPLOYEE_ACTION);

export const GET_EMPLOYEE_DETAIL_ACTION = "GET_EMPLOYEE_DETAIL_ACTION";
export const GET_EMPLOYEE_DETAIL_SUCCESS_ACTION = "GET_EMPLOYEE_DETAIL_SUCCESS_ACTION";
export const GET_EMPLOYEE_DETAIL_FAIL_ACTION = "GET_EMPLOYEE_DETAIL_FAIL_ACTION";
export const getEmployeeDetail = createAction(GET_EMPLOYEE_DETAIL_ACTION);
export const getEmployeeDetailSuccess = createAction(GET_EMPLOYEE_DETAIL_SUCCESS_ACTION);
export const getEmployeeDetailFail = createAction(GET_EMPLOYEE_DETAIL_FAIL_ACTION);
