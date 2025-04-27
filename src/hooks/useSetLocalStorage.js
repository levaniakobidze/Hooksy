
export function useSetLocalStorage() {
    return (key,value) => {
      try {
        const valueToStore = value instanceof Function ? value() : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };  
  }