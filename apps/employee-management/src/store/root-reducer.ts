import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { createRouterMiddleware, initialRouterState, routerReducer } from "connected-next-router";

import EmployeeListReducer from "../../src/components/employee-list/reducer";

const combinedReducer = combineReducers({
  employeeList: EmployeeListReducer,
  router: routerReducer,
});

const RootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (typeof window !== "undefined" && state?.router) {
      // preserve router value on client side navigation
      nextState.router = state.router;
    }
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default RootReducer;
