import { combineReducers } from "redux";
import CounterManagerReducer from "../pages/reduxCounterManager/reducers";
import TodoManagerReducer from "../pages/Todo/reducers";

export const rootReducer = combineReducers({
  countersManager: CounterManagerReducer,
  todoManager: TodoManagerReducer,
});
