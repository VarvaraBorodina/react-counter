import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import PropTypes from "prop-types";

const AddTodoFormView = ({ inputValue, handleChange, handleAdd }) => {
  return (
    <Paper sx={{ width: 1 / 3 }} spacing={1}>
      <TextField
        onChange={handleChange}
        value={inputValue}
        label={"Add to do"}
        sx={{ width: 4 / 5 }}
      />
      <Button
        onClick={() => handleAdd(inputValue)}
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        Add
      </Button>
    </Paper>
  );
};

AddTodoFormView.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default AddTodoFormView;
