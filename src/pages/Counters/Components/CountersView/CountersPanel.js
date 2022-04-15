import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";
import { memo } from "react";
import Counter from "./Counter";

import PropTypes from "prop-types";
import styles from "../../../../components/Header/styles.module.css";

const CountersPanel = ({
  onAdd,
  onRemove,
  onReset,
  counters,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleDelete,
}) => {
  let sum = 0;
  return (
    <>
      <div className={styles.container}>
        <button className={styles.link} onClick={onAdd}>
          Add
        </button>
        <button className={styles.link} onClick={onRemove}>
          Remove
        </button>
        <button className={styles.link} onClick={onReset}>
          Reset
        </button>
      </div>
      <div className={styles.body}>
        {counters.map(({ value, id }) => {
          sum = sum + value;
          return (
            <Counter
              onReset={handleReset}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
              value={value}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <div className={styles.container}>
        <p className={styles.link}>Summary: {sum}</p>
        <p className={styles.link}>Number of counters: {counters.length}</p>
      </div>
    </>
  );
};

CountersPanel.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  counters: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default memo(CountersPanel);
