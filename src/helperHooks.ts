import usePersistState from './usePersistState';
import usePersistReducer from './usePersistReducer';
import idb from './idb';
import type { TOptions } from './types';

export const useLocalState = (key: string, initialState: any, options?: TOptions) => {
  return usePersistState({ storage: window.localStorage, key, initialState, options });
};

export const useSessionState = (key: string, initialState: any, options?: TOptions) => {
  return usePersistState({ storage: window.sessionStorage, key, initialState, options });
};

export const useIDBState = (key: string, initialState: any, options?: TOptions) => {
  return usePersistState({
    storage: idb,
    key,
    initialState,
    options: { isAsync: true, raw: true, ...options }
  });
};

export const useLocalReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options?: TOptions
) => {
  return usePersistReducer({ storage: window.localStorage, key, reducer, initialState, options });
};

export const useSessionReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options?: TOptions
) => {
  return usePersistReducer({ storage: window.sessionStorage, key, reducer, initialState, options });
};

export const useIDBReducer = (key: string, reducer: any, initialState: any, options?: TOptions) => {
  return usePersistReducer({
    storage: idb,
    key,
    reducer,
    initialState,
    options: { isAsync: true, raw: true, ...options }
  });
};
