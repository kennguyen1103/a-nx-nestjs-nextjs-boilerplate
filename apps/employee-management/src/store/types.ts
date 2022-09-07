import "redux";
import { Task } from "redux-saga";

declare module "redux" {
  export interface Store {
    sagaTask?: Task;
  }
}
export const LOCAL_LOGIN_REQUEST = "LOCAL_LOGIN_REQUEST" as const;
export const LOCAL_LOGIN_SUCCESS = "LOCAL_LOGIN_SUCCESS" as const;
export const LOCAL_LOGIN_FAILURE = "LOCAL_LOGIN_FAILURE" as const;
