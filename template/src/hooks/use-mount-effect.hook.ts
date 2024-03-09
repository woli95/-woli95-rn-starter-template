import {useEffect} from 'react';

export const useMountEffect = (func: VoidFunction) => {
  useEffect(() => {
    func();
  }, [func]);
};
