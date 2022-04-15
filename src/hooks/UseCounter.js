import { useState } from "react";
import { useCallback } from "react";

const useCounter = (defaultValue = 0) => {
  const [currentValue, setCount] = useState(defaultValue);

  const handleIncrement = useCallback(() => {
    setCount((currentValue) => currentValue + 1);
  }, [currentValue]);

  const handleDecrement = useCallback(() => {
    setCount((currentValue) => currentValue - 1);
  }, [currentValue]);

  const onReset = useCallback(() => {
    setCount(0);
  });

  return { currentValue, handleIncrement, handleDecrement, onReset };
};

export default useCounter;
