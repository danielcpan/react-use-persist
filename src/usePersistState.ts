import { useState, useCallback, useEffect } from 'react';
import { isString, rawFn } from './utils';
import type { TUsePersist } from './types';

const usePersistState = ({
  store,
  key,
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

  const [state, setState] = useState(() => {
    const item = store.getItem(key);

    return item ? deserialize(item) : initialState;
  });

  useEffect(() => {
    store.setItem(key, serialize(state));
  }, [key, state]);

  const remove = useCallback(() => {
    setState(undefined);
    store.removeItem(key);
  }, [key, setState]);

  return [state, setState, remove];
};

export default usePersistState;
