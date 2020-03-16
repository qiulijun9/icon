import { useRef, useCallback } from 'react';

export type Fn<T extends any[]> = (...args: T) => any;

export interface RV<T extends any[]> {
  run: (...args: T) => void;
  clear: () => void;
}

function useTimeout<T extends any[]>(fn: Fn<T>, delay: number = 0): RV<T> {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const fnRef = useRef<Fn<T>>(fn);
  fnRef.current = fn;

  const clear = useCallback(() => {
    timer.current && clearTimeout(timer.current);
  }, []);

  const run = useCallback(
    (...args: T) => {
      timer.current = setTimeout(() => {
        fnRef.current(...args);
        clear();
      }, delay);
    },
    [clear, delay]
  );

  return { run, clear };
}

export default useTimeout;
