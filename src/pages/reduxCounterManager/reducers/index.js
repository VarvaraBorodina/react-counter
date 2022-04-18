import * as actions from "../actions";
import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

const initialState = {
  counters: [],
};

const CounterManagerReducer = handleActions(
  {
    [actions.INCREMENT_COUNTER]: (state) => {
      return state;
    },

    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = {
        value: 0,
        id: uuid(),
      };
      return {
        counters: [...state.counters, newCounter],
      };
    },

    [actions.REMOVE_COUNTER]: (state, { payload: id }) => {
      console.log(id);
      const updatedCounters = [...state.counters];
      const index = updatedCounters.findIndex((counter) => counter.id === id);
      updatedCounters.splice(index, 1);

      return { counters: updatedCounters };
    },
  },
  initialState
);

export default CounterManagerReducer;
