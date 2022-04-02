import PropTypes from "prop-types";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";

const CounterView = ({
  currentValue,
  onDecriment,
  onIncrement,
  onReset,
  numberType,
}) => {
  let className = styles.wrapper;
  if (numberType === "even") {
    className = styles.wrapperEven;
  } else {
    className = styles.wrapperOdd;
  }
  return (
    <div
      className={`${styles.wrapper} ${
        numberType === "even" ? styles.even : styles.odd
      }`}
    >
      <div className={styles.screens}>
        <div className={styles.screen}> {currentValue} </div>
        <div className={styles.screen}> {numberType} </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onDecriment}>
          -
        </button>
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
        <button className={styles.button} onClick={onIncrement}>
          +
        </button>
      </div>
      <Link className={styles.link} to={ROUTE_NAMES.HOME_PAGE}>
        Home
      </Link>
    </div>
  );
};

CounterView.propTypes = {
  currentValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecriment: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  numberType: PropTypes.string.isRequired,
};

export default CounterView;
