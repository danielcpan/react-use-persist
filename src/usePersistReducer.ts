import { useReducer, useCallback, useEffect } from 'react';
import { isString, rawFn } from './utils';
import type { TUsePersist } from './types';

const usePersistReducer = ({
  store,
  key,
  reducer,
  initialState,
  options: {
    raw = false,
    serialize: serializeFn = JSON.stringify,
    deserialize: deserializeFn = JSON.parse
  } = {}
}: TUsePersist) => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const deserialize = useCallback(raw ? rawFn : deserializeFn, [raw, deserializeFn]);
  const serialize = useCallback(raw ? rawFn : serializeFn, [raw, serializeFn]);

  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const item = store.getItem(key);

    return item ? deserialize(item) : initialState;
  });

  useEffect(() => {
    store.setItem(key, serialize(state));
  }, [key, state]);

  return [state, dispatch];
};

export default usePersistReducer;
