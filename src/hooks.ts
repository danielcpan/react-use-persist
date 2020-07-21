import { usePersistStateBase, usePersistReducerBase } from './utils';

export const useLocalState = (key: string, initialState: any, options = { writeInit: false }) => {
  return usePersistStateBase({
    store: window.localStorage,
    key,
    initialState,
    options
  });
};

export const useLocalReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options = { writeInit: false }
) => {
  return usePersistReducerBase({
    store: window.localStorage,
    key,
    reducer,
    initialState,
    options
  });
};

export const useSessionState = (key: string, initialState: any, options = { writeInit: false }) => {
  return usePersistStateBase({
    store: window.sessionStorage,
    key,
    initialState,
    options
  });
};

export const useSessionReducer = (
  key: string,
  reducer: any,
  initialState: any,
  options = { writeInit: false }
) => {
  return usePersistReducerBase({
    store: window.sessionStorage,
    key,
    reducer,
    initialState,
    options
  });
};
