import React from "react";
import { Button, Paper, TextField, Stack } from "@mui/material";
import PropTypes from "prop-types";
import DoneIcon from "@mui/icons-material/Done";

const AddTodoFormView = ({
  inputValue,
  handleRemove,
  handleChange,
  handleEdit,
  id,
}) => {
  return (
    <Stack sx={{ width: 1 / 2 }} direction="row" spacing={1}>
      <TextField
        onChange={handleChange}
        value={inputValue}
        label={"Add to do"}
        sx={{ width: 4 / 5 }}
      />
      <Button
        onClick={() => handleRemove(id)}
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        REMOVE
      </Button>

      <Button
        onClick={() =>
          handleEdit({
            id: id,
            value: inputValue,
          })
        }
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
      >
        CHANGE
      </Button>
    </Stack>
  );
};

AddTodoFormView.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default AddTodoFormView;
