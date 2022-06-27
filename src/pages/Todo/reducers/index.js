import * as actions from "../actions";
import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

const initialState = {
  todos: [],
};

const TodoManagerReducer = handleActions(
  {
    [actions.ADD_TODO]: (state, { payload: todo }) => {
      const newTodo = {
        id: uuid(),
        description: todo,
        isDone: false,
        isChange: false,
      };
      return {
        todos: [...state.todos, newTodo],
      };
    },

    [actions.DELETE_TODO]: (state, { payload: id }) => {
      return {
        todos: state.todos.filter((todo) => todo.id != id),
      };
    },

    [actions.FULFILL_TODO]: (state, { payload: id }) => {
      console.log(id);
      const updatedTodos = [...state.todos];

      const index = state.todos.findIndex((todo) => todo.id === id);
      updatedTodos[index].isDone = true;

      return {
        todos: updatedTodos,
      };
    },

    [actions.EDIT_TODO]: (state, { payload: id }) => {
      const updatedTodos = [...state.todos];

      if (state.todos.findIndex((todo) => todo.isChange) === -1) {
        const index = state.todos.findIndex((todo) => todo.id === id);
        updatedTodos[index].isChange = true;
      }

      return {
        todos: updatedTodos,
      };
    },

    [actions.REMOVE_TODO]: (state, { payload: id }) => {
      const updatedTodos = [...state.todos];

      const index = state.todos.findIndex((todo) => todo.id === id);
      updatedTodos[index].isChange = false;

      return {
        todos: updatedTodos,
      };
    },

    [actions.CHANGE_TODO]: (state, { payload: { id, value } }) => {
      const updatedTodos = [...state.todos];
      console.log(id, value);

      const index = state.todos.findIndex((todo) => todo.id === id);
      updatedTodos[index].isChange = false;
      updatedTodos[index].description = value;

      return {
        todos: updatedTodos,
      };
    },
  },
  initialState
);

export default TodoManagerReducer;
