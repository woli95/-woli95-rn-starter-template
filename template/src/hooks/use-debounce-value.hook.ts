import {useEffect, useRef, useState} from 'react';

type Props<T> = {
  delayMs: number;
  value: T;
};

export const useDebounceValue = <T>({delayMs, value}: Props<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delayMs]);

  return debouncedValue;
};
