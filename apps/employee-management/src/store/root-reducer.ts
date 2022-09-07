import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import EmployeeListReducer from "../../src/components/employee-list/reducer";

const combinedReducer = combineReducers({
  employeeListReducer: EmployeeListReducer,
});

const RootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default RootReducer;
