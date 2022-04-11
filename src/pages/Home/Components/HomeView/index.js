import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";

import PropTypes from "prop-types";
import styles from "./styles.module.css";

const HomeView = () => {
  return (
    <div className="wrapper">
      <Link className={styles.link} to={ROUTE_NAMES.COUNTER_PAGE}>
        Counter
      </Link>
    </div>
  );
};

export default HomeView;
