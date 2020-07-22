import usePersistState from './usePersistState';
import usePersistReducer from './usePersistReducer';
import type { TOptions } from './types';

export const useLocalState = (key: string, initialState: any, options?: TOptions) => {
  return usePersistState({ store: window.localStorage, key, initialState, options });
};

export const useSessionState = (key: string, initialState: any, options?: TOptions) => {
  return usePersistState({ store: window.sessionStorage, key, initialState, options });
};

export const useLocalReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options?: TOptions
) => {
  return usePersistReducer({ store: window.localStorage, key, reducer, initialState, options });
};

export const useSessionReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options?: TOptions
) => {
  return usePersistReducer({ store: window.sessionStorage, key, reducer, initialState, options });
};
