import { Reducer } from 'react';

export type TStorage = {
  getItem: (key: string) => any;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

export type TOptions = {
  isAsync?: boolean;
  raw?: boolean;
  serializer?: (value: any) => string;
  deserializer?: (value: string) => any;
};

export type TUsePersist = {
  storage: TStorage;
  key: string;
  reducer?: Reducer<any, any>;
  initialState: any;
  options?: TOptions;
};

export type TUsePersistReducer<S, A> = {
  storage: TStorage;
  key: string;
  reducer: Reducer<S, A>;
  initialState: S;
  options?: TOptions;
};
