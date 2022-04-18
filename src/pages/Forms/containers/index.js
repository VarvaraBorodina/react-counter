import { useState, useCallback } from "react";
import { Checkbox } from "@mui/material";

import useForm from "../../../hooks/useForm";
import styles from "./styles.module.scss";
import useStyles from "./styles";

const FormContainer = () => {
  const [formValues, handleChange] = useForm({ email: "", password: "" });

  const classes = useStyles();

  /* const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputValue((state) => {
      const copy = { ...state };
      copy[name] = value;
      return copy;
    });
  }, []);
*/
  const handleSubmit = useCallback(() => {
    alert(JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>email:</p>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        ></input>
        <p>password:</p>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        ></input>
        <Checkbox className={styles.checkbox} />
        <button role="submit">Click</button>
      </form>
    </div>
  );
};

export default FormContainer;
