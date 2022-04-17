import { useState, useEffect, useCallback, useMemo, memo } from "react";
import CountersPanel from "../Components/CountersView/CountersPanel";
import { v4 as uuid } from "uuid";

const CountersContainer = () => {
  const [counters, setCounters] = useState([]);

  const add = useCallback(() => {
    setCounters((state) => {
      const copy = [...state].map(({ value, id }) => {
        return { value: value + 1 - (value % 2), id: id };
      });

      copy.push({
        value: 0,
        id: uuid(),
      });

      return copy;
    });
  }, []);

  const remove = useCallback(() => {
    setCounters((state) => {
      const copy = [...state];
      copy.pop();

      return copy.map(({ value, id }) => {
        return { value: value - (value % 2), id: id };
      });
    });
  }, []);

  const reset = useCallback(() => {
    setCounters((state) => {
      return [];
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      const index = state.findIndex((counter) => counter.id == id);
      const currentValue = state[index].value;

      const copy = [...state];
      copy[index].value = currentValue + 1;
      return copy;
    }, []);
  }, []);

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      const index = state.findIndex((counter) => counter.id == id);
      const currentValue = state[index].value;

      const copy = [...state];
      if (currentValue > 0) {
        copy[index].value = currentValue - 1;
      }
      return copy;
    }, []);
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((state) => {
      const index = state.findIndex((counter) => counter.id == id);

      const copy = [...state];
      copy[index].value = 0;
      return copy;
    }, []);
  }, []);

  const handleDelete = useCallback((id) => {
    setCounters((state) => state.filter((counter) => counter.id != id));
  }, []);

  return (
    <div>
      <CountersPanel
        onReset={reset}
        onAdd={add}
        onRemove={remove}
        counters={counters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default memo(CountersContainer);
