import { useReducer, useCallback, useEffect, useMemo, Dispatch } from 'react';
import { isString, rawFn } from './utils';
import type { TUsePersistReducer, TStorage } from './types';

const usePersistReducer = <S, A>({
  storage,
  key,
  reducer,
  initialState,
  options: {
    isAsync = false,
    raw = false,
    serializer = JSON.stringify,
    deserializer = JSON.parse
  } = {}
}: TUsePersistReducer<S, A>): [S, Dispatch<A>, TStorage] => {
  if (!isString(key)) throw new Error('Key must be of type string!');

  const deserialize = useCallback(raw ? rawFn : deserializer, [raw, deserializer]);
  const serialize = useCallback(raw ? rawFn : serializer, [raw, serializer]);
  const init = useMemo(() => {
    if (isAsync) return initialState;

    const item = storage.getItem(key);

    return item ? deserialize(item) : initialState;
  }, [key, initialState, deserialize, isAsync]);

  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    storage.setItem(key, serialize(state));
  }, [key, state]);

  return [state, dispatch, storage];
};

export default usePersistReducer;
