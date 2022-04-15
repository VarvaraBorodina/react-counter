import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes/routeNames";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={ROUTE_NAMES.COUNTER_PAGE} className={styles.link}>
        COUNTER
      </Link>
      <Link to={ROUTE_NAMES.HOME_PAGE} className={styles.link}>
        HOME
      </Link>
      <Link to={ROUTE_NAMES.COUNTERS_PAGE} className={styles.link}>
        COUNTERS
      </Link>
    </div>
  );
};

export default Header;
