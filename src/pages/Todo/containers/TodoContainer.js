import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Item, Stack } from "@mui/material";

import {
  ADD_TODO,
  DELETE_TODO,
  FULFILL_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  CHANGE_TODO,
} from "../actions";

import AddTodoFormView from "../components/todoView/AddTodoFormView";
import TodoView from "../components/todoView/TodoView";
import EditTodoFormView from "../components/todoView/EditTodoFormView";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");

  const handleChange = useCallback(({ target: { value } }) => {
    setInputValue((state) => value);
  }, []);

  const handleChangeEditValue = useCallback(({ target: { value } }) => {
    setEditValue((state) => value);
  });

  const { todos } = useSelector((store) => store.todoManager);

  console.log(todos);

  const handleAdd = (id) => {
    if (inputValue != "") {
      setInputValue((state) => "");
      dispatch(ADD_TODO(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(DELETE_TODO(id));
  };

  const handleFulfill = (id) => {
    dispatch(FULFILL_TODO(id));
  };

  const handleEdit = ({ id, value }) => {
    setEditValue((state) => value);
    dispatch(EDIT_TODO(id));
  };

  const handleRemove = (id) => {
    setEditValue((state) => "");
    dispatch(REMOVE_TODO(id));
  };

  const handleChangeTodo = (id) => {
    setEditValue((state) => "");
    dispatch(CHANGE_TODO(id));
  };

  return (
    <div>
      <AddTodoFormView
        inputValue={inputValue}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }} mt={4}>
        {todos.map((todo) => {
          if (todo.isChange) {
            return (
              <EditTodoFormView
                inputValue={editValue}
                handleRemove={handleRemove}
                handleChange={handleChangeEditValue}
                handleEdit={handleChangeTodo}
                key={todo.id}
                id={todo.id}
              />
            );
          } else {
            return (
              <TodoView
                todo={todo.description}
                handleFulfill={handleFulfill}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                isDone={todo.isDone}
                key={todo.id}
                id={todo.id}
              />
            );
          }
        })}
      </Stack>
    </div>
  );
};

export default TodoContainer;
