import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";
import { memo, useMemo } from "react";

import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Counter = ({
  value,
  onDecrement,
  onIncrement,
  onReset,
  onDelete,
  id,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${value % 2 ? styles.odd : styles.even}`}
    >
      <div className={styles.screens}>
        <div className={styles.screen}> {value} </div>
        <div className={styles.screen}> {value % 2 ? "odd" : "even"} </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => onDecrement(id)}>
          -
        </button>
        <button className={styles.button} onClick={() => onReset(id)}>
          Reset
        </button>
        <button className={styles.button} onClick={() => onIncrement(id)}>
          +
        </button>
        <button className={styles.button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(Counter);
