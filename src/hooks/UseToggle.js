import { useState } from "react";
import { useCallback } from "react";

const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);
  const changeToggle = useCallback(() => {
    setToggle((toggle) => !toggle);
  });
  return [toggle, changeToggle];
};

export default useToggle;
