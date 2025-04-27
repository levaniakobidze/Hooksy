import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  // Get from localStorage initially
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Function to update localStorage and state
  const setValue = (value) => {
    try {
      // Allow value to be a function (like in setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
