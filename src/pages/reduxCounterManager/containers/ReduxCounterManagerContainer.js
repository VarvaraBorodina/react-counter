import { useDispatch, useSelector } from "react-redux";
import Counter from "../../Counters/Components/CountersView/Counter";

import { CREATE_COUNTER, REMOVE_COUNTER } from "../actions";

const ReduxCounterManagerContainer = () => {
  const dispatch = useDispatch();

  const { counters } = useSelector((store) => store.countersManager);

  const handleCounterCreate = () => {
    dispatch(CREATE_COUNTER());
  };

  const handleCounterDelete = (id) => {
    dispatch(REMOVE_COUNTER(id));
  };

  return (
    <div>
      <button onClick={handleCounterCreate}>Add</button>
      {counters.map(({ value, id }) => {
        return (
          <Counter
            value={value}
            id={id}
            key={id}
            onDelete={() => handleCounterDelete(id)}
          />
        );
      })}
    </div>
  );
};

export default ReduxCounterManagerContainer;
