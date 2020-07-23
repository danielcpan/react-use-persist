import { useState, useCallback, useEffect, useMemo } from 'react';
import { isString, rawFn } from './utils';
import type { TUsePersist } from './types';

const usePersistState = ({
  storage,
  key,
  initialState,
  options: {
    isAsync = false,
    raw = false,
    serializer = JSON.stringify,
    deserializer = JSON.parse
  } = {}
}: TUsePersist) => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const deserialize = useCallback(raw ? rawFn : deserializer, [raw, deserializer]);
  const serialize = useCallback(raw ? rawFn : serializer, [raw, serializer]);
  const init = useMemo(() => {
    if (isAsync) return initialState;

    const item = storage.getItem(key);

    return item ? deserialize(item) : initialState;
  }, [key, initialState, deserialize, storage, isAsync]);

  const [state, setState] = useState(init);

  useEffect(() => {
    if (!isAsync) return;

    storage.getItem(key).then((value: any) => {
      setState(value);
    });
  }, [key, isAsync]);

  useEffect(() => {
    storage.setItem(key, serialize(state));
  }, [key, state]);

  return [state, setState, storage];
};

export default usePersistState;
