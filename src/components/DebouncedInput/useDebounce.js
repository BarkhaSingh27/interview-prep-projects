import { useRef, useEffect } from 'react';
  
  const useDebounce = (callback, delay) =>  {
    const timerRef = useRef(null);

    useEffect(() => {
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, []);

    return (...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  
  export default useDebounce;
  