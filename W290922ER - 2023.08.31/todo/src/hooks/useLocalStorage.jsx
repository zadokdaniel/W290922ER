import { useState } from "react";

export const useLocalStorage = (initialValue, key = null, { reviver } = {}) => {
  const [state, setState] = useState(() => {
    const value =
      typeof initialValue === "function" ? initialValue() : initialValue;

    if (!key) {
      return value;
    }

    const localStorageValue = localStorage.getItem(key);

    if (!localStorageValue) {
      return value;
    }

    return JSON.parse(localStorageValue, reviver);
  });

  const save = (value) => {
    if (!key) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  };

  const setLocalStorageState = (valueOrFunction) => {
    setState((state) => {
      const value =
        typeof valueOrFunction === "function"
          ? valueOrFunction(state)
          : valueOrFunction;

      save(value);
      return value;
    });
  };

  return [state, setLocalStorageState];
};
