import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterContainer from "../pages/Counter/Containers/CounterContainer";
import CountersContainer from "../pages/Counters/Containers/CountersContainers";
import HomeContainer from "../pages/Home/Containers/HomeContainer";
import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS_PAGE} element={<CountersContainer />} />
    </Routes>
  );
};
