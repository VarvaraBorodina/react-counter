import { Routes, Route } from "react-router-dom";

import CounterContainer from "../pages/Counter/Containers/CounterContainer";
import CountersContainer from "../pages/Counters/Containers/CountersContainers";
import HomeContainer from "../pages/Home/Containers/HomeContainer";
import TodoContainer from "../pages/Todo/containers/TodoContainer";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS_PAGE} element={<CountersContainer />} />
      <Route path={ROUTE_NAMES.TODO_PAGE} element={<TodoContainer />} />
    </Routes>
  );
};
