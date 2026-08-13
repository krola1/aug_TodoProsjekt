import { useEffect } from "react";
import { useState } from "react";

export const useLocalStorage = (key, initialValue = []) => {
  const [value, setValue] = useState(() => {
    //try catch in case of corrupt or otherwis unusable data is parsed
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("could not read from localstorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    // try catch in case localstorage is full,
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("could not write to localstorage", error);
    }
  }, [key, value]);

  return [value, setValue];
};
