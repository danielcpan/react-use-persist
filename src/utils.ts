import { useState, useCallback } from 'react';
import type { TUsePersistBase } from './types';

const isString = (el: any) => typeof el === 'string' || el instanceof String;

export const usePersistStateBase = ({ store, key, initialState, options }: TUsePersistBase) => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const [state, setState] = useState(() => {
    const item = store.getItem(key);

    if (item) return JSON.parse(item);
    if (options.writeInit) store.setItem(JSON.stringify(initialState));
    return initialState;
  });

  const setValue = useCallback(
    value => {
      const valueToStore = value instanceof Function ? value(state) : value;

      setState(valueToStore);
      store.setItem(key, JSON.stringify(valueToStore));
    },
    [key, state, setState]
  );

  const remove = useCallback(() => {
    setState(undefined);
    store.removeItem(key);
  }, [key, setState]);

  return [state, setValue, remove];
};

export const usePersistReducerBase = ({
  store,
  key,
  reducer,
  initialState,
  options
}: TUsePersistBase) => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const [state, setState] = useState(() => {
    const item = store.getItem(key);

    if (item) return JSON.parse(item);
    if (options.writeInit) store.setItem(JSON.stringify(initialState));
    return initialState;
  });

  const dispatch = useCallback(
    (action: any) => {
      const value = reducer(state, action);

      setState(value);
      store.setItem(key, JSON.stringify(value));
    },
    [key, state, setState]
  );

  const remove = useCallback(() => {
    setState(undefined);
    store.removeItem(key);
  }, [key, setState]);

  return [state, dispatch, remove];
};
