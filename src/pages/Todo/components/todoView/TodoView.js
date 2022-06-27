import React from "react";
import { Button, Paper, TextField, Stack } from "@mui/material";
import PropTypes from "prop-types";
import DoneIcon from "@mui/icons-material/Done";

const TodoView = ({
  todo,
  handleDelete,
  handleFulfill,
  handleEdit,
  id,
  isDone,
}) => {
  return (
    <Stack sx={{ width: 1 / 2 }} direction="row" spacing={1}>
      <Paper sx={{ width: 4 / 5 }} direction="row">
        {isDone && <DoneIcon />} {todo}
      </Paper>
      <Button
        onClick={() => handleFulfill(id)}
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        FULFILL
      </Button>

      <Button
        onClick={() => handleEdit({ id: id, value: todo })}
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        EDIT
      </Button>
      <Button
        onClick={() => handleDelete(id)}
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        DELETE
      </Button>
    </Stack>
  );
};

TodoView.propTypes = {
  todo: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleFulfill: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TodoView;
