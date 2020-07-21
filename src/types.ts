export type TOptions = {
  writeInit?: boolean | undefined;
};

export type TUsePersistBase = {
  store: any;
  key: string;
  reducer?: any;
  initialState: any;
  options: TOptions;
};
