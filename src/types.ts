export type TStore = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
};

export type TOptions = {
  raw?: boolean;
  serialize?: (value: any) => string;
  deserialize?: (value: string) => any;
};

export type TUsePersist = {
  store: TStore;
  key: string;
  reducer?: any;
  initialState: any;
  options?: TOptions;
};
